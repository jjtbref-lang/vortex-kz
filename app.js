(function () {
  'use strict';

  // Словарь локализации интерфейса (RU / KZ)
  const dict = {
    ru: {
      liveBadge: 'Онлайн • 48ч',
      brandSub: 'Индустриальная система прогноза инверсии и PM2.5',
      btnTelegram: 'Telegram-алерты',
      btnAbout: 'О системе',
      btnTour: 'Тур',
      btnPdf: 'Сводка PDF',
      searchDistrictLabel: 'Поиск района',
      searchZoomHint: 'зум к кварталу',
      searchPlaceholder: 'Найти микрорайон (Самал, Орбита, Коктал...)',
      hudWind: 'Ветер:',
      hudInv: 'Инверсия:',
      layerDome: 'Купол смога',
      layerWind: 'Потоки ветра',
      layerSat: 'Спутник',
      scaleCaption: 'Индекс качества воздуха AQI',
      tabSummary: 'Сводка',
      tabForecast: 'Прогноз',
      tabCompare: 'Сравнить',
      tabWhatIf: 'Что если?',
      tabGuide: 'Гид',
      unitUg: 'мкг/м³',
      lblWind: 'Ветер',
      cleanWinTitle: 'Окно чистого воздуха',
      stationsTitle: 'Опорные посты города',
      btnOpenCompareLink: 'Сравнить 2 поста ⇄',
      forecastHead: 'Почасовой прогноз PM2.5 на 48 часов',
      forecastSub: 'Расчёт высоты слоя перемешивания H_inv и ветрового сноса',
      legBase: 'Базовый сценарий',
      legEco: 'С эко-мерами',
      diurnalHead: 'Суточные фазы накопления смога',
      factorsHead: 'Вклад факторов в текущий час',
      cmpTitle: 'Сравнение двух районов',
      btnPickOnMap: 'Выбрать на карте',
      cmpPostA: 'Пост А (первый район)',
      cmpPostB: 'Пост Б (второй район)',
      cmpChartTitle: 'Динамика PM2.5 и высоты инверсии H_inv (48ч)',
      legInvLine: 'Инверсия H_inv (м)',
      simResultTag: 'Расчёт предотвращённого ущерба',
      btnReset: 'Сбросить',
      presetEco: 'Пакет «EcoHeat + Транзит»',
      presetEcoDesc: 'Печи 80% • Дизель -60%',
      presetWind: 'Горно-долинный ветер',
      presetWindDesc: 'Продув 5.5 м/с (срыв инверсии)',
      slWind: '1. Скорость ветра (v)',
      hintCalm: '0.5 м/с (штиль)',
      hintBreak: '4.5+ м/с (вынос смога)',
      slStove: '2. Эко-розжиг печей (EcoHeat)',
      hintCoalBase: 'Обычная топка',
      hintCoalMax: 'До -38% сажи частного сектора',
      slTraffic: '3. Фильтрация дизельного транзита',
      hintTrafBase: 'Штатный поток',
      hintTrafMax: 'Ограничение фур в часы НМУ',
      miniChartHead: 'Сравнение кривых 48ч: база vs меры (мкг/м³)',
      roleParents: 'Для родителей и школ',
      roleEcoHeat: 'Для частного сектора (EcoHeat)',
      roleDrivers: 'Для водителей',
      ctaTelegramBot: 'Настроить утренние и вечерние Telegram-алерты →',
      tlHorizon: 'Горизонт:',
      onbBadge: 'VORTEX • Инженерный экологический мониторинг РК',
      onbTitle: 'Почему города Казахстана задыхаются зимой?',
      onbSub: 'Платформа VORTEX объединяет расчёт температурной инверсии, ветрового потока и локальных выбросов, предупреждая о пиках смога за 48 часов.',
      onb1Tag: '1. Физика проблемы',
      onb1Title: 'Крышка инверсии 200–300 м',
      onb1Desc: 'Холодный воздух в котловинах запирается тёплым слоем сверху: дым частных печей, ТЭЦ и фур концентрируется прямо на уровне дыхания.',
      onb2Tag: '2. Технология VORTEX',
      onb2Title: 'Упреждающий расчёт 48ч',
      onb2Desc: 'Сравнивайте районы между собой (например, Медеу и Шанырак), находите микрорайоны на карте и моделируйте эффект мер снижения выбросов.',
      onb3Tag: '3. Практическая польза',
      onb3Title: 'Чистое окно и Telegram-бот',
      onb3Desc: 'Система заранее находит дневное окно для проветривания школ и квартир и присылает утренние и вечерние сводки в Telegram.',
      onbDontShow: 'Не показывать автоматически при следующем входе',
      btnStartTourModal: 'Пошаговый гид (4 шага)',
      btnEnterApp: 'Открыть карту VORTEX',
      tgModalSub: 'Персональные утренние и вечерние предупреждения о смоге и окнах проветривания',
      tgCityLbl: 'Город мониторинга',
      tgDistrictLbl: 'Район или ближайший пост',
      tgHandleLbl: 'Ваш Telegram (@username)',
      tgOptMorning: '07:00 — Утренняя сводка (маршрут в школу)',
      tgOptEvening: '19:00 — Вечерний алерт инверсии и топки печей',
      tgOptWindow: 'За 30 мин до «Окна чистого воздуха»',
      tgPreviewLabel: 'Предпросмотр сообщения бота',
      btnTgTest: 'Отправить тестовый алерт',
      btnTgSubscribe: 'Подключить уведомления',
      tourBack: 'Назад',
      tourNext: 'Далее →',
      tourDone: 'Готово ✓'
    },
    kz: {
      liveBadge: 'Онлайн • 48с',
      brandSub: 'Инверсия мен PM2.5 индустриялық болжау жүйесі',
      btnTelegram: 'Telegram-ескерту',
      btnAbout: 'Жүйе туралы',
      btnTour: 'Тур',
      btnPdf: 'PDF есеп',
      searchDistrictLabel: 'Ауданды іздеу',
      searchZoomHint: 'орамға жақындату',
      searchPlaceholder: 'Шағынауданды табу (Самал, Орбита, Көктал...)',
      hudWind: 'Жел:',
      hudInv: 'Инверсия:',
      layerDome: 'Түтін күмбезі',
      layerWind: 'Жел ағыны',
      layerSat: 'Спутник',
      scaleCaption: 'Ауа сапасының индексі AQI',
      tabSummary: 'Сводка',
      tabForecast: 'Болжам',
      tabCompare: 'Салыстыру',
      tabWhatIf: 'Не болады?',
      tabGuide: 'Нұсқаулық',
      unitUg: 'мкг/м³',
      lblWind: 'Жел',
      cleanWinTitle: 'Таза ауа терезесі',
      stationsTitle: 'Қалалық тірек бекеттер',
      btnOpenCompareLink: '2 бекетті салыстыру ⇄',
      forecastHead: '48 сағаттық PM2.5 болжамы',
      forecastSub: 'Араласу қабаты H_inv және жел ағынын есептеу',
      legBase: 'Базалық сценарий',
      legEco: 'Эко-шаралармен',
      diurnalHead: 'Түтін жиналуының тәуліктік фазалары',
      factorsHead: 'Ағымдағы сағаттағы факторлар үлесі',
      cmpTitle: 'Екі ауданды салыстыру',
      btnPickOnMap: 'Картадан таңдау',
      cmpPostA: 'А бекеті (бірінші аудан)',
      cmpPostB: 'Б бекеті (екінші аудан)',
      cmpChartTitle: 'PM2.5 және H_inv инверсия биіктігінің динамикасы (48с)',
      legInvLine: 'Инверсия H_inv (м)',
      simResultTag: 'Алдын алынған зиян есебі',
      btnReset: 'Қалпына келтіру',
      presetEco: '«EcoHeat + Транзит» пакеті',
      presetEcoDesc: 'Пештер 80% • Дизель -60%',
      presetWind: 'Тау-аңғар самалы',
      presetWindDesc: '5.5 м/с желдету (инверсия бұзылуы)',
      slWind: '1. Жел жылдамдығы (v)',
      hintCalm: '0.5 м/с (тымық)',
      hintBreak: '4.5+ м/с (түтінді айдау)',
      slStove: '2. Пешті эко-тұтату (EcoHeat)',
      hintCoalBase: 'Кәдімгі жағу',
      hintCoalMax: 'Жеке сектор күйесін -38%-ға дейін азайту',
      slTraffic: '3. Дизель транзитін сүзу',
      hintTrafBase: 'Қалыпты ағын',
      hintTrafMax: 'Қолайсыз метеожағдайда жүк көлігін шектеу',
      miniChartHead: '48с қисықтарды салыстыру: база vs шаралар',
      roleParents: 'Ата-аналар мен мектептерге',
      roleEcoHeat: 'Жеке секторға (EcoHeat)',
      roleDrivers: 'Жүргізушілерге',
      ctaTelegramBot: 'Таңғы және кешкі Telegram-ескертулерді қосу →',
      tlHorizon: 'Көкжиек:',
      onbBadge: 'VORTEX • ҚР инженерлік экологиялық мониторингі',
      onbTitle: 'Неліктен қыста Қазақстан қалалары тұншығады?',
      onbSub: 'VORTEX платформасы температуралық инверсияны, жел ағынын және жергілікті шығарындыларды есептеп, түтін шыңдарын 48 сағат бұрын ескертеді.',
      onb1Tag: '1. Мәселе физикасы',
      onb1Title: '200–300 м инверсия қақпағы',
      onb1Desc: 'Қазаншұңқырдағы суық ауа жоғарыдан жылы қабатпен жабылады: жеке пештердің, ЖЭО мен көліктердің түтіні тыныс алу деңгейінде жиналады.',
      onb2Tag: '2. VORTEX технологиясы',
      onb2Title: '48 сағат алдын ала есептеу',
      onb2Desc: 'Аудандарды өзара салыстырыңыз (мысалы, Медеу мен Шаңырақ), шағынаудандарды картадан табыңыз және эко-шаралар әсерін модельдеңіз.',
      onb3Tag: '3. Нақты пайда',
      onb3Title: 'Таза терезе және Telegram-бот',
      onb3Desc: 'Жүйе мектептер мен пәтерлерді желдетудің қауіпсіз уақытын тауып, таңғы және кешкі ескертулерді Telegram-ға жібереді.',
      onbDontShow: 'Келесі кіргенде автоматты түрде көрсетпеу',
      btnStartTourModal: 'Қадамдық гид (4 қадам)',
      btnEnterApp: 'VORTEX картасын ашу',
      tgModalSub: 'Түтін мен желдету уақыты туралы жеке таңғы және кешкі хабарламалар',
      tgCityLbl: 'Мониторинг қаласы',
      tgDistrictLbl: 'Аудан немесе жақын бекет',
      tgHandleLbl: 'Сіздің Telegram (@username)',
      tgOptMorning: '07:00 — Таңғы сводка (мектеп маршруты)',
      tgOptEvening: '19:00 — Кешкі инверсия және пеш жағу ескертуі',
      tgOptWindow: '«Таза ауа терезесіне» 30 мин қалғанда',
      tgPreviewLabel: 'Бот хабарламасының үлгісі',
      btnTgTest: 'Тестілік ескерту жіберу',
      btnTgSubscribe: 'Хабарламаларды қосу',
      tourBack: 'Артқа',
      tourNext: 'Келесі →',
      tourDone: 'Дайын ✓'
    }
  };

  // Справочник 6 городов РК, опорных постов и жилых микрорайонов для поиска
  const CITIES = {
    almaty: {
      id: 'almaty',
      nameRu: 'Алматы',
      nameKz: 'Алматы',
      terrainRu: 'Предгорная котловина Заилийского Алатау',
      terrainKz: 'Іле Алатауының тау бөктеріндегі қазаншұңқыры',
      center: [43.238949, 76.889709],
      zoom: 11,
      baseTemp: -7,
      baseWind: 1.1,
      windDeg: 225,
      baseInversionM: 185,
      basinTrap: 1.24,
      dailyEmissionsTonnes: 44.8,
      coalShare: 0.56,
      trafficShare: 0.32,
      stations: [
        {
          id: 'alm-shanyrak',
          nameRu: 'Шанырак / ТЭЦ-2',
          nameKz: 'Шаңырақ / ЖЭО-2',
          zoneRu: 'Печной угольный сектор и шлейф ТЭЦ-2 (низина, 680 м)',
          zoneKz: 'Көмір пештері секторы және ЖЭО-2 шлейфі (ойпат, 680 м)',
          lat: 43.2875,
          lng: 76.8190,
          altM: 680,
          localFactor: 1.38,
          coalWeight: 1.28,
          trafficWeight: 0.85,
          radiusM: 4900,
          aboveInversion: false
        },
        {
          id: 'alm-ryskulova',
          nameRu: 'Рыскулова / Сейфуллина',
          nameKz: 'Рысқұлов / Сейфуллин',
          zoneRu: 'Северный транзитный узел и дизельный поток (740 м)',
          zoneKz: 'Солтүстік транзиттік торап және дизель ағыны (740 м)',
          lat: 43.2742,
          lng: 76.9298,
          altM: 740,
          localFactor: 1.06,
          coalWeight: 0.92,
          trafficWeight: 1.35,
          radiusM: 4200,
          aboveInversion: false
        },
        {
          id: 'alm-abay',
          nameRu: 'Абая / Достык',
          nameKz: 'Абай / Достық',
          zoneRu: 'Деловой и культурный центр, средняя терраса (850 м)',
          zoneKz: 'Іскерлік орталық, орта терраса (850 м)',
          lat: 43.2415,
          lng: 76.9574,
          altM: 850,
          localFactor: 0.66,
          coalWeight: 0.65,
          trafficWeight: 1.15,
          radiusM: 3600,
          aboveInversion: false
        },
        {
          id: 'alm-medeu',
          nameRu: 'Медеу (1690 м)',
          nameKz: 'Медеу (1690 м)',
          zoneRu: 'Высокогорье выше запирающего слоя инверсии',
          zoneKz: 'Инверсия қабатынан жоғары таулы таза аймақ',
          lat: 43.1575,
          lng: 77.0588,
          altM: 1690,
          localFactor: 0.08,
          coalWeight: 0.1,
          trafficWeight: 0.25,
          radiusM: 3300,
          aboveInversion: true
        }
      ],
      districts: [
        { id: 'd-samal', nameRu: 'Самал-2', nameKz: 'Самал-2', lat: 43.2315, lng: 76.9565, factor: 0.62 },
        { id: 'd-orbita', nameRu: 'Орбита-3', nameKz: 'Орбита-3', lat: 43.2015, lng: 76.8810, factor: 0.54 },
        { id: 'd-aksay', nameRu: 'Аксай-4', nameKz: 'Ақсай-4', lat: 43.2305, lng: 76.8355, factor: 0.96 },
        { id: 'd-tastak', nameRu: 'Тастак', nameKz: 'Тастақ', lat: 43.2465, lng: 76.8760, factor: 0.92 },
        { id: 'd-kalkaman', nameRu: 'Калкаман-2', nameKz: 'Қалқаман-2', lat: 43.2390, lng: 76.7980, factor: 1.16 },
        { id: 'd-koktobe', nameRu: 'Кок-Тобе', nameKz: 'Көктөбе', lat: 43.2330, lng: 76.9760, factor: 0.34 }
      ]
    },

    astana: {
      id: 'astana',
      nameRu: 'Астана',
      nameKz: 'Астана',
      terrainRu: 'Морозный степной антициклон при ночном штиле',
      terrainKz: 'Түнгі тымықтағы аязды дала антициклоны',
      center: [51.169392, 71.449074],
      zoom: 11,
      baseTemp: -17,
      baseWind: 2.1,
      windDeg: 250,
      baseInversionM: 215,
      basinTrap: 1.08,
      dailyEmissionsTonnes: 39.2,
      coalShare: 0.58,
      trafficShare: 0.28,
      stations: [
        {
          id: 'ast-koktal',
          nameRu: 'Коктал-1 (печной сектор)',
          nameKz: 'Көктал-1 (пеш секторы)',
          zoneRu: 'Частный жилой массив с плотной топкой угля',
          zoneKz: 'Көмір жағатын жеке тұрғын алабы',
          lat: 51.1865,
          lng: 71.3620,
          altM: 342,
          localFactor: 1.34,
          coalWeight: 1.32,
          trafficWeight: 0.78,
          radiusM: 4600,
          aboveInversion: false
        },
        {
          id: 'ast-rightbank',
          nameRu: 'Правый берег / ТЭЦ-1–2',
          nameKz: 'Оң жағалау / ЖЭО-1–2',
          zoneRu: 'Энергетический узел и старый центр',
          zoneKz: 'Энергетикалық торап және ескі орталық',
          lat: 51.1895,
          lng: 71.4740,
          altM: 348,
          localFactor: 1.08,
          coalWeight: 1.05,
          trafficWeight: 1.12,
          radiusM: 4100,
          aboveInversion: false
        },
        {
          id: 'ast-southeast',
          nameRu: 'Юго-Восток',
          nameKz: 'Оңтүстік-Шығыс',
          zoneRu: 'Жилой и коттеджный сектор, вечерний дым',
          zoneKz: 'Тұрғын және коттедж секторы, кешкі түтін',
          lat: 51.1440,
          lng: 71.5190,
          altM: 350,
          localFactor: 0.94,
          coalWeight: 1.1,
          trafficWeight: 0.95,
          radiusM: 3900,
          aboveInversion: false
        },
        {
          id: 'ast-mangilik',
          nameRu: 'Левый берег / Мәңгілік Ел',
          nameKz: 'Сол жағалау / Мәңгілік Ел',
          zoneRu: 'Широкие продуваемые проспекты нового центра',
          zoneKz: 'Жаңа орталықтың желдетілетін кең даңғылдары',
          lat: 51.1165,
          lng: 71.4305,
          altM: 356,
          localFactor: 0.48,
          coalWeight: 0.45,
          trafficWeight: 1.08,
          radiusM: 3600,
          aboveInversion: false
        }
      ],
      districts: [
        { id: 'd-esyl', nameRu: 'Есиль / Ботанический', nameKz: 'Есіл / Ботаникалық', lat: 51.1085, lng: 71.4160, factor: 0.46 },
        { id: 'd-saryarka', nameRu: 'Сарыарка', nameKz: 'Сарыарқа', lat: 51.1740, lng: 71.4120, factor: 1.04 },
        { id: 'd-baykonyr', nameRu: 'Байконыр / Встреча', nameKz: 'Байқоңыр', lat: 51.1635, lng: 71.4710, factor: 0.98 },
        { id: 'd-nurlyzhol', nameRu: 'Нурлы Жол', nameKz: 'Нұрлы Жол', lat: 51.1245, lng: 71.5360, factor: 0.86 },
        { id: 'd-agrogorod', nameRu: 'Агрогородок', nameKz: 'Агроқалашық', lat: 51.2040, lng: 71.3880, factor: 1.28 }
      ]
    },

    oskemen: {
      id: 'oskemen',
      nameRu: 'Өскемен',
      nameKz: 'Өскемен',
      terrainRu: 'Межгорная котловина Иртыша и Ульбы, промзона',
      terrainKz: 'Ертіс пен Үлбі тауаралық қазаншұңқыры, өнеркәсіп аймағы',
      center: [49.9483, 82.6278],
      zoom: 12,
      baseTemp: -13,
      baseWind: 1.2,
      windDeg: 135,
      baseInversionM: 190,
      basinTrap: 1.26,
      dailyEmissionsTonnes: 36.5,
      coalShare: 0.48,
      trafficShare: 0.25,
      stations: [
        {
          id: 'osk-northprom',
          nameRu: 'Северная промзона / ТЭЦ',
          nameKz: 'Солтүстік өнеркәсіп / ЖЭО',
          zoneRu: 'Металлургический кластер и теплоэлектроцентраль',
          zoneKz: 'Металлургиялық кластер және жылу электр орталығы',
          lat: 49.9835,
          lng: 82.6345,
          altM: 288,
          localFactor: 1.36,
          coalWeight: 1.15,
          trafficWeight: 0.9,
          radiusM: 3800,
          aboveInversion: false
        },
        {
          id: 'osk-strelka',
          nameRu: 'Стрелка / Ульбинский р-н',
          nameKz: 'Стрелка / Үлбі ауданы',
          zoneRu: 'Влажная речная низина, застойный купол в штиль',
          zoneKz: 'Ылғалды өзен ойпаты, тымықтағы тұрып қалған түтін',
          lat: 49.9510,
          lng: 82.6085,
          altM: 282,
          localFactor: 1.05,
          coalWeight: 0.95,
          trafficWeight: 1.1,
          radiusM: 3400,
          aboveInversion: false
        },
        {
          id: 'osk-zashita',
          nameRu: 'Защита (частный сектор)',
          nameKz: 'Защита (жеке сектор)',
          zoneRu: 'Печное отопление и железнодорожный узел',
          zoneKz: 'Пешпен жылыту және теміржол торабы',
          lat: 49.9920,
          lng: 82.5780,
          altM: 286,
          localFactor: 1.14,
          coalWeight: 1.26,
          trafficWeight: 0.85,
          radiusM: 3500,
          aboveInversion: false
        },
        {
          id: 'osk-ksht',
          nameRu: 'КШТ / Левобережье',
          nameKz: 'ЖМК / Сол жағалау',
          zoneRu: 'Возвышенный продуваемый жилой район',
          zoneKz: 'Биікте орналасқан желдетілетін тұрғын аудан',
          lat: 49.9145,
          lng: 82.5890,
          altM: 340,
          localFactor: 0.42,
          coalWeight: 0.45,
          trafficWeight: 0.7,
          radiusM: 3100,
          aboveInversion: false
        }
      ],
      districts: [
        { id: 'd-sogra', nameRu: 'Согра', nameKz: 'Согра', lat: 49.9720, lng: 82.7050, factor: 1.12 },
        { id: 'd-pristan', nameRu: 'Пристань', nameKz: 'Пристань', lat: 49.9410, lng: 82.5830, factor: 0.96 },
        { id: 'd-mirny', nameRu: 'Мирный', nameKz: 'Мирный', lat: 49.9690, lng: 82.5690, factor: 1.08 },
        { id: 'd-ecoleft', nameRu: 'Этнопарк / Левый берег', nameKz: 'Этносаябақ', lat: 49.9280, lng: 82.6010, factor: 0.52 }
      ]
    },

    karaganda: {
      id: 'karaganda',
      nameRu: 'Қарағанды',
      nameKz: 'Қарағанды',
      terrainRu: 'Угольный бассейн, котловинный застой частного сектора',
      terrainKz: 'Көмір бассейні, жеке сектордың ойпаттағы түтіні',
      center: [49.8047, 73.1094],
      zoom: 11,
      baseTemp: -14,
      baseWind: 1.8,
      windDeg: 215,
      baseInversionM: 205,
      basinTrap: 1.16,
      dailyEmissionsTonnes: 41.0,
      coalShare: 0.64,
      trafficShare: 0.24,
      stations: [
        {
          id: 'kar-maikuduk',
          nameRu: 'Майкудук (частный сектор)',
          nameKz: 'Майқұдық (жеке сектор)',
          zoneRu: 'Интенсивная вечерняя растопка бытовых угольных печей',
          zoneKz: 'Тұрмыстық көмір пештерін кешкі қарқынды жағу',
          lat: 49.8740,
          lng: 73.1920,
          altM: 530,
          localFactor: 1.35,
          coalWeight: 1.35,
          trafficWeight: 0.85,
          radiusM: 4700,
          aboveInversion: false
        },
        {
          id: 'kar-prishakhtinsk',
          nameRu: 'Пришахтинск',
          nameKz: 'Пришахтинск',
          zoneRu: 'Северная низина, печной дым при слабом ветре',
          zoneKz: 'Солтүстік ойпат, әлсіз желдегі пеш түтіні',
          lat: 49.8980,
          lng: 73.0650,
          altM: 525,
          localFactor: 1.16,
          coalWeight: 1.28,
          trafficWeight: 0.75,
          radiusM: 4300,
          aboveInversion: false
        },
        {
          id: 'kar-center',
          nameRu: 'Новый Город / Бухар-Жырау',
          nameKz: 'Жаңа Қала / Бұқар Жырау',
          zoneRu: 'Центральный городской коридор и автотрафик',
          zoneKz: 'Орталық қалалық дәліз және автотрафик',
          lat: 49.8030,
          lng: 73.0950,
          altM: 552,
          localFactor: 0.84,
          coalWeight: 0.85,
          trafficWeight: 1.22,
          radiusM: 3900,
          aboveInversion: false
        },
        {
          id: 'kar-southeast',
          nameRu: 'Юго-Восток / Этнопарк',
          nameKz: 'Оңтүстік-Шығыс / Этносаябақ',
          zoneRu: 'Открытая степная роза ветров, быстрое рассеивание',
          zoneKz: 'Ашық дала желі, жылдам сейілу аймағы',
          lat: 49.7760,
          lng: 73.1490,
          altM: 568,
          localFactor: 0.48,
          coalWeight: 0.55,
          trafficWeight: 0.9,
          radiusM: 3600,
          aboveInversion: false
        }
      ],
      districts: [
        { id: 'd-mikhailovka', nameRu: 'Михайловка', nameKz: 'Михайловка', lat: 49.8065, lng: 73.0580, factor: 1.14 },
        { id: 'd-gulder', nameRu: 'Гульдер-1', nameKz: 'Гүлдер-1', lat: 49.7820, lng: 73.1330, factor: 0.62 },
        { id: 'd-fedorovka', nameRu: 'Фёдоровка', nameKz: 'Фёдоровка', lat: 49.7785, lng: 73.0810, factor: 1.05 },
        { id: 'd-sortirovka', nameRu: 'Сортировка', nameKz: 'Сұрыптау', lat: 49.9210, lng: 73.1890, factor: 1.18 }
      ]
    },

    temirtau: {
      id: 'temirtau',
      nameRu: 'Теміртау',
      nameKz: 'Теміртау',
      terrainRu: 'Индустриально-печной узел у Самаркандского водохранилища',
      terrainKz: 'Самарқанд су қоймасы маңындағы индустриялық-пеш торабы',
      center: [50.0549, 72.9646],
      zoom: 12,
      baseTemp: -15,
      baseWind: 1.5,
      windDeg: 260,
      baseInversionM: 195,
      basinTrap: 1.22,
      dailyEmissionsTonnes: 48.6,
      coalShare: 0.54,
      trafficShare: 0.22,
      stations: [
        {
          id: 'tem-qarmet',
          nameRu: 'Восточная промзона',
          nameKz: 'Шығыс өнеркәсіп аймағы',
          zoneRu: 'Аглопроизводство, коксохим и энергетический узел',
          zoneKz: 'Аглоөндіріс, кокс-химия және энергетикалық торап',
          lat: 50.0685,
          lng: 73.0280,
          altM: 505,
          localFactor: 1.36,
          coalWeight: 1.18,
          trafficWeight: 0.9,
          radiusM: 3900,
          aboveInversion: false
        },
        {
          id: 'tem-oldtown',
          nameRu: 'Старый город (печной сектор)',
          nameKz: 'Ескі қала (пеш секторы)',
          zoneRu: 'Низкие печные трубы и зимний ночной застой сажи',
          zoneKz: 'Төмен пеш мұржалары және қысқы түнгі күйе',
          lat: 50.0640,
          lng: 72.9460,
          altM: 502,
          localFactor: 1.18,
          coalWeight: 1.34,
          trafficWeight: 0.8,
          radiusM: 3500,
          aboveInversion: false
        },
        {
          id: 'tem-republic',
          nameRu: 'Пр. Республики / Центр',
          nameKz: 'Республика даңғылы / Орталық',
          zoneRu: 'Жилая многоэтажная застройка и городской транзит',
          zoneKz: 'Көпқабатты тұрғын үйлер және қалалық транзит',
          lat: 50.0535,
          lng: 72.9710,
          altM: 512,
          localFactor: 0.88,
          coalWeight: 0.9,
          trafficWeight: 1.15,
          radiusM: 3300,
          aboveInversion: false
        },
        {
          id: 'tem-samarkand',
          nameRu: 'Набережная вдхр.',
          nameKz: 'Су қоймасы жағалауы',
          zoneRu: 'Западный береговой сектор с открытым обдувом',
          zoneKz: 'Ашық жел соғатын батыс жағалау секторы',
          lat: 50.0725,
          lng: 72.9050,
          altM: 508,
          localFactor: 0.46,
          coalWeight: 0.5,
          trafficWeight: 0.65,
          radiusM: 3100,
          aboveInversion: false
        }
      ],
      districts: [
        { id: 'd-tem6', nameRu: '6-й микрорайон', nameKz: '6-шағынаудан', lat: 50.0485, lng: 72.9560, factor: 0.78 },
        { id: 'd-tem8', nameRu: '8-й микрорайон', nameKz: '8-шағынаудан', lat: 50.0430, lng: 72.9820, factor: 0.84 },
        { id: 'd-sotsgorod', nameRu: 'Соцгород', nameKz: 'Соцгород', lat: 50.0595, lng: 72.9920, factor: 1.12 },
        { id: 'd-righttem', nameRu: 'Правый берег', nameKz: 'Оң жағалау', lat: 50.0815, lng: 72.9610, factor: 0.94 }
      ]
    },

    shymkent: {
      id: 'shymkent',
      nameRu: 'Шымкент',
      nameKz: 'Шымкент',
      terrainRu: 'Южная предгорная равнина, вечерние радиационные инверсии',
      terrainKz: 'Оңтүстік тау бөктері жазығы, кешкі радиациялық инверсия',
      center: [42.3417, 69.5901],
      zoom: 12,
      baseTemp: 1,
      baseWind: 2.3,
      windDeg: 195,
      baseInversionM: 290,
      basinTrap: 0.94,
      dailyEmissionsTonnes: 27.4,
      coalShare: 0.36,
      trafficShare: 0.44,
      stations: [
        {
          id: 'shy-southprom',
          nameRu: 'Южная промзона / НПЗ',
          nameKz: 'Оңтүстік өнеркәсіп / МӨЗ',
          zoneRu: 'Промышленный кластер и грузовой обход',
          zoneKz: 'Өнеркәсіптік кластер және жүк көлігі айналма жолы',
          lat: 42.2925,
          lng: 69.6320,
          altM: 485,
          localFactor: 1.24,
          coalWeight: 0.85,
          trafficWeight: 1.28,
          radiusM: 3800,
          aboveInversion: false
        },
        {
          id: 'shy-ordabasy',
          nameRu: 'Старый город / Ордабасы',
          nameKz: 'Ескі қала / Ордабасы',
          zoneRu: 'Низина Кошкараты, плотный вечерний трафик',
          zoneKz: 'Қошқарата ойпаты, тығыз кешкі трафик',
          lat: 42.3135,
          lng: 69.5960,
          altM: 498,
          localFactor: 1.02,
          coalWeight: 1.05,
          trafficWeight: 1.24,
          radiusM: 3400,
          aboveInversion: false
        },
        {
          id: 'shy-kunayev',
          nameRu: 'Кунаева / Аль-Фараби',
          nameKz: 'Қонаев / Әл-Фараби',
          zoneRu: 'Центральный деловой проспект',
          zoneKz: 'Орталық іскерлік даңғыл',
          lat: 42.3320,
          lng: 69.5935,
          altM: 525,
          localFactor: 0.76,
          coalWeight: 0.65,
          trafficWeight: 1.12,
          radiusM: 3200,
          aboveInversion: false
        },
        {
          id: 'shy-north',
          nameRu: 'Шымкент Сити / Байдибек би',
          nameKz: 'Шымкент Сити / Бәйдібек би',
          zoneRu: 'Высокая продуваемая северная терраса города',
          zoneKz: 'Қаланың биік желдетілетін солтүстік террасасы',
          lat: 42.3880,
          lng: 69.6080,
          altM: 580,
          localFactor: 0.36,
          coalWeight: 0.35,
          trafficWeight: 0.72,
          radiusM: 3100,
          aboveInversion: false
        }
      ],
      districts: [
        { id: 'd-nursat', nameRu: 'Нурсат', nameKz: 'Нұрсат', lat: 42.3625, lng: 69.6150, factor: 0.54 },
        { id: 'd-kaitpas', nameRu: 'Кайтпас-1', nameKz: 'Қайтпас-1', lat: 42.3690, lng: 69.5680, factor: 0.68 },
        { id: 'd-sever', nameRu: 'мкр. Север', nameKz: 'Солтүстік ш/а', lat: 42.3450, lng: 69.5780, factor: 0.74 },
        { id: 'd-turan', nameRu: 'Туран', nameKz: 'Тұран', lat: 42.3950, lng: 69.5920, factor: 0.42 }
      ]
    }
  };

  const BASE_HOUR = 20;

  const state = {
    lang: 'ru',
    cityId: 'almaty',
    step: 0,
    playing: false,
    playTimer: null,
    tab: 'summary',
    role: 'parents',
    collapsed: false,
    showDome: true,
    showWind: true,
    showSat: false,
    compareA: 'alm-shanyrak',
    compareB: 'alm-medeu',
    pickMode: false,
    pickNextSlot: 'a',
    activeDistrictId: null,
    tourOpen: false,
    tourIdx: 0,
    sim: {
      wind: 1.1,
      stove: 0,
      traffic: 0
    },
    tg: {
      subscribed: false,
      cityId: 'almaty',
      postId: 'alm-shanyrak',
      handle: '@almaty_resident',
      morning: true,
      evening: true,
      window: true
    }
  };

  let map = null;
  let navyLayer = null;
  let satLayer = null;
  let compareLine = null;
  let districtMarker = null;
  let stationNodes = [];
  let smogCanvas = null;
  let smogCtx = null;
  let windFlow = [];
  let mainChart = null;
  let compareChart = null;
  let miniChart = null;
  let toastTimer = null;
  const mobUI = {
    handle: null,
    dot: null,
    title: null,
    sub: null,
    searchBtn: null,
    searchLbl: null,
    meteoBtn: null,
    meteoLbl: null,
    meteoBar: null,
    layersBar: null
  };

  function pmToAqi(pm) {
    const c = Math.max(0, pm);
    if (c <= 12.0) return Math.round((50 / 12.0) * c);
    if (c <= 35.4) return Math.round(((100 - 51) / (35.4 - 12.1)) * (c - 12.1) + 51);
    if (c <= 55.4) return Math.round(((150 - 101) / (55.4 - 35.5)) * (c - 35.5) + 101);
    if (c <= 150.4) return Math.round(((200 - 151) / (150.4 - 55.5)) * (c - 55.5) + 151);
    if (c <= 250.4) return Math.round(((300 - 201) / (250.4 - 150.5)) * (c - 150.5) + 201);
    return Math.min(500, Math.round(((500 - 301) / (500.4 - 250.5)) * (c - 250.5) + 301));
  }

  // Стандартная четырёхуровневая шкала статусов воздуха (#10b981, #f59e0b, #e11d48, #881337)
  function getStatusMeta(aqi, lang) {
    const kz = lang === 'kz';
    if (aqi <= 50) {
      return {
        hex: '#10b981',
        rgb: [16, 185, 129],
        lvlClass: 'v-lvl-good',
        badgeCss: 'background:rgba(16,185,129,0.16);color:#6ee7b7;border:1px solid rgba(16,185,129,0.38);',
        title: kz ? 'Таза ауа' : 'Чистый воздух',
        desc: kz
          ? 'Ауа таза, желдету мен серуендеуге еш шектеу жоқ.'
          : 'Воздух чистый. Безопасно для сквозного проветривания и прогулок.'
      };
    }
    if (aqi <= 120) {
      return {
        hex: '#f59e0b',
        rgb: [245, 158, 11],
        lvlClass: 'v-lvl-warn',
        badgeCss: 'background:rgba(245,158,11,0.16);color:#fcd34d;border:1px solid rgba(245,158,11,0.38);',
        title: kz ? 'Қалыпты деңгей' : 'Умеренный фон',
        desc: kz
          ? 'Күндізгі араласу жеткілікті. Пәтер мен сыныптарды желдетуге қолайлы.'
          : 'Допустимый городской фон. Подходит для планового дневного проветривания.'
      };
    }
    if (aqi <= 200) {
      return {
        hex: '#e11d48',
        rgb: [225, 29, 72],
        lvlClass: 'v-lvl-bad',
        badgeCss: 'background:rgba(225,29,72,0.18);color:#fda4af;border:1px solid rgba(225,29,72,0.42);',
        title: kz ? 'Зиянды ауа' : 'Высокое загрязнение',
        desc: kz
          ? 'Түтін жер бетінде жиналуда. Терезені жауып, ауа тазартқышты қосыңыз.'
          : 'Смог скапливается у земли. Закройте окна и ограничьте длительные прогулки.'
      };
    }
    return {
      hex: '#881337',
      rgb: [136, 19, 55],
      lvlClass: 'v-lvl-severe',
      badgeCss: 'background:rgba(136,19,55,0.72);color:#fecdd3;border:1px solid rgba(251,113,133,0.45);',
      title: kz ? 'Қауіпті түтін (инверсия)' : 'Опасный смог (инверсия)',
      desc: kz
        ? 'Төменгі инверсия күйені жерге қамап тұр. Терезені ашпаңыз, күндізгі терезені күтіңіз.'
        : 'Низкая крышка инверсии заперла сажу печей и выхлопы. Держите окна закрытыми.'
    };
  }

  function bellCurve(hour, center, sigma) {
    let d = Math.abs(hour - center);
    if (d > 12) d = 24 - d;
    return Math.exp(-(d * d) / (2 * sigma * sigma));
  }

  function evalTreeEnsemble(temp, wind, invH, hour, coalPct, trafPct, trap) {
    const mdl = window.VORTEX_ML_ENGINE;
    if (!mdl || !Array.isArray(mdl.trees)) return null;

    // Расчёт физических признаков CAMS и метеоархива для клиентского инференса VortexPredict
    const stoveWave = 0.55 + 0.45 * bellCurve(hour, 8.5, 1.8) + 0.95 * bellCurve(hour, 21.0, 2.3);
    const rushWave = 0.60 + 0.55 * bellCurve(hour, 8.5, 1.6) + 0.65 * bellCurve(hour, 18.5, 2.0);
    const coldBoost = Math.max(0.65, Math.min(1.55, (12 - temp) / 14));
    const invBoost = Math.max(0.65, Math.min(1.65, 290 / Math.max(130, invH)));
    const coalFactor = Math.max(0.32, 1 - 0.58 * (coalPct / 100));
    const trafFactor = Math.max(0.38, 1 - 0.52 * (trafPct / 100));

    const surfacePressure = Math.round((926 + Math.max(0, 280 - invH) * 0.045 - wind * 1.4) * 10) / 10;
    const coNow = Math.round(920 * stoveWave * coldBoost * invBoost * coalFactor);
    const no2Now = +(28 * rushWave * invBoost * trafFactor).toFixed(1);
    const coMean24 = Math.round(980 * coldBoost * coalFactor);
    const no2Mean24 = +(31 * trafFactor).toFixed(1);

    const featureObj = {
      temperature_2m: temp,
      wind_speed_ms: wind,
      surface_pressure: surfacePressure,
      carbon_monoxide: coNow,
      nitrogen_dioxide: no2Now,
      hour_of_day: hour,
      day_of_year: 18,
      is_weekend: 0,
      inversion_height_m: invH,
      temp_24h_mean: +(temp - 0.8).toFixed(1),
      pressure_24h_mean: surfacePressure,
      co_6h_mean: Math.round(0.65 * coNow + 0.35 * coMean24),
      no2_6h_mean: +(0.65 * no2Now + 0.35 * no2Mean24).toFixed(1),
      co_24h_mean: coMean24,
      no2_24h_mean: no2Mean24
    };

    let camsBg;
    if (typeof window.predictPM25WithVortexGBM === 'function') {
      camsBg = window.predictPM25WithVortexGBM(featureObj);
    } else {
      const feats = mdl.features.map(f => Number(featureObj[f] ?? 0));
      const lr = mdl.learning_rate || 0.1;
      let out = mdl.base_score || 33.03;
      for (let i = 0; i < mdl.trees.length; i++) {
        const tree = mdl.trees[i];
        let n = 0;
        while (n >= 0 && n < tree.length && tree[n][0] !== -1) {
          n = feats[tree[n][2]] <= tree[n][3] ? tree[n][0] : tree[n][1];
        }
        out += lr * tree[n][4];
      }
      camsBg = Math.max(3.0, out);
    }
    return camsBg !== null ? Math.max(4.0, camsBg * 1.55 * trap) : null;
  }

  function stepToClock(step) {
    const hour = (BASE_HOUR + step) % 24;
    const day = Math.floor((BASE_HOUR + step) / 24);
    return { hour, day };
  }

  function formatStepLabel(step, lang) {
    const { hour, day } = stepToClock(step);
    const hh = `${String(hour).padStart(2, '0')}:00`;
    const names = lang === 'kz' ? ['Бүгін', 'Ертең', 'Бүрсігүні'] : ['Сегодня', 'Завтра', 'Послезавтра'];
    return `${names[Math.min(2, day)]}, ${hh}`;
  }

  function computeMeteo(city, step, windVal) {
    const { hour } = stepToClock(step);
    const solarLift = bellCurve(hour, 14.5, 2.35);
    const nightCool = 0.65 * bellCurve(hour, 22.0, 3.1) + 0.55 * bellCurve(hour, 3.0, 2.8);

    const wBase = typeof windVal === 'number' ? windVal : city.baseWind;
    const breeze = 0.88 + 0.36 * solarLift - 0.14 * bellCurve(hour, 21.5, 2.5);
    const windMs = Math.max(0.4, +(wBase * breeze).toFixed(1));

    const mechLift = Math.max(0, windMs - city.baseWind) * 62;
    const invM = Math.round(
      Math.max(135, Math.min(1050, city.baseInversionM + solarLift * 455 - nightCool * 38 + mechLift))
    );
    const tempC = Math.round(city.baseTemp + solarLift * 5.5 - nightCool * 2.2);

    return { hour, windMs, invM, tempC };
  }

  // Эффективная высота перемешивания над конкретным постом с учётом рельефа
  function calcPostMixingHeight(city, post, step, windVal) {
    const met = computeMeteo(city, step, windVal);
    if (post.aboveInversion) {
      return Math.min(1200, met.invM + 640);
    }
    const baseAlt = city.stations[0] ? city.stations[0].altM : 500;
    const relGain = Math.max(0, (post.altM || baseAlt) - baseAlt) * 0.45;
    return Math.round(Math.min(1100, met.invM + relGain));
  }

  function calcPM25(city, step, simOpts, post) {
    const met = computeMeteo(city, step, simOpts.wind);
    const { hour, windMs, invM } = met;

    if (post && post.aboveInversion) {
      const bg = 8.4 + 2.2 * bellCurve(hour, 19.0, 3.0) - Math.min(2.5, windMs * 0.35);
      return Math.max(4.5, +(bg * (1 - 0.12 * (simOpts.traffic / 100))).toFixed(1));
    }

    const morning = 0.52 * bellCurve(hour, 8.5, 1.35);
    const noonDip = -0.26 * bellCurve(hour, 14.5, 2.1);
    const eveningStove = 0.92 * bellCurve(hour, 21.0, 2.15);
    const nightSmolder = 0.28 * bellCurve(hour, 1.5, 2.6);
    const emis = Math.max(0.42, 0.78 + morning + noonDip + eveningStove + nightSmolder);

    // При инверсии ниже 250 м концентрация возрастает в 2.5–3.5 раза
    let invMul;
    if (invM < 250) {
      invMul = 2.52 + Math.min(0.96, ((250 - invM) / 115) * 0.92);
    } else {
      invMul = Math.max(0.62, 2.52 * Math.pow(250 / invM, 1.18));
    }

    // При усилении ветра свыше 4.5 м/с купол продувается пропорционально потоку
    let windMul;
    if (windMs <= 4.5) {
      windMul = Math.pow(1.45 / Math.max(0.55, windMs), 0.52);
    } else {
      windMul = Math.pow(1.45 / 4.5, 0.52) * (4.5 / windMs) * Math.exp(-0.14 * (windMs - 4.5));
    }

    const cW = post ? post.coalWeight : 1.0;
    const tW = post ? post.trafficWeight : 1.0;
    const coalCut = Math.min(0.48, city.coalShare * 0.38 * (simOpts.stove / 100) * (0.65 + 0.35 * cW) * 1.65);
    const trafCut = Math.min(0.36, city.trafficShare * 0.34 * (simOpts.traffic / 100) * (0.65 + 0.35 * tW) * 1.45);
    const abate = Math.max(0.28, 1 - coalCut - trafCut);

    let pm = 24.5 * city.basinTrap * emis * invMul * windMul * abate;
    const treePred = evalTreeEnsemble(met.tempC, windMs, invM, hour, simOpts.stove, simOpts.traffic, city.basinTrap);
    if (treePred !== null) {
      pm = 0.78 * pm + 0.22 * treePred * abate * (windMs > 4.5 ? 4.5 / windMs : 1);
    }

    const factor = post ? post.localFactor : 1.0;
    return Math.max(5.0, +(pm * factor).toFixed(1));
  }

  function buildCitySnap(city, step, simOpts) {
    const met = computeMeteo(city, step, simOpts.wind);
    const posts = city.stations.map(st => {
      const pm25 = calcPM25(city, step, simOpts, st);
      const pm10 = Math.round(pm25 * 1.46 + 9);
      const aqi = pmToAqi(pm25);
      const mixH = calcPostMixingHeight(city, st, step, simOpts.wind);
      return { st, pm25, pm10, aqi, mixH, meta: getStatusMeta(aqi, state.lang) };
    });

    let sum = 0;
    let wSum = 0;
    posts.forEach(p => {
      const w = p.st.aboveInversion ? 0.35 : 1.0;
      sum += p.pm25 * w;
      wSum += w;
    });

    const meanPM25 = +(sum / wSum).toFixed(1);
    const meanPM10 = Math.round(meanPM25 * 1.46 + 10);
    const cityAQI = pmToAqi(meanPM25);
    return { met, meanPM25, meanPM10, cityAQI, meta: getStatusMeta(cityAQI, state.lang), posts };
  }

  function findCleanWindow(city, fromStep, simOpts) {
    let bestStep = fromStep;
    let bestPM = Infinity;

    for (let d = 0; d <= 24; d++) {
      const s = Math.min(48, fromStep + d);
      const { hour } = stepToClock(s);
      if (hour >= 12 && hour <= 17) {
        const snap = buildCitySnap(city, s, simOpts);
        if (snap.meanPM25 < bestPM) {
          bestPM = snap.meanPM25;
          bestStep = s;
        }
      }
    }

    const winSnap = buildCitySnap(city, bestStep, simOpts);
    const cH = stepToClock(bestStep).hour;
    const sH = Math.max(12, cH - 1);
    const eH = Math.min(17, sH + 2);
    const rangeStr = `${String(sH).padStart(2, '0')}:30 – ${String(eH).padStart(2, '0')}:30`;

    const nowH = stepToClock(fromStep).hour;
    const openNow = nowH >= sH && nowH <= eH;
    const waitHours = Math.max(0, bestStep - fromStep);
    const remMins = openNow ? Math.max(30, (eH - nowH) * 60 + 30) : 0;

    return {
      bestStep,
      rangeStr,
      aqi: winSnap.cityAQI,
      invM: winSnap.met.invM,
      openNow,
      waitHours,
      remH: Math.floor(remMins / 60),
      remM: remMins % 60
    };
  }

  function calcSimEffect(city, step) {
    const baseOpts = { wind: city.baseWind, stove: 0, traffic: 0 };
    const base = buildCitySnap(city, step, baseOpts);
    const cur = buildCitySnap(city, step, state.sim);
    const pct = base.meanPM25 > 0 ? Math.round(((base.meanPM25 - cur.meanPM25) / base.meanPM25) * 100) : 0;

    const savedCoal = city.coalShare * 0.38 * (state.sim.stove / 100);
    const savedTraf = city.trafficShare * 0.34 * (state.sim.traffic / 100);
    const tonnes = +(city.dailyEmissionsTonnes * (savedCoal + savedTraf)).toFixed(1);
    const active = Math.abs(state.sim.wind - city.baseWind) >= 0.15 || state.sim.stove > 0 || state.sim.traffic > 0;

    return { base, cur, pct, tonnes, active };
  }

  // Сдвиг центра камеры с учётом правой панели или нижней мобильной шторки
  function shiftedLatLng(latlng, zoom) {
    if (!map) return latlng;
    if (window.innerWidth <= 768) {
      const pt = map.project(latlng, zoom);
      return map.unproject(L.point(pt.x, pt.y + 18), zoom);
    }
    if (window.innerWidth <= 920 || state.collapsed) return latlng;
    const pt = map.project(latlng, zoom);
    return map.unproject(L.point(pt.x + 165, pt.y + 8), zoom);
  }

  function initMap() {
    const city = CITIES[state.cityId];

    if (typeof L !== 'undefined') {
      map = L.map('map', {
        center: city.center,
        zoom: city.zoom,
        minZoom: 5,
        maxZoom: 17,
        zoomControl: false,
        attributionControl: true
      });

      L.control.zoom({ position: 'bottomleft' }).addTo(map);
      const bl = document.querySelector('.leaflet-bottom.leaflet-left');
      if (bl) {
        bl.style.bottom = '112px';
        bl.style.left = '4px';
      }

      const darkTiles = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
          maxNativeZoom: 16,
          maxZoom: 18,
          className: 'v-tiles-navy',
          attribution: '&copy; OpenStreetMap &copy; Esri GIS &bull; VORTEX KZ'
        }
      );
      const refTiles = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        {
          maxNativeZoom: 16,
          maxZoom: 18,
          className: 'v-tiles-labels'
        }
      );
      navyLayer = L.layerGroup([darkTiles, refTiles]).addTo(map);

      const satImg = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxNativeZoom: 17,
          maxZoom: 18,
          attribution: '&copy; Esri Imagery &bull; VORTEX KZ'
        }
      );
      const satLbl = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        { maxNativeZoom: 16, maxZoom: 18 }
      );
      satLayer = L.layerGroup([satImg, satLbl]);

      map.setView(shiftedLatLng(city.center, city.zoom), city.zoom, { animate: false });
    }

    smogCanvas = document.getElementById('smog-canvas');
    if (smogCanvas) {
      smogCtx = smogCanvas.getContext('2d');
      resizeCanvas();
      seedWindFlow();
      window.addEventListener('resize', resizeCanvas);
    }

    mountCityPins(city);
    requestAnimationFrame(drawAtmosphereLoop);
  }

  function resizeCanvas() {
    if (!smogCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;
    smogCanvas.width = Math.max(1, Math.floor(w * dpr));
    smogCanvas.height = Math.max(1, Math.floor(h * dpr));
    if (smogCtx && smogCtx.setTransform) {
      smogCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function seedWindFlow() {
    windFlow = [];
    const w = window.innerWidth || 1440;
    const h = window.innerHeight || 900;
    for (let i = 0; i < 105; i++) {
      windFlow.push({
        x: Math.random() * w,
        y: Math.random() * h,
        age: Math.floor(Math.random() * 85),
        maxAge: 70 + Math.floor(Math.random() * 55),
        mul: 0.72 + Math.random() * 0.56
      });
    }
  }

  function buildPinPopup(p, city) {
    const kz = state.lang === 'kz';
    const name = kz ? p.st.nameKz : p.st.nameRu;
    const zone = kz ? p.st.zoneKz : p.st.zoneRu;
    const cmpBtnTxt = kz ? 'Салыстыруға қосу ⇄' : 'Сравнить этот пост ⇄';

    return `
      <div style="min-width:236px;">
        <div class="flex items-start justify-between gap-2 pr-4 mb-1">
          <div>
            <div class="text-xs font-bold text-white leading-snug">${name}</div>
            <div class="text-[10.5px] text-slate-400 leading-tight mt-0.5">${zone}</div>
          </div>
          <span class="v-mono text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0" style="${p.meta.badgeCss}">
            AQI ${p.aqi}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-1.5 my-2 text-center">
          <div class="rounded-lg bg-slate-900/90 border border-slate-800 p-1.5">
            <div class="text-[9.5px] text-slate-400">PM2.5</div>
            <div class="v-mono text-xs font-bold text-white">${p.pm25.toFixed(1)}</div>
          </div>
          <div class="rounded-lg bg-slate-900/90 border border-slate-800 p-1.5">
            <div class="text-[9.5px] text-slate-400">PM10</div>
            <div class="v-mono text-xs font-bold text-slate-200">${p.pm10}</div>
          </div>
          <div class="rounded-lg bg-slate-900/90 border border-slate-800 p-1.5">
            <div class="text-[9.5px] text-slate-400">H_inv</div>
            <div class="v-mono text-xs font-bold text-cyan-300">${p.st.aboveInversion ? 'Над слоем' : p.mixH + ' м'}</div>
          </div>
        </div>
        <div class="text-[11px] text-slate-300 leading-snug mb-2">
          <strong style="color:${p.meta.hex};">${p.meta.title}:</strong> ${p.meta.desc}
        </div>
        <button onclick="window.__vortexPickCompare('${p.st.id}')" class="w-full py-1.5 px-2.5 rounded-lg text-[11px] font-bold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/35 transition cursor-pointer">
          ${cmpBtnTxt} (${kz ? city.nameKz : city.nameRu})
        </button>
      </div>
    `;
  }

  function mountCityPins(city) {
    stationNodes.forEach(n => {
      if (n.marker && map) map.removeLayer(n.marker);
    });
    stationNodes = [];

    if (districtMarker && map) {
      map.removeLayer(districtMarker);
      districtMarker = null;
    }

    city.stations.forEach(st => {
      let marker = null;
      if (map && typeof L !== 'undefined') {
        const icon = L.divIcon({
          className: 'v-leaflet-div',
          iconSize: [44, 44],
          iconAnchor: [22, 22],
          popupAnchor: [0, -20],
          html: `
            <div id="pin-${st.id}" class="v-pin v-lvl-warn">
              <span class="v-pin-halo"></span>
              <span class="v-pin-core">--</span>
            </div>
          `
        });

        marker = L.marker([st.lat, st.lng], { icon }).addTo(map);
        marker.bindPopup('', { maxWidth: 280, closeButton: true });
        marker.on('click', () => {
          if (state.pickMode) {
            handleMapComparePick(st.id);
          }
        });
      }

      stationNodes.push({
        st,
        marker,
        targetPM: 45,
        animPM: 45,
        targetRad: st.radiusM,
        animRad: st.radiusM
      });
    });
  }

  function updateCompareMapLine() {
    if (!map || typeof L === 'undefined') return;
    if (compareLine) {
      map.removeLayer(compareLine);
      compareLine = null;
    }
    if (state.tab !== 'compare') return;

    const city = CITIES[state.cityId];
    const postA = city.stations.find(s => s.id === state.compareA);
    const postB = city.stations.find(s => s.id === state.compareB);
    if (!postA || !postB || postA.id === postB.id) return;

    compareLine = L.polyline(
      [
        [postA.lat, postA.lng],
        [postB.lat, postB.lng]
      ],
      {
        color: '#06b6d4',
        weight: 2.5,
        dashArray: '7, 6',
        opacity: 0.85
      }
    ).addTo(map);
  }

  function drawAtmosphereLoop() {
    if (smogCtx && smogCanvas) {
      const w = window.innerWidth || 1440;
      const h = window.innerHeight || 900;
      smogCtx.clearRect(0, 0, w, h);

      const city = CITIES[state.cityId];
      const zoom = map && map.getZoom ? map.getZoom() : city.zoom;
      const mPerPx = (156543.03392 * Math.cos((city.center[0] * Math.PI) / 180)) / Math.pow(2, zoom);

      if (state.showDome) {
        const pulse = 1.0 + 0.02 * Math.sin(Date.now() * 0.002);
        const rad = ((city.windDeg - 90) * Math.PI) / 180;
        const shiftPx = Math.min(25, Math.max(0, (state.sim.wind - 1.0) * 4.8));

        stationNodes.forEach(node => {
          node.animPM += (node.targetPM - node.animPM) * 0.15;
          node.animRad += (node.targetRad - node.animRad) * 0.15;

          let px = w * 0.4;
          let py = h * 0.5;
          if (map && map.latLngToContainerPoint) {
            const pt = map.latLngToContainerPoint([node.st.lat, node.st.lng]);
            px = pt.x;
            py = pt.y;
          }

          const aqi = pmToAqi(node.animPM);
          const meta = getStatusMeta(aqi, state.lang);
          const [r, g, b] = meta.rgb;

          const rPx = Math.max(42, Math.min(340, (node.animRad / Math.max(1, mPerPx)) * pulse));
          const cx = px + Math.cos(rad) * shiftPx;
          const cy = py + Math.sin(rad) * shiftPx;

          const windDilute = state.sim.wind > 4.5 ? Math.max(0.38, 4.5 / state.sim.wind) : 1.0;
          const alpha = Math.min(0.56, (0.14 + (aqi / 310) * 0.42) * windDilute);

          const grad = smogCtx.createRadialGradient(cx, cy, rPx * 0.04, cx, cy, rPx);
          grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`);
          grad.addColorStop(0.38, `rgba(${r}, ${g}, ${b}, ${(alpha * 0.6).toFixed(3)})`);
          grad.addColorStop(0.72, `rgba(${r}, ${g}, ${b}, ${(alpha * 0.22).toFixed(3)})`);
          grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          smogCtx.fillStyle = grad;
          smogCtx.beginPath();
          smogCtx.arc(cx, cy, rPx, 0, Math.PI * 2);
          smogCtx.fill();
        });
      }

      if (state.showWind) {
        const rad = ((city.windDeg - 90) * Math.PI) / 180;
        const spd = 0.35 + state.sim.wind * 0.58;
        const vx = Math.cos(rad) * spd;
        const vy = Math.sin(rad) * spd;
        const tail = Math.min(26, 7 + state.sim.wind * 3.1);

        smogCtx.lineWidth = 1.2;
        smogCtx.lineCap = 'round';

        for (let i = 0; i < windFlow.length; i++) {
          const p = windFlow[i];
          const ox = p.x;
          const oy = p.y;
          p.x += vx * p.mul;
          p.y += vy * p.mul;
          p.age += 1;

          const a = Math.sin((p.age / p.maxAge) * Math.PI) * Math.min(0.3, 0.1 + state.sim.wind * 0.03);
          smogCtx.strokeStyle = `rgba(103, 232, 249, ${Math.max(0.03, a).toFixed(3)})`;
          smogCtx.beginPath();
          smogCtx.moveTo(ox - Math.cos(rad) * tail, oy - Math.sin(rad) * tail);
          smogCtx.lineTo(p.x, p.y);
          smogCtx.stroke();

          if (p.age >= p.maxAge || p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30) {
            p.x = Math.random() * w;
            p.y = Math.random() * h;
            p.age = 0;
          }
        }
      }
    }

    requestAnimationFrame(drawAtmosphereLoop);
  }

  const cursorLinePlugin = {
    id: 'vortexCursor',
    afterDatasetsDraw(chart) {
      const { ctx, chartArea, scales } = chart;
      if (!chartArea || !scales.x) return;
      const x = scales.x.getPixelForValue(state.step);
      if (x < chartArea.left || x > chartArea.right) return;

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([4, 3]);
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();

      ctx.fillStyle = '#06b6d4';
      ctx.beginPath();
      ctx.arc(x, chartArea.top + 4, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  };

  function initCharts() {
    if (typeof Chart === 'undefined') return;

    const fEl = document.getElementById('forecast-chart');
    if (fEl) {
      const ctx = fEl.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 190);
      grad.addColorStop(0, 'rgba(225, 29, 72, 0.28)');
      grad.addColorStop(0.55, 'rgba(245, 158, 11, 0.12)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0.02)');

      mainChart = new Chart(ctx, {
        type: 'line',
        plugins: [cursorLinePlugin],
        data: {
          labels: [],
          datasets: [
            {
              label: 'База PM2.5',
              data: [],
              borderColor: '#f59e0b',
              backgroundColor: grad,
              borderWidth: 2.2,
              fill: true,
              tension: 0.36,
              pointRadius: 0
            },
            {
              label: 'С эко-мерами',
              data: [],
              borderColor: '#06b6d4',
              borderDash: [6, 4],
              borderWidth: 2.1,
              fill: false,
              tension: 0.36,
              pointRadius: 0
            },
            {
              label: 'Норма ВОЗ',
              data: [],
              borderColor: 'rgba(148, 163, 184, 0.4)',
              borderDash: [3, 4],
              borderWidth: 1.1,
              fill: false,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 200 },
          interaction: { mode: 'index', intersect: false },
          onClick(_e, els) {
            if (els && els.length) setStep(els[0].index);
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 29, 0.95)',
              borderColor: 'rgba(6, 182, 212, 0.35)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(148, 163, 184, 0.06)' },
              ticks: { color: '#94a3b8', font: { size: 10 }, maxTicksLimit: 8 }
            },
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(148, 163, 184, 0.07)' },
              ticks: { color: '#94a3b8', font: { size: 10 } }
            }
          }
        }
      });
    }

    // Двухшкальный график сравнения 2 районов (PM2.5 + высота инверсии H_inv)
    const cEl = document.getElementById('compare-chart');
    if (cEl) {
      const cCtx = cEl.getContext('2d');
      compareChart = new Chart(cCtx, {
        type: 'line',
        plugins: [cursorLinePlugin],
        data: {
          labels: [],
          datasets: [
            {
              label: 'Пост А (PM2.5)',
              data: [],
              borderColor: '#e11d48',
              backgroundColor: 'rgba(225, 29, 72, 0.14)',
              borderWidth: 2.3,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              yAxisID: 'y'
            },
            {
              label: 'Пост Б (PM2.5)',
              data: [],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              borderWidth: 2.3,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              yAxisID: 'y'
            },
            {
              label: 'Высота инверсии H_inv (м)',
              data: [],
              borderColor: '#06b6d4',
              borderDash: [5, 4],
              borderWidth: 1.8,
              fill: false,
              tension: 0.35,
              pointRadius: 0,
              yAxisID: 'yInv'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 200 },
          interaction: { mode: 'index', intersect: false },
          onClick(_e, els) {
            if (els && els.length) setStep(els[0].index);
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 29, 0.95)',
              borderColor: 'rgba(6, 182, 212, 0.35)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(148, 163, 184, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 9.5 }, maxTicksLimit: 7 }
            },
            y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
              grid: { color: 'rgba(148, 163, 184, 0.07)' },
              ticks: { color: '#cbd5e1', font: { size: 9.5 }, maxTicksLimit: 5 }
            },
            yInv: {
              type: 'linear',
              position: 'right',
              min: 100,
              max: 900,
              grid: { drawOnChartArea: false },
              ticks: {
                color: '#67e8f9',
                font: { size: 9.5 },
                maxTicksLimit: 4,
                callback: v => v + 'м'
              }
            }
          }
        }
      });
    }

    const mEl = document.getElementById('mini-chart');
    if (mEl) {
      miniChart = new Chart(mEl.getContext('2d'), {
        type: 'line',
        plugins: [cursorLinePlugin],
        data: {
          labels: [],
          datasets: [
            {
              label: 'База',
              data: [],
              borderColor: '#e11d48',
              borderWidth: 1.7,
              tension: 0.35,
              pointRadius: 0
            },
            {
              label: 'С мерами',
              data: [],
              borderColor: '#06b6d4',
              backgroundColor: 'rgba(6, 182, 212, 0.14)',
              borderDash: [5, 3],
              borderWidth: 2.1,
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 180 },
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#64748b', font: { size: 9.5 }, maxTicksLimit: 6 }
            },
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(148, 163, 184, 0.05)' },
              ticks: { color: '#64748b', font: { size: 9.5 }, maxTicksLimit: 4 }
            }
          }
        }
      });
    }
  }

  function showToast(text) {
    const box = document.getElementById('v-toast');
    if (!box) return;
    box.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_10px_#06b6d4]"></span>
      <span>${text}</span>
    `;
    box.classList.remove('hidden');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      box.classList.add('hidden');
    }, 4200);
  }

  // Поиск микрорайона с зумом карты и локальной сводкой
  function getSearchItems(city) {
    const kz = state.lang === 'kz';
    const baseSnap = buildCitySnap(city, state.step, state.sim);
    const list = [];

    (city.districts || []).forEach(d => {
      const pm = Math.max(5, +(baseSnap.meanPM25 * d.factor).toFixed(1));
      const aqi = pmToAqi(pm);
      list.push({
        id: d.id,
        isPost: false,
        name: kz ? d.nameKz : d.nameRu,
        lat: d.lat,
        lng: d.lng,
        pm25: pm,
        aqi,
        meta: getStatusMeta(aqi, state.lang)
      });
    });

    baseSnap.posts.forEach(p => {
      list.push({
        id: p.st.id,
        isPost: true,
        name: kz ? p.st.nameKz : p.st.nameRu,
        lat: p.st.lat,
        lng: p.st.lng,
        pm25: p.pm25,
        aqi: p.aqi,
        meta: p.meta
      });
    });

    return list;
  }

  function renderDistrictChips(city) {
    const wrap = document.getElementById('district-chips');
    if (!wrap) return;
    const kz = state.lang === 'kz';

    wrap.innerHTML = (city.districts || [])
      .slice(0, 5)
      .map(d => {
        const active = state.activeDistrictId === d.id ? 'active' : '';
        return `<button class="v-chip ${active}" data-dist-id="${d.id}">${kz ? d.nameKz : d.nameRu}</button>`;
      })
      .join('');

    wrap.querySelectorAll('[data-dist-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        zoomToDistrict(btn.getAttribute('data-dist-id'));
      });
    });
  }

  function renderDistrictDropdown(query) {
    const dd = document.getElementById('district-dropdown');
    if (!dd) return;

    const city = CITIES[state.cityId];
    const q = (query || '').trim().toLowerCase();
    const items = getSearchItems(city).filter(it => !q || it.name.toLowerCase().includes(q));

    if (!items.length) {
      dd.innerHTML = `<div class="px-2.5 py-2 text-xs text-slate-400">${
        state.lang === 'kz' ? 'Ештеңе табылмады' : 'Район не найден'
      }</div>`;
      dd.classList.remove('hidden');
      return;
    }

    dd.innerHTML = items
      .map(
        it => `
        <button class="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-cyan-500/12 text-left transition" data-pick-loc="${it.id}">
          <span class="text-xs font-medium text-slate-100 truncate">${it.name}</span>
          <span class="v-mono text-[10.5px] font-bold px-2 py-0.5 rounded shrink-0" style="${it.meta.badgeCss}">
            AQI ${it.aqi}
          </span>
        </button>
      `
      )
      .join('');

    dd.classList.remove('hidden');

    dd.querySelectorAll('[data-pick-loc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-pick-loc');
        dd.classList.add('hidden');
        zoomToDistrict(id);
      });
    });
  }

  function zoomToDistrict(locId) {
    const city = CITIES[state.cityId];
    const items = getSearchItems(city);
    const found = items.find(x => x.id === locId);
    if (!found) return;

    state.activeDistrictId = found.id;
    const inp = document.getElementById('district-input');
    const clr = document.getElementById('btn-district-clear');
    if (inp) inp.value = found.name;
    if (clr) clr.classList.remove('hidden');

    renderDistrictChips(city);

    if (window.innerWidth <= 768) {
      const dw = document.getElementById('district-widget');
      if (dw) dw.classList.remove('mob-open');
      if (mobUI.searchBtn) mobUI.searchBtn.classList.remove('active');
      setSheetExpanded(false);
    }

    if (found.isPost) {
      const node = stationNodes.find(n => n.st.id === found.id);
      if (node && map) {
        map.flyTo(shiftedLatLng([found.lat, found.lng], 14), 14, { duration: 0.75 });
        if (node.marker) node.marker.openPopup();
      }
      return;
    }

    if (map && typeof L !== 'undefined') {
      if (districtMarker) map.removeLayer(districtMarker);
      const win = findCleanWindow(city, state.step, state.sim);
      const kz = state.lang === 'kz';

      const icon = L.divIcon({
        className: 'v-leaflet-div',
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -16],
        html: '<div class="v-district-target"></div>'
      });

      districtMarker = L.marker([found.lat, found.lng], { icon }).addTo(map);
      districtMarker
        .bindPopup(
          `
          <div style="min-width:220px;">
            <div class="flex items-center justify-between gap-2 pr-4 mb-1">
              <span class="text-xs font-bold text-white">${found.name}</span>
              <span class="v-mono text-[10.5px] font-bold px-2 py-0.5 rounded" style="${found.meta.badgeCss}">AQI ${found.aqi}</span>
            </div>
            <div class="text-[11px] text-slate-300 mt-1">
              PM2.5: <b class="v-mono text-white">${found.pm25}</b> мкг/м³ • ${found.meta.title}
            </div>
            <div class="text-[11px] text-cyan-300 mt-1">
              ${kz ? 'Желдету терезесі:' : 'Окно проветривания:'} <b>${win.rangeStr}</b>
            </div>
          </div>
        `
        )
        .openPopup();

      map.flyTo(shiftedLatLng([found.lat, found.lng], 14), 14, { duration: 0.75 });
    }
  }

  // Сравнение двух постов города (Пост А vs Пост Б)
  function syncCompareSelects(city) {
    const selA = document.getElementById('cmp-select-a');
    const selB = document.getElementById('cmp-select-b');
    if (!selA || !selB) return;

    const ids = city.stations.map(s => s.id);
    if (!ids.includes(state.compareA)) state.compareA = city.stations[0].id;
    if (!ids.includes(state.compareB) || state.compareB === state.compareA) {
      state.compareB = city.stations[city.stations.length - 1].id;
    }

    const kz = state.lang === 'kz';
    const optsHtml = city.stations
      .map(s => `<option value="${s.id}">${kz ? s.nameKz : s.nameRu}</option>`)
      .join('');

    selA.innerHTML = optsHtml;
    selB.innerHTML = optsHtml;
    selA.value = state.compareA;
    selB.value = state.compareB;
  }

  function handleMapComparePick(postId) {
    if (state.pickNextSlot === 'a') {
      state.compareA = postId;
      state.pickNextSlot = 'b';
      showToast(
        state.lang === 'kz'
          ? 'А бекеті таңдалды. Енді картадан Б бекетін басыңыз.'
          : 'Пост А выбран. Теперь кликните второй пост на карте.'
      );
    } else {
      if (postId !== state.compareA) state.compareB = postId;
      state.pickNextSlot = 'a';
      state.pickMode = false;
      const btn = document.getElementById('btn-pick-map');
      if (btn) btn.classList.remove('active');
      if (window.innerWidth <= 768) setSheetExpanded(true);
    }
    switchTab('compare');
    refreshUI();
  }

  window.__vortexPickCompare = function (postId) {
    if (postId !== state.compareA) {
      state.compareB = state.compareA;
      state.compareA = postId;
    }
    if (map) map.closePopup();
    if (window.innerWidth <= 768) setSheetExpanded(true);
    switchTab('compare');
    refreshUI();
  };

  function renderCompareSection(city, snap) {
    syncCompareSelects(city);

    const pA = snap.posts.find(p => p.st.id === state.compareA) || snap.posts[0];
    const pB = snap.posts.find(p => p.st.id === state.compareB) || snap.posts[snap.posts.length - 1];
    const kz = state.lang === 'kz';

    const hintEl = document.getElementById('cmp-pick-hint');
    if (hintEl) {
      hintEl.classList.toggle('hidden', !state.pickMode);
      hintEl.textContent = kz
        ? 'Картадағы кез келген 2 маркерді кезекпен басыңыз.'
        : 'Кликните по очереди на два любых маркера постов на карте.';
    }

    stationNodes.forEach(n => {
      const pinEl = document.getElementById(`pin-${n.st.id}`);
      if (pinEl) {
        const selected = state.tab === 'compare' && (n.st.id === pA.st.id || n.st.id === pB.st.id);
        pinEl.classList.toggle('v-pin-selected', selected);
      }
    });

    const cardsEl = document.getElementById('cmp-cards');
    if (cardsEl) {
      const nameA = kz ? pA.st.nameKz : pA.st.nameRu;
      const nameB = kz ? pB.st.nameKz : pB.st.nameRu;
      cardsEl.innerHTML = `
        <div class="v-card p-3 border-t-2" style="border-top-color:${pA.meta.hex};">
          <div class="text-[11px] font-bold text-white truncate">${nameA}</div>
          <div class="flex items-baseline justify-between mt-1.5">
            <span class="v-mono text-xl font-extrabold" style="color:${pA.meta.hex};">AQI ${pA.aqi}</span>
            <span class="v-mono text-[11px] text-slate-300">${pA.pm25} мкг</span>
          </div>
          <div class="text-[10.5px] text-slate-400 mt-1">
            ${kz ? 'Араласу шегі:' : 'Слой перемешивания:'} <b class="v-mono text-cyan-300">${pA.st.aboveInversion ? 'Над инверсией' : pA.mixH + ' м'}</b>
          </div>
        </div>
        <div class="v-card p-3 border-t-2" style="border-top-color:${pB.meta.hex};">
          <div class="text-[11px] font-bold text-white truncate">${nameB}</div>
          <div class="flex items-baseline justify-between mt-1.5">
            <span class="v-mono text-xl font-extrabold" style="color:${pB.meta.hex};">AQI ${pB.aqi}</span>
            <span class="v-mono text-[11px] text-slate-300">${pB.pm25} мкг</span>
          </div>
          <div class="text-[10.5px] text-slate-400 mt-1">
            ${kz ? 'Араласу шегі:' : 'Слой перемешивания:'} <b class="v-mono text-cyan-300">${pB.st.aboveInversion ? 'Над инверсией' : pB.mixH + ' м'}</b>
          </div>
        </div>
      `;
    }

    const bannerEl = document.getElementById('cmp-delta-banner');
    if (bannerEl) {
      const hi = pA.pm25 >= pB.pm25 ? pA : pB;
      const lo = pA.pm25 >= pB.pm25 ? pB : pA;
      const ratio = (hi.pm25 / Math.max(1, lo.pm25)).toFixed(1);
      const diff = +(hi.pm25 - lo.pm25).toFixed(1);
      const hiName = kz ? hi.st.nameKz : hi.st.nameRu;
      const loName = kz ? lo.st.nameKz : lo.st.nameRu;

      bannerEl.innerHTML = kz
        ? `<b>${hiName}</b> бекетінде PM2.5 концентрациясы <b>${loName}</b> ауданынан <b class="text-cyan-300">${ratio} есе жоғары</b> (+${diff} мкг/м³). Себебі — төменгі қазаншұңқырдағы инверсиялық жиналу.`
        : `На посту <b>${hiName}</b> уровень PM2.5 сейчас <b class="text-cyan-300">в ${ratio} раза выше</b> (+${diff} мкг/м³), чем в районе <b>${loName}</b>, из-за рельефа и запирания под крышкой инверсии.`;
    }

    const legA = document.getElementById('leg-cmp-a');
    const legB = document.getElementById('leg-cmp-b');
    if (legA) legA.textContent = kz ? pA.st.nameKz : pA.st.nameRu;
    if (legB) legB.textContent = kz ? pB.st.nameKz : pB.st.nameRu;

    if (compareChart) {
      const labels = [];
      const serA = [];
      const serB = [];
      const serInv = [];

      for (let s = 0; s <= 48; s++) {
        const { hour } = stepToClock(s);
        labels.push(`${String(hour).padStart(2, '0')}:00`);
        serA.push(calcPM25(city, s, state.sim, pA.st));
        serB.push(calcPM25(city, s, state.sim, pB.st));
        serInv.push(computeMeteo(city, s, state.sim.wind).invM);
      }

      compareChart.data.labels = labels;
      compareChart.data.datasets[0].label = kz ? pA.st.nameKz : pA.st.nameRu;
      compareChart.data.datasets[0].data = serA;
      compareChart.data.datasets[1].label = kz ? pB.st.nameKz : pB.st.nameRu;
      compareChart.data.datasets[1].data = serB;
      compareChart.data.datasets[2].data = serInv;
      compareChart.update('none');
    }

    updateCompareMapLine();
  }

  // Модальное окно Telegram Alert Bot
  function loadTelegramState() {
    try {
      const raw = localStorage.getItem('vortex_tg_sub');
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.assign(state.tg, parsed);
      }
    } catch (_e) {}

    const dot = document.getElementById('tg-active-dot');
    if (dot) dot.classList.toggle('hidden', !state.tg.subscribed);
  }

  function populateTgPosts(cityId) {
    const c = CITIES[cityId] || CITIES[state.cityId];
    const postSel = document.getElementById('tg-post-select');
    if (!postSel) return;

    const kz = state.lang === 'kz';
    postSel.innerHTML = c.stations
      .map(s => `<option value="${s.id}">${kz ? s.nameKz : s.nameRu}</option>`)
      .join('');

    if (c.stations.some(s => s.id === state.tg.postId)) {
      postSel.value = state.tg.postId;
    } else {
      state.tg.postId = c.stations[0].id;
      postSel.value = state.tg.postId;
    }
  }

  function openTelegramModal() {
    const modal = document.getElementById('tg-modal');
    if (!modal) return;

    state.tg.cityId = state.cityId;
    const citySel = document.getElementById('tg-city-select');
    const kz = state.lang === 'kz';

    if (citySel) {
      citySel.innerHTML = Object.values(CITIES)
        .map(c => `<option value="${c.id}">${kz ? c.nameKz : c.nameRu}</option>`)
        .join('');
      citySel.value = state.tg.cityId;
    }

    populateTgPosts(state.tg.cityId);

    const handleInp = document.getElementById('tg-username');
    const chkM = document.getElementById('tg-chk-morning');
    const chkE = document.getElementById('tg-chk-evening');
    const chkW = document.getElementById('tg-chk-window');

    if (handleInp) handleInp.value = state.tg.handle;
    if (chkM) chkM.checked = state.tg.morning;
    if (chkE) chkE.checked = state.tg.evening;
    if (chkW) chkW.checked = state.tg.window;

    updateTelegramPreview();
    modal.classList.remove('hidden');
  }

  function updateTelegramPreview() {
    const bubble = document.getElementById('tg-preview-bubble');
    const statusBox = document.getElementById('tg-status-box');
    if (!bubble) return;

    const city = CITIES[state.tg.cityId] || CITIES[state.cityId];
    const post = city.stations.find(s => s.id === state.tg.postId) || city.stations[0];
    const pmEve = calcPM25(city, 1, { wind: city.baseWind, stove: 0, traffic: 0 }, post);
    const aqiEve = pmToAqi(pmEve);
    const metEve = computeMeteo(city, 1, city.baseWind);
    const cleanWin = findCleanWindow(city, 0, { wind: city.baseWind, stove: 0, traffic: 0 });
    const kz = state.lang === 'kz';

    const slots = [];
    if (state.tg.morning) slots.push('07:00');
    if (state.tg.evening) slots.push('19:00');
    if (state.tg.window) slots.push(cleanWin.rangeStr.split(' ')[0]);

    const cName = kz ? city.nameKz : city.nameRu;
    const pName = kz ? post.nameKz : post.nameRu;

    bubble.innerHTML = kz
      ? `
        <div class="font-bold text-cyan-300 mb-1">⚡ VORTEX Alert • ${cName} (${pName})</div>
        <div>Бүгін 21:00-де инверсия <b>${metEve.invM} м</b> дейін төмендейді. Болжамды индекс: <b>AQI ${aqiEve}</b> (${pmEve} мкг/м³).</div>
        <div class="mt-1.5 text-emerald-300">✓ Келесі таза ауа терезесі: <b>${cleanWin.rangeStr}</b> (күтілетін AQI ${cleanWin.aqi}).</div>
        <div class="mt-1.5 text-[10.5px] text-slate-400">Кесте: ${slots.join(' • ') || 'таңдалмаған'} | ${state.tg.handle}</div>
      `
      : `
        <div class="font-bold text-cyan-300 mb-1">⚡ VORTEX Alert • ${cName} (${pName})</div>
        <div>В 21:00 ожидается просадка инверсии до <b>${metEve.invM} м</b> и пик топки печей: <b>AQI ${aqiEve}</b> (${pmEve} мкг/м³). Закройте окна.</div>
        <div class="mt-1.5 text-emerald-300">✓ Ближайшее окно проветривания: <b>${cleanWin.rangeStr}</b> (AQI ${cleanWin.aqi}).</div>
        <div class="mt-1.5 text-[10.5px] text-slate-400">Расписание пушей: ${slots.join(' • ') || 'не выбрано'} | ${state.tg.handle}</div>
      `;

    if (statusBox) {
      statusBox.innerHTML = state.tg.subscribed
        ? `<span class="text-emerald-400 font-semibold">● ${
            kz ? 'Жазылым белсенді:' : 'Подписка активна для'
          } ${state.tg.handle}</span>`
        : `<span>${
            kz
              ? 'Бот таңғы 07:00 және кешкі 19:00 ескертулерін автоматты жібереді.'
              : 'Бот присылает сводку перед выходом в школу (07:00) и до вечерней топки (19:00).'
          }</span>`;
    }
  }

  function saveTelegramSub() {
    state.tg.subscribed = true;
    try {
      localStorage.setItem('vortex_tg_sub', JSON.stringify(state.tg));
    } catch (_e) {}

    const dot = document.getElementById('tg-active-dot');
    if (dot) dot.classList.remove('hidden');

    updateTelegramPreview();
    const modal = document.getElementById('tg-modal');
    if (modal) modal.classList.add('hidden');

    showToast(
      state.lang === 'kz'
        ? `@VortexAirKZ_bot хабарламалары ${state.tg.handle} үшін қосылды`
        : `Уведомления @VortexAirKZ_bot подключены для ${state.tg.handle}`
    );
  }

  function sendTelegramTestAlert() {
    const city = CITIES[state.tg.cityId] || CITIES[state.cityId];
    const post = city.stations.find(s => s.id === state.tg.postId) || city.stations[0];
    const kz = state.lang === 'kz';
    const pName = kz ? post.nameKz : post.nameRu;
    showToast(
      kz
        ? `Тест пуш жіберілді (${state.tg.handle}): ${pName} — кешкі инверсия ескертуі`
        : `Тестовый алерт отправлен в ${state.tg.handle}: пост «${pName}»`
    );
  }

  // Отрисовка вкладок и синхронизация всего интерфейса
  function renderCityButtons() {
    const nav = document.getElementById('city-selector');
    if (!nav) return;
    const kz = state.lang === 'kz';

    nav.innerHTML = Object.values(CITIES)
      .map(c => {
        const opts =
          c.id === state.cityId
            ? state.sim
            : { wind: c.baseWind, stove: state.sim.stove, traffic: state.sim.traffic };
        const snap = buildCitySnap(c, state.step, opts);
        const cls = c.id === state.cityId ? 'active' : '';
        return `
          <button class="v-city-btn ${cls}" data-city="${c.id}">
            <span class="v-city-dot" style="background:${snap.meta.hex};box-shadow:0 0 8px ${snap.meta.hex};"></span>
            <span>${kz ? c.nameKz : c.nameRu}</span>
            <span class="v-mono text-[11px] opacity-80">${snap.cityAQI}</span>
          </button>
        `;
      })
      .join('');

    nav.querySelectorAll('[data-city]').forEach(btn => {
      btn.addEventListener('click', () => selectCity(btn.getAttribute('data-city')));
    });
  }

  function renderTimelineTicks() {
    const wrap = document.getElementById('timeline-ticks');
    if (!wrap) return;
    const kz = state.lang === 'kz';

    const ticks = [
      { s: 0, t: kz ? 'Бүгін 20:00' : 'Сегодня 20:00' },
      { s: 1, t: kz ? 'Пеш 21:00' : 'Топка 21:00' },
      { s: 6, t: kz ? 'Түн 02:00' : 'Ночь 02:00' },
      { s: 12, t: kz ? 'Таң 08:00' : 'Утро 08:00' },
      { s: 18, t: kz ? 'Таза терезе 14:00' : 'Чистое окно 14:00' },
      { s: 25, t: kz ? 'Ертең 21:00' : 'Завтра 21:00' },
      { s: 48, t: '+48ч' }
    ];

    wrap.innerHTML = ticks
      .map(tk => {
        const act = Math.abs(state.step - tk.s) <= 1 ? 'active' : '';
        return `<button class="v-tick-btn ${act}" data-step="${tk.s}">${tk.t}</button>`;
      })
      .join('');

    wrap.querySelectorAll('[data-step]').forEach(b => {
      b.addEventListener('click', () => setStep(Number(b.getAttribute('data-step'))));
    });
  }

  function renderGuideSection(city, snap, win) {
    const banner = document.getElementById('guide-banner');
    const cardsBox = document.getElementById('guide-cards');
    if (!banner || !cardsBox) return;

    const kz = state.lang === 'kz';
    const smoggy = snap.cityAQI > 120;

    banner.style.borderLeftColor = snap.meta.hex;
    banner.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold text-white">${snap.meta.title}</span>
        <span class="v-mono text-[11px] font-bold" style="color:${snap.meta.hex};">AQI ${snap.cityAQI}</span>
      </div>
      <div class="text-[11px] text-slate-300 mt-1">
        ${kz ? 'Ұсынылатын желдету:' : 'Окно проветривания:'} <b class="text-cyan-300">${win.rangeStr}</b> (AQI ${win.aqi})
      </div>
    `;

    let items = [];
    if (state.role === 'parents') {
      items = kz
        ? [
            {
              k: smoggy ? 'Шұғыл режим' : 'Қауіпсіз сағат',
              h: smoggy ? 'Мектеп ауласындағы серуенді шектеу' : 'Сыныптарды желдетуге қолайлы уақыт',
              p: smoggy
                ? `PM2.5 = ${snap.meanPM25} мкг/м³. Терезелерді жауып, HEPA H13 сүзгісін қосыңыз.`
                : `Инверсия ${snap.met.invM} м дейін көтерілді — бөлмені 20 минут желдетіңіз.`
            },
            {
              k: 'Күн тәртібі',
              h: `Үйді ${win.rangeStr} аралығында желдетіңіз`,
              p: 'Кешкі 19:30–23:00 және таңғы 07:30–09:30 пеш жағу кезінде терезені жабық ұстаңыз.'
            }
          ]
        : [
            {
              k: smoggy ? 'Защита детей' : 'Чистый режим',
              h: smoggy ? 'Перенести прогулки в закрытый зал' : 'Безопасно для прогулок и проветривания',
              p: smoggy
                ? `При PM2.5 = ${snap.meanPM25} мкг/м³ закройте окна классов и спален, включите рециркулятор с HEPA H13.`
                : `Слой перемешивания поднялся до ${snap.met.invM} м — оптимально для сквозного проветривания.`
            },
            {
              k: 'График дня',
              h: `Проветривайте помещения в ${win.rangeStr}`,
              p: 'Избегайте микропроветривания в часы вечерней растопки угля (19:30–23:00) и утренних пробок.'
            }
          ];
    } else if (state.role === 'ecoheat') {
      items = kz
        ? [
            {
              k: 'EcoHeat (-38% күйе)',
              h: 'Көмірді жоғарыдан төмен тұтату',
              p: 'Құрғақ ағашты көмірдің үстіне қойып жағу қара түтінді 38%-ға дейін азайтып, отынды үнемдейді.'
            },
            {
              k: 'Инверсия бақылауы',
              h: snap.met.invM < 250 ? `Инверсия ${snap.met.invM} м — қалдық жақпаңыз` : 'Мұржа тартымы қалыпты',
              p: 'Төмен инверсия кезінде ылғалды көмір түтіні тікелей көрші аулаларда тұрып қалады.'
            }
          ]
        : [
            {
              k: 'Метод EcoHeat (-38% сажи)',
              h: 'Верхний розжиг угля без чёрного дыма',
              p: 'Растопка сверху дожигает летучие газы в пламени, снижая выброс сажи до 38% и экономя уголь.'
            },
            {
              k: 'Учёт инверсии',
              h: snap.met.invM < 250 ? `Инверсия ${snap.met.invM} м: риск задымления улицы` : 'Хорошая вертикальная тяга',
              p: 'В часы низкой инверсии используйте только сухой сортовой уголь и полностью исключите сжигание мусора.'
            }
          ];
    } else {
      items = kz
        ? [
            {
              k: 'Салон сүзгісі',
              h: smoggy ? 'Кептелісте ішкі рециркуляцияны қосыңыз' : 'Сыртқы ауа ағыны рұқсат етілген',
              p: 'Транзиттік қиылыстарда ультраұсақ PM2.5 концентрациясы қалалық фоннан 2 есе жоғары.'
            },
            {
              k: 'Таза аула',
              h: 'Қозғалтқышты аулада 3 минуттан артық қыздырмау',
              p: 'Тұрғын үй терезелері алдында бос жүрісті азайту таңғы түтін шыңын төмендетеді.'
            }
          ]
        : [
            {
              k: 'Климат в салоне',
              h: smoggy ? 'Включите рециркуляцию на магистралях' : 'Можно открыть приток наружного воздуха',
              p: 'В плотном потоке на развязках концентрация дизельной сажи вдвое превышает городской фон.'
            },
            {
              k: 'Чистый двор',
              h: 'Прогрев двигателя не дольше 2–3 минут',
              p: 'Отказ от долгого холостого хода во дворах снижает локальные утренние пики у первых этажей.'
            }
          ];
    }

    cardsBox.innerHTML = items
      .map(
        it => `
        <div class="v-card p-3">
          <div class="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-0.5">${it.k}</div>
          <div class="text-xs font-bold text-white mb-1">${it.h}</div>
          <p class="text-[11px] text-slate-300 leading-relaxed">${it.p}</p>
        </div>
      `
      )
      .join('');
  }

  function updateForecastCharts(city) {
    const labels = [];
    const baseArr = [];
    const ecoArr = [];
    const whoArr = [];
    const gradStops = [];

    const baseOpts = { wind: city.baseWind, stove: 0, traffic: 0 };

    for (let s = 0; s <= 48; s++) {
      const { hour } = stepToClock(s);
      labels.push(`${String(hour).padStart(2, '0')}:00`);
      const b = buildCitySnap(city, s, baseOpts);
      const c = buildCitySnap(city, s, state.sim);
      baseArr.push(b.meanPM25);
      ecoArr.push(c.meanPM25);
      whoArr.push(15);
      gradStops.push(`${c.meta.hex} ${((s / 48) * 100).toFixed(1)}%`);
    }

    const strip = document.getElementById('timeline-strip');
    if (strip) strip.style.background = `linear-gradient(90deg, ${gradStops.join(', ')})`;

    if (mainChart) {
      mainChart.data.labels = labels;
      mainChart.data.datasets[0].data = baseArr;
      mainChart.data.datasets[1].data = ecoArr;
      mainChart.data.datasets[2].data = whoArr;
      mainChart.update('none');
    }

    if (miniChart) {
      miniChart.data.labels = labels;
      miniChart.data.datasets[0].data = baseArr;
      miniChart.data.datasets[1].data = ecoArr;
      miniChart.update('none');
    }
  }

  function refreshUI() {
    const city = CITIES[state.cityId];
    const kz = state.lang === 'kz';
    const snap = buildCitySnap(city, state.step, state.sim);
    const win = findCleanWindow(city, state.step, state.sim);
    const sim = calcSimEffect(city, state.step);

    renderCityButtons();
    renderDistrictChips(city);

    const wEl = document.getElementById('hud-wind-val');
    const iEl = document.getElementById('hud-inv-val');
    const tEl = document.getElementById('hud-temp-val');
    if (wEl) wEl.textContent = `${snap.met.windMs} м/с`;
    if (iEl) iEl.textContent = `${snap.met.invM} м`;
    if (tEl) tEl.textContent = `${snap.met.tempC > 0 ? '+' : ''}${snap.met.tempC}°C`;

    snap.posts.forEach((p, idx) => {
      const node = stationNodes[idx];
      if (!node) return;

      node.targetPM = p.pm25;
      const wCut = state.sim.wind > 4.5 ? Math.max(0.52, 4.5 / state.sim.wind) : 1.0;
      node.targetRad = p.st.radiusM * (0.68 + Math.min(0.65, p.aqi / 280)) * wCut;

      const pin = document.getElementById(`pin-${p.st.id}`);
      if (pin) {
        const isSel = state.tab === 'compare' && (p.st.id === state.compareA || p.st.id === state.compareB);
        pin.className = `v-pin ${p.meta.lvlClass}${isSel ? ' v-pin-selected' : ''}`;
        const core = pin.querySelector('.v-pin-core');
        if (core) core.textContent = String(p.aqi);
      }

      if (node.marker && node.marker.getPopup()) {
        node.marker.setPopupContent(buildPinPopup(p, city));
      }
    });

    const { hour } = stepToClock(state.step);
    const hh = `${String(hour).padStart(2, '0')}:00`;
    const pTitle = document.getElementById('panel-city-title');
    const pSub = document.getElementById('panel-city-sub');
    const pBadge = document.getElementById('panel-time-badge');
    if (pTitle) pTitle.textContent = kz ? city.nameKz : city.nameRu;
    if (pSub) pSub.textContent = kz ? city.terrainKz : city.terrainRu;
    if (pBadge) pBadge.textContent = `+${state.step}${kz ? 'с' : 'ч'} • ${hh}`;

    const arc = document.getElementById('aqi-gauge-arc');
    if (arc) {
      const len = 150.8;
      arc.style.strokeDashoffset = String((len * (1 - Math.min(1, snap.cityAQI / 320))).toFixed(1));
      arc.style.stroke = snap.meta.hex;
    }

    const sAqi = document.getElementById('summary-aqi');
    const sBadge = document.getElementById('summary-badge');
    const sTxt = document.getElementById('summary-text');
    if (sAqi) sAqi.textContent = String(snap.cityAQI);
    if (sBadge) {
      sBadge.setAttribute('style', snap.meta.badgeCss);
      sBadge.textContent = snap.meta.title;
    }
    if (sTxt) sTxt.textContent = snap.meta.desc;

    const mPm25 = document.getElementById('m-pm25');
    const mPm10 = document.getElementById('m-pm10');
    const mInv = document.getElementById('m-inv');
    const mInvState = document.getElementById('m-inv-state');
    const mWind = document.getElementById('m-wind');
    if (mPm25) mPm25.textContent = snap.meanPM25.toFixed(1);
    if (mPm10) mPm10.textContent = String(snap.meanPM10);
    if (mInv) mInv.textContent = `${snap.met.invM} м`;
    if (mInvState) {
      const low = snap.met.invM < 250;
      mInvState.textContent = low ? (kz ? 'Қақпақ <250м' : 'Застой <250м') : (kz ? 'Ашық' : 'Продув');
      mInvState.className = low ? 'text-[9px] text-rose-300 font-semibold' : 'text-[9px] text-emerald-300';
    }
    if (mWind) mWind.textContent = snap.met.windMs.toFixed(1);

    const cwAqi = document.getElementById('clean-win-aqi');
    const cwRange = document.getElementById('clean-win-range');
    const cwTimer = document.getElementById('clean-win-timer');
    if (cwAqi) cwAqi.textContent = `AQI ${win.aqi}`;
    if (cwRange) {
      cwRange.textContent = kz
        ? `Қауіпсіз желдету: ${win.rangeStr}`
        : `Безопасное проветривание: ${win.rangeStr}`;
    }
    if (cwTimer) {
      cwTimer.textContent = win.openNow
        ? kz
          ? `Терезе қазір ашық! Қалды: ${win.remH}сағ ${win.remM}мин (H_inv ${win.invM} м)`
          : `Окно открыто сейчас! Осталось ${win.remH}ч ${win.remM}мин (H_inv ${win.invM} м)`
        : kz
        ? `Терезеге дейін ${win.waitHours} сағ • H_inv ${win.invM} м дейін көтеріледі`
        : `До открытия ${win.waitHours} ч • Крышка инверсии поднимется до ${win.invM} м`;
    }
    const cwCard = document.getElementById('clean-win-card');
    if (cwCard) cwCard.onclick = () => setStep(win.bestStep);

    const stList = document.getElementById('stations-list');
    if (stList) {
      stList.innerHTML = snap.posts
        .map(
          (p, i) => `
          <div class="v-card v-card-hover px-3 py-2 flex items-center justify-between gap-2">
            <button class="flex-1 min-w-0 text-left" data-focus-post="${i}">
              <div class="text-xs font-bold text-white truncate">${kz ? p.st.nameKz : p.st.nameRu}</div>
              <div class="text-[10.5px] text-slate-400 truncate">${kz ? p.st.zoneKz : p.st.zoneRu}</div>
            </button>
            <div class="flex items-center gap-1.5 shrink-0">
              <button class="px-1.5 py-0.5 rounded text-[10px] font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/25" title="Сравнить район" data-cmp-post="${p.st.id}">⇄</button>
              <span class="v-mono text-[11px] font-bold px-2 py-0.5 rounded-md" style="${p.meta.badgeCss}">
                ${p.aqi}
              </span>
            </div>
          </div>
        `
        )
        .join('');

      stList.querySelectorAll('[data-focus-post]').forEach(b => {
        b.addEventListener('click', () => {
          const idx = Number(b.getAttribute('data-focus-post'));
          const n = stationNodes[idx];
          if (n && map) {
            map.flyTo(shiftedLatLng([n.st.lat, n.st.lng], 13), 13, { duration: 0.7 });
            if (n.marker) n.marker.openPopup();
          }
        });
      });

      stList.querySelectorAll('[data-cmp-post]').forEach(b => {
        b.addEventListener('click', () => {
          window.__vortexPickCompare(b.getAttribute('data-cmp-post'));
        });
      });
    }

    // Суточные фазы и факторы во вкладке Прогноз
    const dGrid = document.getElementById('diurnal-grid');
    if (dGrid) {
      const morn = buildCitySnap(city, 12, state.sim);
      const noon = buildCitySnap(city, 18, state.sim);
      const eve = buildCitySnap(city, 1, state.sim);
      const phases = [
        { s: 12, t: '08:00', n: kz ? 'Таңғы шың' : 'Утренний пик', aqi: morn.cityAQI, c: morn.meta.hex },
        { s: 18, t: '14:00', n: kz ? 'Таза терезе' : 'Чистое окно', aqi: noon.cityAQI, c: noon.meta.hex },
        { s: 1, t: '21:00', n: kz ? 'Пеш жағу' : 'Топка печей', aqi: eve.cityAQI, c: eve.meta.hex }
      ];
      dGrid.innerHTML = phases
        .map(
          ph => `
          <button class="rounded-lg bg-[#0a0f1d] hover:bg-cyan-500/10 border border-slate-800 p-2 text-left transition" data-jump-ph="${ph.s}">
            <div class="v-mono text-[10px] text-slate-400">${ph.t}</div>
            <div class="text-[11px] font-bold text-white truncate mt-0.5">${ph.n}</div>
            <div class="v-mono text-xs font-extrabold mt-1" style="color:${ph.c};">AQI ${ph.aqi}</div>
          </button>
        `
        )
        .join('');
      dGrid.querySelectorAll('[data-jump-ph]').forEach(b => {
        b.addEventListener('click', () => setStep(Number(b.getAttribute('data-jump-ph'))));
      });
    }

    const fList = document.getElementById('factors-list');
    if (fList) {
      const wInv = snap.met.invM < 250 ? 48 : 28;
      const wCoal = Math.round(city.coalShare * 52 * (1 - 0.38 * (state.sim.stove / 100)));
      const wWind = Math.min(34, Math.round((4.8 / Math.max(0.7, snap.met.windMs)) * 10));
      const wTraf = Math.max(8, 100 - wInv - wCoal - wWind);
      const rows = [
        { l: kz ? 'Инверсия қақпағы (H_inv)' : 'Запирание инверсией (H_inv)', v: wInv, c: '#f59e0b' },
        { l: kz ? 'Көмір секторы және ЖЭО' : 'Угольный сектор и ТЭЦ', v: wCoal, c: '#e11d48' },
        { l: kz ? 'Жел алмасу тапшылығы' : 'Слабый ветровой вынос', v: wWind, c: '#06b6d4' },
        { l: kz ? 'Дизельді транзит' : 'Дизельный и грузовой поток', v: wTraf, c: '#10b981' }
      ];
      fList.innerHTML = rows
        .map(
          r => `
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-slate-300">${r.l}</span>
              <span class="v-mono font-semibold text-white">${r.v}%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div class="h-full rounded-full" style="width:${r.v}%;background:${r.c};"></div>
            </div>
          </div>
        `
        )
        .join('');
    }

    renderCompareSection(city, snap);

    const vw = document.getElementById('val-wind');
    const vs = document.getElementById('val-stove');
    const vt = document.getElementById('val-traffic');
    if (vw) vw.textContent = `${state.sim.wind.toFixed(1)} м/с`;
    if (vs) vs.textContent = `${state.sim.stove}%`;
    if (vt) vt.textContent = `${state.sim.traffic}%`;

    const simHead = document.getElementById('sim-headline');
    const simSub = document.getElementById('sim-subline');
    if (simHead) {
      const p = Math.max(0, sim.pct);
      simHead.textContent = kz
        ? `PM2.5 төмендеуі: ${p}% | Тәулігіне ${sim.tonnes} т шығарынды үнемделді`
        : `Снижение PM2.5 на ${p}% | Предотвращено ${sim.tonnes} тонн выбросов за сутки`;
    }
    if (simSub) {
      simSub.innerHTML = sim.active
        ? `${kz ? 'База:' : 'База:'} <b>AQI ${sim.base.cityAQI}</b> → ${
            kz ? 'Шаралармен:' : 'С мерами:'
          } <b class="text-cyan-300">AQI ${sim.cur.cityAQI} (${sim.cur.meanPM25} мкг/м³)</b>`
        : kz
        ? 'Ползуноктарды жылжытып, түтін күмбезінің сейілуін тексеріңіз.'
        : 'Измените параметры ниже для мгновенного пересчёта карты и графика.';
    }

    renderGuideSection(city, snap, win);

    const tlClock = document.getElementById('tl-clock');
    const tlPill = document.getElementById('tl-status-pill');
    const tlStep = document.getElementById('tl-step-txt');
    const tlSlider = document.getElementById('timeline-slider');

    if (tlClock) tlClock.textContent = formatStepLabel(state.step, state.lang);
    if (tlStep) tlStep.textContent = `+${state.step}${kz ? 'с / 48с' : 'ч / 48ч'}`;
    if (tlSlider && Number(tlSlider.value) !== state.step) tlSlider.value = String(state.step);
    if (tlPill) {
      tlPill.setAttribute('style', snap.meta.badgeCss);
      tlPill.textContent = `${snap.meta.title} • H_inv ${snap.met.invM} м`;
    }

    renderTimelineTicks();
    updateForecastCharts(city);
    syncMobileUI(city, snap, win);
  }

  function selectCity(cityId) {
    if (!CITIES[cityId]) return;
    state.cityId = cityId;
    state.activeDistrictId = null;

    const city = CITIES[cityId];
    state.sim.wind = city.baseWind;
    state.compareA = city.stations[0].id;
    state.compareB = city.stations[city.stations.length - 1].id;

    const wSlider = document.getElementById('slider-wind');
    if (wSlider) wSlider.value = String(city.baseWind);

    const dInp = document.getElementById('district-input');
    const dClr = document.getElementById('btn-district-clear');
    const dDrop = document.getElementById('district-dropdown');
    if (dInp) dInp.value = '';
    if (dClr) dClr.classList.add('hidden');
    if (dDrop) dDrop.classList.add('hidden');

    mountCityPins(city);
    if (map) {
      map.flyTo(shiftedLatLng(city.center, city.zoom), city.zoom, { duration: 0.85 });
    }
    refreshUI();
  }

  function setStep(val) {
    state.step = Math.max(0, Math.min(48, Math.round(val)));
    refreshUI();
  }

  function togglePlay() {
    state.playing = !state.playing;
    const iPlay = document.getElementById('ico-play');
    const iPause = document.getElementById('ico-pause');

    if (state.playing) {
      if (iPlay) iPlay.classList.add('hidden');
      if (iPause) iPause.classList.remove('hidden');
      state.playTimer = setInterval(() => {
        setStep(state.step >= 48 ? 0 : state.step + 1);
      }, 700);
    } else {
      if (iPlay) iPlay.classList.remove('hidden');
      if (iPause) iPause.classList.add('hidden');
      if (state.playTimer) {
        clearInterval(state.playTimer);
        state.playTimer = null;
      }
    }
  }

  function switchTab(tabId) {
    state.tab = tabId;
    const views = {
      summary: 'view-summary',
      forecast: 'view-forecast',
      compare: 'view-compare',
      whatif: 'view-whatif',
      guide: 'view-guide'
    };

    Object.entries(views).forEach(([k, id]) => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('hidden', k !== tabId);
    });

    document.querySelectorAll('.v-tab').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
    });

    updateCompareMapLine();

    setTimeout(() => {
      if (tabId === 'forecast' && mainChart) mainChart.resize();
      if (tabId === 'compare' && compareChart) compareChart.resize();
      if (tabId === 'whatif' && miniChart) miniChart.resize();
    }, 30);
  }

  function setLanguage(lang) {
    state.lang = lang === 'kz' ? 'kz' : 'ru';
    document.documentElement.lang = state.lang === 'kz' ? 'kk' : 'ru';

    const t = dict[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (t[k]) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (t[k]) el.setAttribute('placeholder', t[k]);
    });

    const bRu = document.getElementById('btn-lang-ru');
    const bKz = document.getElementById('btn-lang-kz');
    if (bRu && bKz) {
      if (state.lang === 'ru') {
        bRu.className = 'px-2 py-1 rounded-md font-semibold bg-cyan-500/20 text-cyan-300 transition';
        bKz.className = 'px-2 py-1 rounded-md font-medium text-slate-400 hover:text-white transition';
      } else {
        bKz.className = 'px-2 py-1 rounded-md font-semibold bg-cyan-500/20 text-cyan-300 transition';
        bRu.className = 'px-2 py-1 rounded-md font-medium text-slate-400 hover:text-white transition';
      }
    }

    if (state.tourOpen) renderTour();
    refreshUI();
  }

  // Приветственное окно и интерактивный тур
  function checkFirstVisit() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) return;
    let seen = false;
    try {
      seen = localStorage.getItem('vortex_visited') === 'true';
    } catch (_e) {}
    if (!seen) modal.classList.remove('hidden');
  }

  function closeWelcome() {
    const modal = document.getElementById('welcome-modal');
    const chk = document.getElementById('chk-welcome-hide');
    if (modal) modal.classList.add('hidden');
    try {
      if (!chk || chk.checked) localStorage.setItem('vortex_visited', 'true');
      else localStorage.removeItem('vortex_visited');
    } catch (_e) {}
  }

  function getTourConfig() {
    const kz = state.lang === 'kz';
    return [
      {
        target: 'district-widget',
        badge: kz ? '1-қадам / 4' : 'Шаг 1 / 4',
        title: kz ? '1. Шағынауданды іздеу және зум' : '1. Поиск микрорайона и зум',
        desc: kz
          ? 'Өз шағынауданыңызды (Самал, Орбита, Көктал) таңдаңыз — карта бірден сол орамға жақындап, жергілікті AQI көрсетеді.'
          : 'Выберите любой микрорайон (Самал-2, Орбита-3, Коктал-1) — карта приблизит квартал и покажет расчётный локальный индекс.',
        enter() {}
      },
      {
        target: 'sidebar',
        badge: kz ? '2-қадам / 4' : 'Шаг 2 / 4',
        title: kz ? '2. Екі ауданды салыстыру' : '2. Сравнение двух районов',
        desc: kz
          ? 'Таулы Медеу мен ойпаттағы Шаңырақтың PM2.5 және H_inv инверсия биіктігін бір графикте салыстырыңыз.'
          : 'Сопоставьте любой низинный пост с предгорьем (например, Шанырак vs Медеу) по PM2.5 и высоте инверсии H_inv.',
        enter() {
          if (state.collapsed) togglePanel(false);
          switchTab('compare');
        }
      },
      {
        target: 'timeline-bar',
        badge: kz ? '3-қадам / 4' : 'Шаг 3 / 4',
        title: kz ? '3. 48 сағаттық уақыт шкаласы' : '3. Временная шкала на 48 часов',
        desc: kz
          ? 'Play басып, түнгі пеш жағу шыңынан күндізгі 14:00 таза ауа терезесіне дейінгі өзгерісті бақылаңыз.'
          : 'Проиграйте прогноз на 48 часов, чтобы увидеть переход от вечернего смога к дневному окну проветривания.',
        enter() {}
      },
      {
        target: 'btn-tg-open',
        badge: kz ? '4-қадам / 4' : 'Шаг 4 / 4',
        title: kz ? '4. Telegram ескерту боты' : '4. Персональный Telegram-бот',
        desc: kz
          ? 'Таңғы 07:00 және кешкі 19:00 түтін ескертулеріне бір батырмамен жазылыңыз.'
          : 'Подключите автоматические утренние (07:00) и вечерние (19:00) предупреждения о смоге для своего района.',
        enter() {}
      }
    ];
  }

  function clearTourSpotlights() {
    document.querySelectorAll('.v-tour-spot').forEach(el => el.classList.remove('v-tour-spot'));
  }

  function renderTour() {
    const tip = document.getElementById('tour-tooltip');
    if (!tip) return;
    const steps = getTourConfig();
    const cur = steps[state.tourIdx];
    if (!cur) return;

    clearTourSpotlights();
    cur.enter();

    const target = document.getElementById(cur.target);
    if (target) target.classList.add('v-tour-spot');

    const bEl = document.getElementById('tour-badge');
    const tEl = document.getElementById('tour-title');
    const dEl = document.getElementById('tour-desc');
    const prev = document.getElementById('btn-tour-prev');
    const next = document.getElementById('btn-tour-next');
    const dots = document.getElementById('tour-dots');

    if (bEl) bEl.textContent = cur.badge;
    if (tEl) tEl.textContent = cur.title;
    if (dEl) dEl.textContent = cur.desc;
    if (prev) {
      prev.style.visibility = state.tourIdx === 0 ? 'hidden' : 'visible';
      prev.textContent = dict[state.lang].tourBack;
    }
    if (next) {
      next.textContent = state.tourIdx === steps.length - 1 ? dict[state.lang].tourDone : dict[state.lang].tourNext;
    }
    if (dots) {
      dots.innerHTML = steps
        .map(
          (_, i) =>
            `<span class="w-2 h-2 rounded-full ${i === state.tourIdx ? 'bg-cyan-400' : 'bg-slate-700'}"></span>`
        )
        .join('');
    }

    tip.classList.remove('hidden');

    if (target && window.innerWidth > 920) {
      const r = target.getBoundingClientRect();
      if (cur.target === 'timeline-bar') {
        tip.style.left = `${Math.max(16, r.left + 16)}px`;
        tip.style.top = `${Math.max(84, r.top - 185)}px`;
      } else if (cur.target === 'sidebar') {
        tip.style.left = `${Math.max(16, r.left - 350)}px`;
        tip.style.top = `${Math.max(88, r.top + 30)}px`;
      } else {
        tip.style.left = `${Math.max(16, Math.min(window.innerWidth - 355, r.left))}px`;
        tip.style.top = `${Math.max(82, r.bottom + 14)}px`;
      }
    } else {
      tip.style.left = '14px';
      tip.style.top = '82px';
    }
  }

  function closeTour() {
    state.tourOpen = false;
    clearTourSpotlights();
    const tip = document.getElementById('tour-tooltip');
    if (tip) tip.classList.add('hidden');
  }

  // Генерация печатной сводки А4
  function buildPrintSheet() {
    const out = document.getElementById('print-report');
    if (!out) return;

    const city = CITIES[state.cityId];
    const kz = state.lang === 'kz';
    const snap = buildCitySnap(city, state.step, state.sim);
    const win = findCleanWindow(city, state.step, state.sim);
    const sim = calcSimEffect(city, state.step);
    const stamp = new Date().toLocaleString(kz ? 'kk-KZ' : 'ru-RU');

    const rows = snap.posts
      .map(
        p => `
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 10px;font-weight:600;">${kz ? p.st.nameKz : p.st.nameRu}</td>
          <td style="padding:8px 10px;color:#475569;font-size:12px;">${kz ? p.st.zoneKz : p.st.zoneRu}</td>
          <td style="padding:8px 10px;text-align:right;font-family:monospace;font-weight:700;">${p.pm25.toFixed(1)}</td>
          <td style="padding:8px 10px;text-align:right;font-family:monospace;">${p.mixH} м</td>
          <td style="padding:8px 10px;text-align:right;font-weight:700;color:${p.meta.hex};">AQI ${p.aqi} (${p.meta.title})</td>
        </tr>
      `
      )
      .join('');

    out.innerHTML = `
      <div style="border-bottom:2px solid #0a0f1d;padding-bottom:12px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:flex-start;">
        <div>
          <div style="font-size:11px;font-weight:800;letter-spacing:0.1em;color:#0891b2;">VORTEX KAZAKHSTAN • МОНИТОРИНГ ИНВЕРСИИ И СМОГА</div>
          <h1 style="font-size:21px;font-weight:800;margin:4px 0 2px;color:#0f172a;">
            ${kz ? 'Ауа сапасы мен инверсияның ресми тәуліктік есебі' : 'Официальная оперативная сводка качества воздуха'}
          </h1>
          <div style="font-size:13px;color:#475569;">${kz ? city.nameKz : city.nameRu} — ${kz ? city.terrainKz : city.terrainRu}</div>
        </div>
        <div style="text-align:right;font-size:12px;color:#475569;">
          <div>${stamp}</div>
          <div><b>${formatStepLabel(state.step, state.lang)} (+${state.step}ч)</b></div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px;">
        <div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px 12px;">
          <div style="font-size:11px;color:#64748b;">Индекс AQI</div>
          <div style="font-size:24px;font-weight:800;color:${snap.meta.hex};">${snap.cityAQI}</div>
          <div style="font-size:12px;font-weight:600;">${snap.meta.title}</div>
        </div>
        <div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px 12px;">
          <div style="font-size:11px;color:#64748b;">PM2.5 / PM10</div>
          <div style="font-size:20px;font-weight:800;">${snap.meanPM25} / ${snap.meanPM10}</div>
          <div style="font-size:12px;color:#475569;">мкг/м³</div>
        </div>
        <div style="border:1px solid #cbd5e1;border-radius:10px;padding:10px 12px;">
          <div style="font-size:11px;color:#64748b;">Инверсия H_inv</div>
          <div style="font-size:20px;font-weight:800;">${snap.met.invM} м</div>
          <div style="font-size:12px;color:#475569;">Ветер ${snap.met.windMs} м/с (${snap.met.tempC}°C)</div>
        </div>
        <div style="border:1px solid #67e8f9;background:#ecfeff;border-radius:10px;padding:10px 12px;">
          <div style="font-size:11px;font-weight:700;color:#0e7490;">Окно проветривания</div>
          <div style="font-size:18px;font-weight:800;color:#155e75;">${win.rangeStr}</div>
          <div style="font-size:12px;color:#0e7490;">Ожидаемый AQI ${win.aqi}</div>
        </div>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
        <thead>
          <tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
            <th style="padding:8px 10px;text-align:left;">Пост</th>
            <th style="padding:8px 10px;text-align:left;">Зона</th>
            <th style="padding:8px 10px;text-align:right;">PM2.5</th>
            <th style="padding:8px 10px;text-align:right;">Слой H_inv</th>
            <th style="padding:8px 10px;text-align:right;">Статус</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>

      <div style="border:1px solid #cbd5e1;border-radius:10px;padding:11px 14px;background:#f8fafc;font-size:12.5px;">
        <b>Сценарий снижения выбросов:</b> снижение PM2.5 на ${Math.max(0, sim.pct)}%, предотвращено ${sim.tonnes} тонн выбросов за сутки.
      </div>
    `;
  }

  function togglePanel(force) {
    state.collapsed = typeof force === 'boolean' ? force : !state.collapsed;
    const panel = document.getElementById('sidebar');
    const chev = document.getElementById('panel-chevron');
    if (panel) panel.classList.toggle('collapsed', state.collapsed);
    document.body.classList.toggle('panel-hidden', state.collapsed);
    if (chev) chev.style.transform = state.collapsed ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  function bindAllEvents() {
    const colBtn = document.getElementById('btn-panel-collapse');
    if (colBtn) colBtn.addEventListener('click', () => togglePanel());

    document.querySelectorAll('.v-tab').forEach(b => {
      b.addEventListener('click', () => switchTab(b.getAttribute('data-tab')));
    });

    const jumpCmp = document.getElementById('btn-jump-compare');
    if (jumpCmp) jumpCmp.addEventListener('click', () => switchTab('compare'));

    // Поиск микрорайона
    const dInp = document.getElementById('district-input');
    const dClr = document.getElementById('btn-district-clear');
    const dDrop = document.getElementById('district-dropdown');

    if (dInp) {
      dInp.addEventListener('focus', () => renderDistrictDropdown(dInp.value));
      dInp.addEventListener('input', () => {
        if (dClr) dClr.classList.toggle('hidden', !dInp.value);
        renderDistrictDropdown(dInp.value);
      });
    }
    if (dClr) {
      dClr.addEventListener('click', () => {
        if (dInp) dInp.value = '';
        dClr.classList.add('hidden');
        if (dDrop) dDrop.classList.add('hidden');
        state.activeDistrictId = null;
        if (districtMarker && map) {
          map.removeLayer(districtMarker);
          districtMarker = null;
        }
        const city = CITIES[state.cityId];
        renderDistrictChips(city);
        if (map) map.flyTo(shiftedLatLng(city.center, city.zoom), city.zoom, { duration: 0.65 });
      });
    }
    document.addEventListener('click', e => {
      const w = document.getElementById('district-widget');
      if (dDrop && w && w.contains && !w.contains(e.target)) {
        dDrop.classList.add('hidden');
      }
    });

    // Сравнение двух постов
    const selA = document.getElementById('cmp-select-a');
    const selB = document.getElementById('cmp-select-b');
    const btnPick = document.getElementById('btn-pick-map');

    if (selA) {
      selA.addEventListener('change', e => {
        state.compareA = e.target.value;
        refreshUI();
      });
    }
    if (selB) {
      selB.addEventListener('change', e => {
        state.compareB = e.target.value;
        refreshUI();
      });
    }
    if (btnPick) {
      btnPick.addEventListener('click', () => {
        state.pickMode = !state.pickMode;
        state.pickNextSlot = 'a';
        btnPick.classList.toggle('active', state.pickMode);
        if (state.pickMode && window.innerWidth <= 768) {
          setSheetExpanded(false);
        }
        refreshUI();
      });
    }

    // Таймлайн и симулятор
    const tlSlider = document.getElementById('timeline-slider');
    if (tlSlider) tlSlider.addEventListener('input', e => setStep(Number(e.target.value)));
    const playBtn = document.getElementById('btn-play');
    if (playBtn) playBtn.addEventListener('click', togglePlay);

    const sW = document.getElementById('slider-wind');
    const sS = document.getElementById('slider-stove');
    const sT = document.getElementById('slider-traffic');
    if (sW) sW.addEventListener('input', e => { state.sim.wind = Number(e.target.value); refreshUI(); });
    if (sS) sS.addEventListener('input', e => { state.sim.stove = Number(e.target.value); refreshUI(); });
    if (sT) sT.addEventListener('input', e => { state.sim.traffic = Number(e.target.value); refreshUI(); });

    const btnReset = document.getElementById('btn-sim-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const c = CITIES[state.cityId];
        state.sim.wind = c.baseWind;
        state.sim.stove = 0;
        state.sim.traffic = 0;
        if (sW) sW.value = String(c.baseWind);
        if (sS) sS.value = '0';
        if (sT) sT.value = '0';
        refreshUI();
      });
    }

    const pEco = document.getElementById('btn-preset-eco');
    if (pEco) {
      pEco.addEventListener('click', () => {
        state.sim.stove = 80;
        state.sim.traffic = 60;
        if (sS) sS.value = '80';
        if (sT) sT.value = '60';
        refreshUI();
      });
    }

    const pBrz = document.getElementById('btn-preset-breeze');
    if (pBrz) {
      pBrz.addEventListener('click', () => {
        state.sim.wind = 5.5;
        if (sW) sW.value = '5.5';
        refreshUI();
      });
    }

    // Роли гида
    document.querySelectorAll('.v-role-btn').forEach(b => {
      b.addEventListener('click', () => {
        state.role = b.getAttribute('data-role') || 'parents';
        document.querySelectorAll('.v-role-btn').forEach(x => x.classList.toggle('active', x === b));
        refreshUI();
      });
    });

    // Слои карты
    const lDome = document.getElementById('btn-layer-dome');
    const lWind = document.getElementById('btn-layer-wind');
    const lSat = document.getElementById('btn-layer-sat');
    if (lDome) {
      lDome.addEventListener('click', () => {
        state.showDome = !state.showDome;
        lDome.classList.toggle('active', state.showDome);
      });
    }
    if (lWind) {
      lWind.addEventListener('click', () => {
        state.showWind = !state.showWind;
        lWind.classList.toggle('active', state.showWind);
      });
    }
    if (lSat) {
      lSat.addEventListener('click', () => {
        state.showSat = !state.showSat;
        lSat.classList.toggle('active', state.showSat);
        if (map && navyLayer && satLayer) {
          if (state.showSat) {
            map.removeLayer(navyLayer);
            satLayer.addTo(map);
          } else {
            map.removeLayer(satLayer);
            navyLayer.addTo(map);
          }
        }
      });
    }

    // Язык и PDF
    const bRu = document.getElementById('btn-lang-ru');
    const bKz = document.getElementById('btn-lang-kz');
    if (bRu) bRu.addEventListener('click', () => setLanguage('ru'));
    if (bKz) bKz.addEventListener('click', () => setLanguage('kz'));

    const bPdf = document.getElementById('btn-pdf');
    if (bPdf) {
      bPdf.addEventListener('click', () => {
        buildPrintSheet();
        window.print();
      });
    }

    // Telegram-бот
    const tgOpen = document.getElementById('btn-tg-open');
    const tgGuide = document.getElementById('btn-guide-tg');
    const tgClose = document.getElementById('btn-tg-close');
    const tgCity = document.getElementById('tg-city-select');
    const tgPost = document.getElementById('tg-post-select');
    const tgUser = document.getElementById('tg-username');
    const tgM = document.getElementById('tg-chk-morning');
    const tgE = document.getElementById('tg-chk-evening');
    const tgW = document.getElementById('tg-chk-window');
    const tgSave = document.getElementById('btn-tg-save');
    const tgTest = document.getElementById('btn-tg-test');

    if (tgOpen) tgOpen.addEventListener('click', openTelegramModal);
    if (tgGuide) tgGuide.addEventListener('click', openTelegramModal);
    if (tgClose) {
      tgClose.addEventListener('click', () => {
        const m = document.getElementById('tg-modal');
        if (m) m.classList.add('hidden');
      });
    }
    if (tgCity) {
      tgCity.addEventListener('change', e => {
        state.tg.cityId = e.target.value;
        populateTgPosts(state.tg.cityId);
        updateTelegramPreview();
      });
    }
    if (tgPost) {
      tgPost.addEventListener('change', e => {
        state.tg.postId = e.target.value;
        updateTelegramPreview();
      });
    }
    if (tgUser) {
      tgUser.addEventListener('input', e => {
        state.tg.handle = e.target.value || '@resident_kz';
        updateTelegramPreview();
      });
    }
    [
      [tgM, 'morning'],
      [tgE, 'evening'],
      [tgW, 'window']
    ].forEach(([el, key]) => {
      if (el) {
        el.addEventListener('change', e => {
          state.tg[key] = e.target.checked;
          updateTelegramPreview();
        });
      }
    });
    if (tgSave) tgSave.addEventListener('click', saveTelegramSub);
    if (tgTest) tgTest.addEventListener('click', sendTelegramTestAlert);

    // Модальное окно онбординга и тур
    const gOpen = document.getElementById('btn-guide-open');
    const wClose = document.getElementById('btn-welcome-x');
    const wGo = document.getElementById('btn-welcome-go');
    const wTour = document.getElementById('btn-welcome-tour');
    const tStart = document.getElementById('btn-tour-start');
    const tClose = document.getElementById('btn-tour-close');
    const tPrev = document.getElementById('btn-tour-prev');
    const tNext = document.getElementById('btn-tour-next');

    if (gOpen) {
      gOpen.addEventListener('click', () => {
        const m = document.getElementById('welcome-modal');
        if (m) m.classList.remove('hidden');
      });
    }
    if (wClose) wClose.addEventListener('click', closeWelcome);
    if (wGo) wGo.addEventListener('click', closeWelcome);

    const launchTour = () => {
      closeWelcome();
      state.tourOpen = true;
      state.tourIdx = 0;
      renderTour();
    };
    if (wTour) wTour.addEventListener('click', launchTour);
    if (tStart) tStart.addEventListener('click', launchTour);
    if (tClose) tClose.addEventListener('click', closeTour);
    if (tPrev) {
      tPrev.addEventListener('click', () => {
        if (state.tourIdx > 0) {
          state.tourIdx -= 1;
          renderTour();
        }
      });
    }
    if (tNext) {
      tNext.addEventListener('click', () => {
        const total = getTourConfig().length;
        if (state.tourIdx < total - 1) {
          state.tourIdx += 1;
          renderTour();
        } else {
          closeTour();
        }
      });
    }
  }

  // Мобильная шторка Bottom Sheet и раскрывающиеся чипсы (@media <= 768px)
  function setSheetExpanded(expanded) {
    const panel = document.getElementById('sidebar');
    if (!panel) return;
    const isExp = Boolean(expanded);
    panel.classList.toggle('expanded', isExp);
    document.body.classList.toggle('v-sheet-open', isExp);
    if (mobUI.handle) mobUI.handle.setAttribute('aria-expanded', String(isExp));

    if (isExp) {
      setTimeout(() => {
        if (mainChart) mainChart.resize();
        if (compareChart) compareChart.resize();
        if (miniChart) miniChart.resize();
      }, 60);
    }
  }

  function syncMobileUI(city, snap, win) {
    const kz = state.lang === 'kz';
    const cName = kz ? city.nameKz : city.nameRu;

    if (mobUI.dot) {
      mobUI.dot.style.background = snap.meta.hex;
      mobUI.dot.style.boxShadow = `0 0 9px ${snap.meta.hex}`;
    }
    if (mobUI.title) {
      const shortStatus = snap.meta.title.replace(/\s*\([^)]*\)/, '');
      mobUI.title.textContent = `${cName}: AQI ${snap.cityAQI} • ${shortStatus}`;
    }
    if (mobUI.sub) {
      mobUI.sub.textContent = kz
        ? `PM2.5 ${snap.meanPM25.toFixed(1)} • H_inv ${snap.met.invM} м • Терезе ${win.rangeStr}`
        : `PM2.5 ${snap.meanPM25.toFixed(1)} • H_inv ${snap.met.invM} м • Окно ${win.rangeStr}`;
    }
    if (mobUI.searchLbl) {
      const items = getSearchItems(city);
      const act = state.activeDistrictId ? items.find(x => x.id === state.activeDistrictId) : null;
      mobUI.searchLbl.textContent = act ? act.name : dict[state.lang].searchDistrictLabel;
    }
    if (mobUI.meteoLbl) {
      mobUI.meteoLbl.textContent = `${snap.met.windMs} м/с • H_inv ${snap.met.invM} м`;
    }
  }

  function initMobileSheet() {
    if (typeof document.createElement !== 'function') return;

    const panel = document.getElementById('sidebar');
    if (panel) {
      const handle = document.createElement('div');
      handle.className = 'v-sheet-handle';
      handle.setAttribute('role', 'button');
      handle.setAttribute('tabindex', '0');
      handle.setAttribute('aria-expanded', 'false');
      handle.innerHTML = `
        <div class="v-sheet-pill"></div>
        <div class="v-sheet-row">
          <div class="v-sheet-info">
            <span class="v-sheet-dot"></span>
            <div class="v-sheet-texts">
              <div class="v-sheet-title">Алматы: AQI 228 • Опасный смог</div>
              <div class="v-sheet-sub">PM2.5 178.1 • H_inv 193 м</div>
            </div>
          </div>
          <span class="v-sheet-arrow" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </div>
      `;

      if (panel.firstChild) panel.insertBefore(handle, panel.firstChild);
      else panel.appendChild(handle);

      mobUI.handle = handle;
      mobUI.dot = handle.querySelector('.v-sheet-dot');
      mobUI.title = handle.querySelector('.v-sheet-title');
      mobUI.sub = handle.querySelector('.v-sheet-sub');

      handle.addEventListener('click', () => {
        setSheetExpanded(!panel.classList.contains('expanded'));
      });

      let touchStartY = null;
      let touchOnHandle = false;

      panel.addEventListener(
        'touchstart',
        e => {
          if (!e.touches || !e.touches.length) return;
          touchStartY = e.touches[0].clientY;
          touchOnHandle = Boolean(handle.contains && handle.contains(e.target));
        },
        { passive: true }
      );

      panel.addEventListener(
        'touchend',
        e => {
          if (touchStartY === null || !e.changedTouches || !e.changedTouches.length) return;
          const dy = e.changedTouches[0].clientY - touchStartY;
          touchStartY = null;

          if (dy < -28 && !panel.classList.contains('expanded')) {
            setSheetExpanded(true);
          } else if (dy > 32 && panel.classList.contains('expanded') && (touchOnHandle || (panel.scrollTop || 0) <= 2)) {
            setSheetExpanded(false);
          }
        },
        { passive: true }
      );
    }

    const stack = document.getElementById('left-stack');
    const distWidget = document.getElementById('district-widget');
    if (stack && stack.children && stack.children.length >= 3) {
      mobUI.meteoBar = stack.children[1];
      mobUI.layersBar = stack.children[2];
      if (mobUI.meteoBar && mobUI.meteoBar.classList) mobUI.meteoBar.classList.add('v-meteo-bar');
      if (mobUI.layersBar && mobUI.layersBar.classList) mobUI.layersBar.classList.add('v-layers-bar');

      const chipsRow = document.createElement('div');
      chipsRow.className = 'v-mob-chips';
      chipsRow.innerHTML = `
        <button type="button" class="v-mob-chip v-surface" data-mob-act="search">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2.3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="v-mob-search-lbl">Поиск района</span>
        </button>
        <button type="button" class="v-mob-chip v-surface" data-mob-act="meteo">
          <span style="width:7px;height:7px;border-radius:9999px;background:#06b6d4;display:inline-block;"></span>
          <span class="v-mob-meteo-lbl">1.1 м/с • H_inv 185 м</span>
        </button>
        <button type="button" class="v-mob-chip v-surface" data-mob-act="about" aria-label="О системе">ℹ</button>
      `;

      stack.insertBefore(chipsRow, stack.firstChild);

      mobUI.searchBtn = chipsRow.querySelector('[data-mob-act="search"]');
      mobUI.searchLbl = chipsRow.querySelector('.v-mob-search-lbl');
      mobUI.meteoBtn = chipsRow.querySelector('[data-mob-act="meteo"]');
      mobUI.meteoLbl = chipsRow.querySelector('.v-mob-meteo-lbl');
      const aboutBtn = chipsRow.querySelector('[data-mob-act="about"]');

      if (mobUI.searchBtn && distWidget) {
        mobUI.searchBtn.addEventListener('click', e => {
          e.stopPropagation();
          const open = distWidget.classList.toggle('mob-open');
          mobUI.searchBtn.classList.toggle('active', open);
          if (open) {
            if (mobUI.meteoBar) mobUI.meteoBar.classList.remove('mob-open');
            if (mobUI.layersBar) mobUI.layersBar.classList.remove('mob-open');
            if (mobUI.meteoBtn) mobUI.meteoBtn.classList.remove('active');
            const inp = document.getElementById('district-input');
            if (inp && inp.focus) inp.focus();
          }
        });
      }

      if (mobUI.meteoBtn) {
        mobUI.meteoBtn.addEventListener('click', () => {
          const open = mobUI.meteoBar ? mobUI.meteoBar.classList.toggle('mob-open') : false;
          if (mobUI.layersBar) mobUI.layersBar.classList.toggle('mob-open', open);
          mobUI.meteoBtn.classList.toggle('active', open);
          if (open && distWidget) {
            distWidget.classList.remove('mob-open');
            if (mobUI.searchBtn) mobUI.searchBtn.classList.remove('active');
          }
        });
      }

      if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
          const m = document.getElementById('welcome-modal');
          if (m) m.classList.remove('hidden');
        });
      }
    }
  }

  function initVortex() {
    loadTelegramState();
    initMobileSheet();
    initMap();
    initCharts();
    bindAllEvents();
    setLanguage('ru');
    checkFirstVisit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVortex);
  } else {
    initVortex();
  }
})();
