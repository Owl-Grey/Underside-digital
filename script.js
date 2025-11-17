const translations = {
  en: {
    title: "Underside Entertainment",
    tagline: "Stories from the depths. Games, worlds and experimental narratives.",
    intro_main:
      "Underside Entertainment is a small independent studio that builds interconnected worlds in a shared universe. We work with digital games, tabletop RPGs and narrative experiments that blur the line between reality and simulation.",

    video_title: "Showreel",
    video_desc:
      "A short look into the atmosphere of the Underside universe. This video can change over time as projects move forward.",
    video_note:
      "You can watch the video directly on this page — no external players, no ads.",
    video_fallback:
      "Your browser cannot play this video. Try opening the page in a modern browser.",

    projects_title: "Projects",

    trpg_label: "Tabletop",
    trpg_title: "Underside TRPG",
    trpg_desc:
      "A narrative-focused tabletop role-playing game set in the Underside universe. Players explore fractured cities, digital echoes and strange clusters born from failed experiments.",
    trpg_tag: "Tabletop RPG • In development",

    lift_label: "Survival Horror",
    lift_title: "Underside: The Lift",
    lift_desc:
      "Rogue-like survival horror set in a distorted Soviet apartment block. Nine floors, unstable reality, procedural layouts and permanent death inside a broken simulation.",
    lift_tag: "PC Game • In development",

    dl_label: "Post-apocalyptic journey",
    dl_title: "Devastated Lands",
    dl_desc:
      "A first-person survival adventure on a desert planet. You roam the sands by boat, searching for the ocean your father once told you about, while the truth about the world slowly surfaces.",
    dl_tag: "PC Game • Concept stage",

    ln_label: "Experimental narrative",
    ln_title: "Life-net",
    ln_desc:
      "An experimental project about a network that remembers everyone. Fragmented memories, digital ghosts and the consequences of saving a human mind forever.",
    ln_tag: "Story project • Coming soon",

    about_title: "About the world of Underside",
    about_text:
      "All of our projects exist inside the same continuity. Events from one story may echo in another: a forgotten expedition, a broken neural network, or a rumor about a distant desert planet. You don't have to know the whole lore to enjoy each game, but the more you explore, the clearer the bigger picture becomes.",

    contact_title: "Contact",
    contact_text:
      "If you want to collaborate, talk about publishing, or just say hi — drop us a line.",
    contact_email_label: "Email:",

    footer_text: "Underside Entertainment · One universe, many entry points."
  },

  ru: {
    title: "Underside Entertainment",
    tagline: "Истории из Изнанки. Игры, миры и экспериментальные сюжеты.",
    intro_main:
      "Underside Entertainment — небольшая независимая студия, создающая связанные между собой миры в единой вселенной. Мы делаем компьютерные игры, настольные ролевые и экспериментальные проекты на стыке реальности и симуляции.",

    video_title: "Видеоролик",
    video_desc:
      "Короткий взгляд в атмосферу вселенной Изнанки. Со временем этот ролик может меняться по мере развития проектов.",
    video_note:
      "Видео можно смотреть прямо на сайте — без внешних плееров и рекламы.",
    video_fallback:
      "Ваш браузер не может воспроизвести это видео. Попробуйте открыть страницу в современном браузере.",

    projects_title: "Проекты",

    trpg_label: "Настольная игра",
    trpg_title: "Underside / Изнанка TRPG",
    trpg_desc:
      "НРИ по вселенной Изнанки. Игроки исследуют расколотые города, цифровые кластеры и последствия неудачных экспериментов с сознанием и нейросетями.",
    trpg_tag: "НРИ • В разработке",

    lift_label: "Сурвайвл-хоррор",
    lift_title: "Underside: The Lift",
    lift_desc:
      "Рогалик-сурвайвл в искажённой советской девятиэтажке. Девять этажей, нестабильная симуляция, процедурная генерация комнат и перманентная смерть.",
    lift_tag: "ПК-игра • В разработке",

    dl_label: "Песчаное путешествие",
    dl_title: "Devastated Lands",
    dl_desc:
      "Однопользовательское выживание от первого лица на песчаной планете. Герой бродит по пустыне на лодке, разыскивая океан из рассказов отца, и постепенно узнаёт правду о мире.",
    dl_tag: "ПК-игра • На этапе концепта",

    ln_label: "Экспериментальный проект",
    ln_title: "LifeNet",
    ln_desc:
      "LifeNet — это атмосферная научно-фантастическая RPG-выживалка о мире, пережившем корпоративные войны, религиозные восстания, экологический коллапс и цифровое возрождение.",
    ln_tag: "Сюжетный проект • Скоро",

    about_title: "О вселенной Underside",
    about_text:
      "Все проекты студии происходят в одной вселенной. События одной истории могут отзваться в другой: забытая экспедиция, сбойнувшая нейросеть или слух о далёкой песчаной планете. Не обязательно знать весь лор, чтобы играть, но чем глубже вы ныряете, тем яснее становится общая картина.",

    contact_title: "Контакты",
    contact_text:
      "По вопросам сотрудничества, издательства или просто чтобы написать нам — используйте почту ниже.",
    contact_email_label: "Почта:",

    footer_text: "Underside Entertainment · Одна вселенная, много точек входа."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (key in dict) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langTarget === lang);
  });
  localStorage.setItem("underside_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Пробуем взять язык из localStorage
  const saved = localStorage.getItem("underside_lang");

  if (saved === "ru" || saved === "en") {
    applyLanguage(saved);
  } else {
    // 2. Берём язык браузера
    const browserLang = (
      navigator.languages?.[0] ||
      navigator.language ||
      "en"
    ).toLowerCase();

    // 3. Определяем локаль
    const lang = browserLang.startsWith("ru") ? "ru" : "en";

    // 4. Применяем
    applyLanguage(lang);
  }

  // 5. Пользователь вручную переключает язык
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langTarget;
      applyLanguage(lang);
    });
  });
});


