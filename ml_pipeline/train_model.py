#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
VORTEX Kazakhstan — Пайплайн загрузки реальных архивных данных и обучения ML-ядра (VortexPredict)
Конкурс: GREENHACK KAZAKHSTAN 2026

Источник данных:
  1. Open-Meteo Air Quality API (спутниковый реанализ Copernicus CAMS):
     почасовые измерения pm2_5, pm10, carbon_monoxide, nitrogen_dioxide
  2. Open-Meteo Historical Weather Archive API (реанализ ERA5):
     почасовые измерения temperature_2m, wind_speed_10m, surface_pressure
  Локация: г. Алматы (43.2389° N, 76.8897° E, Asia/Almaty)
  Отопительный сезон: 2025-12-01 — 2026-02-28 (2 160 реальных почасовых наблюдений)

Фиксированная конфигурация ансамбля:
  GradientBoostingRegressor(n_estimators=100, max_depth=5, random_state=42)
"""

from __future__ import annotations

import json
import sys
import urllib.request
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor, RandomForestRegressor
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
ARTIFACTS_DIR = BASE_DIR / "artifacts"

ALMATY_LAT = 43.2389
ALMATY_LON = 76.8897
START_DATE = "2025-12-01"
END_DATE = "2026-02-28"
TIMEZONE = "Asia%2FAlmaty"

AIR_QUALITY_URL = (
    "https://air-quality-api.open-meteo.com/v1/air-quality"
    f"?latitude={ALMATY_LAT}&longitude={ALMATY_LON}"
    f"&start_date={START_DATE}&end_date={END_DATE}"
    "&hourly=pm2_5,pm10,carbon_monoxide,nitrogen_dioxide"
    f"&timezone={TIMEZONE}"
)

WEATHER_ARCHIVE_URL = (
    "https://archive-api.open-meteo.com/v1/archive"
    f"?latitude={ALMATY_LAT}&longitude={ALMATY_LON}"
    f"&start_date={START_DATE}&end_date={END_DATE}"
    "&hourly=temperature_2m,wind_speed_10m,surface_pressure"
    f"&timezone={TIMEZONE}"
)

N_ESTIMATORS = 100
MAX_DEPTH = 5
RANDOM_STATE = 42

FEATURE_COLUMNS = [
    "temperature_2m",
    "wind_speed_ms",
    "surface_pressure",
    "carbon_monoxide",
    "nitrogen_dioxide",
    "hour_of_day",
    "day_of_year",
    "is_weekend",
    "inversion_height_m",
    "temp_24h_mean",
    "pressure_24h_mean",
    "co_6h_mean",
    "no2_6h_mean",
    "co_24h_mean",
    "no2_24h_mean",
]


def _get_json(url: str) -> dict:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "VORTEX-KZ-Pipeline/1.0",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_real_historical_data() -> pd.DataFrame:
    """
    Выгружает реальные почасовые измерения аэрозолей/газов (Copernicus CAMS)
    и метеопараметров (ERA5) над Алматы за зиму 2025–2026 гг. и объединяет их по времени.
    """
    aq_payload = _get_json(AIR_QUALITY_URL)
    wx_payload = _get_json(WEATHER_ARCHIVE_URL)

    if "hourly" not in aq_payload or "hourly" not in wx_payload:
        raise RuntimeError("Некорректный ответ API Open-Meteo: отсутствует блок 'hourly'.")

    df_aq = pd.DataFrame(aq_payload["hourly"])
    df_wx = pd.DataFrame(wx_payload["hourly"])

    df = pd.merge(df_aq, df_wx, on="time", how="inner")
    df = df.sort_values("time").reset_index(drop=True)
    df = df.ffill().bfill()

    ts = pd.to_datetime(df["time"])
    df["city"] = "almaty"
    df["latitude"] = ALMATY_LAT
    df["longitude"] = ALMATY_LON

    # Перевод скорости ветра из км/ч (стандарт архива Open-Meteo) в м/с
    df["wind_speed_ms"] = (df["wind_speed_10m"] / 3.6).round(2)
    df["hour_of_day"] = ts.dt.hour
    df["day_of_year"] = ts.dt.day_of_year
    df["is_weekend"] = (ts.dt.day_of_week >= 5).astype(int)

    # Диагностическая высота приземного слоя перемешивания / температурной инверсии (м)
    solar_curve = np.exp(-((df["hour_of_day"] - 14.0) ** 2) / 9.0)
    pressure_excess = np.maximum(0.0, df["surface_pressure"] - 925.0)
    df["inversion_height_m"] = np.clip(
        235.0
        + 215.0 * solar_curve
        + 46.0 * df["wind_speed_ms"]
        - 6.0 * pressure_excess
        + 3.8 * df["temperature_2m"],
        120.0,
        950.0,
    ).round(1)

    # Синоптическая инерция воздушной массы и газовых трассеров горения (без утечки PM2.5/PM10)
    df["temp_24h_mean"] = df["temperature_2m"].rolling(24, min_periods=1).mean().round(2)
    df["pressure_24h_mean"] = df["surface_pressure"].rolling(24, min_periods=1).mean().round(2)
    df["co_6h_mean"] = df["carbon_monoxide"].rolling(6, min_periods=1).mean().round(1)
    df["no2_6h_mean"] = df["nitrogen_dioxide"].rolling(6, min_periods=1).mean().round(2)
    df["co_24h_mean"] = df["carbon_monoxide"].rolling(24, min_periods=1).mean().round(1)
    df["no2_24h_mean"] = df["nitrogen_dioxide"].rolling(24, min_periods=1).mean().round(2)

    ordered_cols = [
        "time",
        "city",
        "latitude",
        "longitude",
        "pm2_5",
        "pm10",
        "carbon_monoxide",
        "nitrogen_dioxide",
        "temperature_2m",
        "wind_speed_10m",
        "wind_speed_ms",
        "surface_pressure",
        "hour_of_day",
        "day_of_year",
        "is_weekend",
        "inversion_height_m",
        "temp_24h_mean",
        "pressure_24h_mean",
        "co_6h_mean",
        "no2_6h_mean",
        "co_24h_mean",
        "no2_24h_mean",
    ]
    return df[ordered_cols]


def export_vortex_gbm_to_js(
    gbm: GradientBoostingRegressor,
    metrics_report: dict,
    out_path: Path,
) -> None:
    """
    Экспортирует ансамбль VortexPredict (100 деревьев, max_depth=5)
    в автономный браузерный модуль `window.VORTEX_ML_ENGINE`.
    """
    init_pred = float(gbm.init_.constant_[0][0])
    lr = float(gbm.learning_rate)

    serialized_trees = []
    for stage in gbm.estimators_:
        tree = stage[0].tree_
        nodes = []
        for i in range(tree.node_count):
            nodes.append(
                [
                    int(tree.children_left[i]),
                    int(tree.children_right[i]),
                    int(tree.feature[i]),
                    round(float(tree.threshold[i]), 4),
                    round(float(tree.value[i][0][0]), 4),
                ]
            )
        serialized_trees.append(nodes)

    payload = {
        "model_name": "VortexPredict GradientBoostingRegressor",
        "framework": "scikit-learn",
        "version": "4.0.0-cams-real",
        "n_estimators": len(serialized_trees),
        "max_depth": int(gbm.max_depth),
        "learning_rate": lr,
        "random_state": RANDOM_STATE,
        "dataset_rows": metrics_report["dataset_rows"],
        "base_score": round(init_pred, 4),
        "features": FEATURE_COLUMNS,
        "metrics": metrics_report["models"]["GradientBoostingRegressor"],
        "benchmark": metrics_report["models"],
        "feature_importances": metrics_report["feature_importances"],
        "trees": serialized_trees,
    }

    js_code = (
        "// Автоматически сгенерировано скриптом ml_pipeline/train_model.py\n"
        "// Ансамбль VortexPredict (100 деревьев, max_depth=5), обученный на реальном архиве CAMS / Open-Meteo\n"
        f"window.VORTEX_ML_ENGINE = {json.dumps(payload, ensure_ascii=False)};\n\n"
        "window.predictPM25WithVortexGBM = function(featureObj) {\n"
        "  const m = window.VORTEX_ML_ENGINE;\n"
        "  if (!m || !Array.isArray(m.trees)) return null;\n"
        "  const x = m.features.map(f => Number(featureObj[f] ?? 0));\n"
        "  let score = m.base_score;\n"
        "  const lr = m.learning_rate;\n"
        "  for (let t = 0; t < m.trees.length; t++) {\n"
        "    const nodes = m.trees[t];\n"
        "    let idx = 0;\n"
        "    while (idx >= 0 && idx < nodes.length && nodes[idx][0] !== -1) {\n"
        "      idx = x[nodes[idx][2]] <= nodes[idx][3] ? nodes[idx][0] : nodes[idx][1];\n"
        "    }\n"
        "    score += lr * nodes[idx][4];\n"
        "  }\n"
        "  return Math.max(3.0, Math.round(score * 10) / 10);\n"
        "};\n"
    )
    out_path.write_text(js_code, encoding="utf-8")


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    ARTIFACTS_DIR.mkdir(parents=True, exist_ok=True)

    print(
        f"[1/4] Загрузка реального почасового архива Open-Meteo / CAMS для Алматы ({START_DATE} .. {END_DATE})..."
    )
    df = fetch_real_historical_data()

    csv_path = DATA_DIR / "kz_air_quality_dataset.csv"
    df.to_csv(csv_path, index=False, encoding="utf-8")
    print(f"      Датасет сохранён -> {csv_path} ({len(df)} реальных почасовых наблюдений)")

    X = df[FEATURE_COLUMNS]
    y = df["pm2_5"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=RANDOM_STATE
    )

    print(
        f"[2/4] Обучение и валидация моделей (n_estimators={N_ESTIMATORS}, max_depth={MAX_DEPTH}, random_state={RANDOM_STATE})..."
    )
    candidates = {
        "RidgeLinearBaseline": Ridge(alpha=1.0),
        "RandomForestRegressor": RandomForestRegressor(
            n_estimators=N_ESTIMATORS,
            max_depth=MAX_DEPTH,
            random_state=RANDOM_STATE,
            n_jobs=-1,
        ),
        "GradientBoostingRegressor": GradientBoostingRegressor(
            n_estimators=N_ESTIMATORS,
            max_depth=MAX_DEPTH,
            random_state=RANDOM_STATE,
        ),
    }

    results = {}
    trained = {}
    for name, model in candidates.items():
        model.fit(X_train, y_train)
        preds = model.predict(X_test)
        mae = float(mean_absolute_error(y_test, preds))
        rmse = float(np.sqrt(mean_squared_error(y_test, preds)))
        r2 = float(r2_score(y_test, preds))
        results[name] = {
            "MAE_ug_m3": round(mae, 2),
            "RMSE_ug_m3": round(rmse, 2),
            "R2_score": round(r2, 4),
        }
        trained[name] = model
        print(
            f"      * {name:26s} | R2 = {r2:.4f} | MAE = {mae:.2f} мкг/м³ | RMSE = {rmse:.2f} мкг/м³"
        )

    gbm = trained["GradientBoostingRegressor"]
    importances = {
        feat: round(float(imp * 100.0), 2)
        for feat, imp in sorted(
            zip(FEATURE_COLUMNS, gbm.feature_importances_),
            key=lambda item: item[1],
            reverse=True,
        )
    }

    metrics_report = {
        "project": "VORTEX Kazakhstan",
        "model_name": "VortexPredict GradientBoostingRegressor",
        "data_source": "Open-Meteo Air Quality API (Copernicus CAMS) + Open-Meteo Archive API (ERA5)",
        "location": {
            "city": "Almaty",
            "latitude": ALMATY_LAT,
            "longitude": ALMATY_LON,
            "timezone": "Asia/Almaty",
        },
        "period": {
            "start_date": START_DATE,
            "end_date": END_DATE,
        },
        "hyperparameters": {
            "n_estimators": N_ESTIMATORS,
            "max_depth": MAX_DEPTH,
            "learning_rate": float(gbm.learning_rate),
            "random_state": RANDOM_STATE,
        },
        "dataset_rows": int(len(df)),
        "train_rows": int(len(X_train)),
        "test_rows": int(len(X_test)),
        "target": "pm2_5",
        "features": FEATURE_COLUMNS,
        "models": results,
        "feature_importances": importances,
    }

    metrics_path = ARTIFACTS_DIR / "evaluation_metrics.json"
    metrics_path.write_text(
        json.dumps(metrics_report, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"[3/4] Метрики валидации сохранены -> {metrics_path}")

    js_model_path = ARTIFACTS_DIR / "vortex_gbm_model.js"
    export_vortex_gbm_to_js(gbm, metrics_report, js_model_path)
    print(f"[4/4] Экспортировано {gbm.n_estimators} деревьев (max_depth={gbm.max_depth}) -> {js_model_path}")


if __name__ == "__main__":
    main()
