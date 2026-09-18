/*
  ССЫЛКИ НА ВИДЕО
  Меняйте только ссылки после дефиса.
  Формат каждой строки: НОМЕР - ССЫЛКА

  Поддерживаются RUTUBE, YouTube и Vimeo.

  Примеры:
  1.1 - https://rutube.ru/video/ВАШ_ID/
  1.2 - https://rutube.ru/video/private/ВАШ_ID/?p=ВАШ_КЛЮЧ
  1.3 - https://youtu.be/ВАШ_ID
  1.4 - https://vimeo.com/ВАШ_ID
  1.5 - https://vimeo.com/manage/videos/ВАШ_ID

  Номера 1.1, 1.2, 2.1 и т. д. соответствуют видео из каталога.
*/
const videoLinksText = `
1.1 - https://rutube.ru/video/private/17ec1947a6e1c7c28d65d09818c2b503/?p=Pq7kxL72lCXtkfDwLAls0A
1.2 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
1.3 - https://vimeo.com/manage/videos/1030162693
2.1 - https://youtu.be/6s2j4APrun0
2.2 - https://rutube.ru/video/private/17ec1947a6e1c7c28d65d09818c2b503/?p=Pq7kxL72lCXtkfDwLAls0A
2.3 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
2.4 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
2.5 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
2.6 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
2.7 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
2.8 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.1 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.2 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.3 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.4 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.5 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.6 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.7 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.8 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.9 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.10 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.11 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.12 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.13 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.14 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
3.15 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.1 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.2 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.3 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.4 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.5 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.6 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.7 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
4.8 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
5.1 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
5.2 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
5.3 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
5.4 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
5.5 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
6.1 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
6.2 - https://rutube.ru/video/24ec8c1ca6b5cac06f06abf3a5e74117/
`;

const videoLinks = Object.fromEntries(
  videoLinksText
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const separator = line.indexOf(' - ');
      return separator === -1
        ? [line, '']
        : [line.slice(0, separator).trim(), line.slice(separator + 3).trim()];
    })
);

const makeVideos = (chapterId, titles) => titles.map((title, index) => {
  const number = `${chapterId}.${index + 1}`;
  return {
    title,
    url: videoLinks[number] || ''
  };
});

const chapters = [
  {
    id: 1,
    title: "Ступица колеса: Исходные условия",
    subtitle: "Как монтажер оказался в центре производственного процесса?",
    videos: makeVideos(1, [
      "Первые монтажные склейки",
      "Этапы производства",
      "Так чем же именно Вы занимаетесь?"
    ])
  },
  {
    id: 2,
    title: "«История, история, История…»: Edi-storial",
    subtitle: "Как монтажер помогает создавать историю? Ключевое взаимодействие монтажера и раскадровщиков.",
    videos: makeVideos(2, [
      "Монтажный таймлайн — длиною в годы",
      "Монтажеры в комнате, где работает история",
      "История и монтажер — как оживить черновые раскадровки",
      "Оживление статичных кадров",
      "История и монтажер — «Карл и Элли встречаются»",
      "История и монтажер — «Семейная жизнь»",
      "История и монтажер — разбор «Конец линии»",
      "История и монтажер — «Начало»"
    ])
  },
  {
    id: 3,
    title: "«Дирижируя концертом»: Звук",
    subtitle: "Как монтажер анимации «выстраивает» исполнение с помощью звука?",
    videos: makeVideos(3, [
      "Звук и монтажер — обзор звуковых дорожек",
      "Идеальное исполнение — всё дело в диалоге",
      "Деконструируя диалог — разбор Вуди",
      "Деконструируя диалог — разбор Рассела",
      "Деконструируя диалог — разбор Лингвини",
      "Кряхтение, крики и шепот",
      "Выстраивание композиции с помощью голосов",
      "Усовершенствование исполнения — подход к диалогу",
      "По одной реплике за раз",
      "Создание характера — роботы, которым можно сопереживать",
      "Создание характера — роботы второго плана, которым трудно сопереживать",
      "Создание характера — нечеловеческая речь",
      "Создание характера — медвежья речь",
      "Лай с чувством — говорит Данте",
      "Звуковой акцент — падение Пенни и дождь"
    ])
  },
  {
    id: 4,
    title: "«Сначала монтаж, потом съемка»: Лейаут",
    subtitle: "Где находится монтажер, когда съемочная площадка виртуальна? Роль монтажера в лейауте и работе с камерой.",
    videos: makeVideos(4, [
      "Декорации, а не целлулоиды — анимация в пространстве",
      "Управляя камерой — разбор «Клиенты!»",
      "Лейаут и монтажер — разбор «Уборщик»",
      "От истории к лейауту — разбор «Охота за замком»",
      "Использование 2D-камер при планировании 3D-сцены",
      "Движущиеся раскадровки — разбор «Забег на 100 миль»",
      "Готовим с лейаутом — разбор «Экскурсия по кухне»",
      "Лазерный лейаут — разбор «Космический рейнджер»"
    ])
  },
  {
    id: 5,
    title: "«Монтаж желе»: Рабочие сложности",
    subtitle: "С какими человеческими трудностями приходится сталкиваться в ходе многолетнего производства? Почему монтажеров стали называть племенем «Людей-воинов»?",
    videos: makeVideos(5, [
      "Сделано в Пойнт-Ричмонде — «Вы оказались в другом мире»",
      "Истории с фронтира — создание культуры студии",
      "Sequentiatis — «Пещера Йети»",
      "Это всё ещё смешно? — разбор «Инициация»",
      "Развитие рабочей версии — разбор «Храбрая сердцем»"
    ])
  },
  {
    id: 6,
    title: "«Из Галапагосов»: Монтажеры и технологии",
    subtitle: "Что такое прогресс? Взгляд на роль технологий в творческом процессе монтажера.",
    videos: makeVideos(6, [
      "Рожденный цифровым в аналоговом мире",
      "Текучие пиксели — за пределами пансканирования"
    ])
  }
];

function toEmbedUrl(url) {
  if (!url) return '';

  const raw = url.trim();
  if (!raw) return '';

  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return raw;
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, '');

  // RUTUBE: public video, private video with ?p=access_key, Shorts, or
  // an already prepared embed URL.
  if (host === 'rutube.ru') {
    if (parsed.pathname.startsWith('/play/embed/')) {
      return parsed.href;
    }

    const publicMatch = parsed.pathname.match(/^\/video\/([A-Za-z0-9_-]+)\/?$/);
    const privateMatch = parsed.pathname.match(/^\/video\/private\/([A-Za-z0-9_-]+)\/?$/);
    const shortsMatch = parsed.pathname.match(/^\/shorts\/([A-Za-z0-9_-]+)\/?$/);

    if (privateMatch) {
      const id = privateMatch[1];
      const key = parsed.searchParams.get('p');
      return key
        ? `https://rutube.ru/play/embed/${id}/?p=${encodeURIComponent(key)}`
        : `https://rutube.ru/play/embed/${id}/`;
    }

    const id = publicMatch?.[1] || shortsMatch?.[1];
    if (id) {
      return `https://rutube.ru/play/embed/${id}/`;
    }
  }

  // YouTube: youtu.be/ID, youtube.com/watch?v=ID, /shorts/ID and existing embeds.
  if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com' || host === 'www.youtube-nocookie.com') {
    if (parsed.pathname.startsWith('/embed/')) {
      return parsed.href;
    }

    const watchId = parsed.searchParams.get('v');
    const shortsMatch = parsed.pathname.match(/^\/shorts\/([A-Za-z0-9_-]+)/);
    const liveMatch = parsed.pathname.match(/^\/live\/([A-Za-z0-9_-]+)/);
    const id = watchId || shortsMatch?.[1] || liveMatch?.[1];

    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
  }

  if (host === 'youtu.be') {
    const id = parsed.pathname.replace(/^\//, '').split('/')[0];
    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
  }

  // Vimeo: regular video links, manage links, or existing player embeds.
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    if (host === 'player.vimeo.com' && parsed.pathname.startsWith('/video/')) {
      return parsed.href;
    }

    const match = parsed.pathname.match(/\/videos\/(\d+)/) || parsed.pathname.match(/\/(\d+)(?:\/)?$/);
    if (match) {
      const id = match[1];
      return `https://player.vimeo.com/video/${id}`;
    }
  }

  // Unknown URL: leave it untouched rather than guessing.
  return raw;
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function renderChapters() {
  const container = document.getElementById("chapter-grid");
  container.innerHTML = chapters.map(chapter => `
    <a class="chapter-card" href="#chapter-${chapter.id}" onclick="selectChapter(${chapter.id}); return false;">
      <span class="chapter-number">Глава ${chapter.id}</span>
      <h3>Глава ${chapter.id}: ${chapter.title}</h3>
      <p>${chapter.subtitle}</p>
    </a>
  `).join("");
}

function renderVideos(chapter) {
  const grid = document.getElementById("video-grid");
  document.getElementById("videos-title").textContent = `Глава ${chapter.id}: ${chapter.title}`;
  document.getElementById("chapter-subtitle").textContent = chapter.subtitle;

  grid.innerHTML = chapter.videos.map((video, index) => {
    const number = `${chapter.id}.${index + 1}`;
    const id = slug(`${number}-${video.title}`);
    const embed = toEmbedUrl(video.url);

    return `
      <article class="video-card" id="${id}">
        <div class="video-frame video-placeholder" data-embed="${embed}" data-title="${number} ${video.title}">
          <button class="video-play" type="button" aria-label="Воспроизвести видео ${number}">
            <span class="play-icon">▶</span>
            <span>Нажмите, чтобы воспроизвести</span>
          </button>
        </div>
        <div class="video-meta">
          <h3 class="video-title"><span class="video-code">${number}</span>${video.title}</h3>
        </div>
      </article>
    `;
  }).join("");

  attachVideoHandlers();
}

function attachVideoHandlers() {
  document.querySelectorAll('.video-placeholder').forEach(frame => {
    const button = frame.querySelector('.video-play');
    button.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = frame.dataset.embed;
      iframe.title = frame.dataset.title || 'Video';
      iframe.allow = 'clipboard-write; autoplay';
      iframe.allowFullscreen = true;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('loading', 'eager');
      frame.replaceChildren(iframe);
      frame.classList.remove('video-placeholder');
    });
  });
}

function selectChapter(id) {
  const chapter = chapters.find(item => item.id === id);
  if (!chapter) return;
  renderVideos(chapter);
  const url = `${window.location.pathname}#chapter-${id}`;
  history.replaceState(null, "", url);
  document.getElementById("videos").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initFromHash() {
  const match = window.location.hash.match(/^#chapter-(\d+)$/);
  const id = match ? Number(match[1]) : 1;
  const chapter = chapters.find(item => item.id === id) || chapters[0];
  renderVideos(chapter);
}

renderChapters();
initFromHash();
