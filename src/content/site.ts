/**
 * Все тексты сайта собраны здесь, чтобы их было легко менять,
 * не трогая вёрстку.
 */

export const recipient = {
  name: "Татьяна",
  /** Родительный падеж: «для Татьяны» */
  nameGenitive: "Татьяны",
  latinName: "Tatyana",
  // TODO: заменить на настоящую дату дня рождения
  birthday: "6 ноября",
};

export type SectionId = "hero" | "gratitude" | "memories" | "wishes";

export const navigation: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Главная" },
  { id: "gratitude", label: "Спасибо" },
  { id: "memories", label: "Моменты" },
  { id: "wishes", label: "Пожелания" },
];

export const header = {
  logo: `For ${recipient.latinName}`,
  logoBadge: "Special Day",
};

export const hero = {
  datePill: `${recipient.birthday} • особенный день`,
  musicLabel: "Мелодия",
  // TODO: заменить на настоящую мелодию (положить файл в public/audio/)
  musicSrc: "/audio/file_example_MP3_700KB.mp3",
  overline: "С самыми теплыми мыслями от меня с Юлей",
  titleLine: "С днём рождения,",
  titleName: `${recipient.name}!`,
  portrait: {
    src: "/images/hero/portrait.webp",
    alt: recipient.name,
  },
  pugBubble: "Гав! С праздником!",
  subtitle:
    "Сегодня Ваш день — и этот маленький сайт создан, чтобы сказать Вам важные слова.",
  cta: "Открыть поздравление",
  scrollHint: "Листай вниз",
};

/** Цвет кружка с иконкой у карточки благодарности */
export type IconTone = "blush" | "peach" | "sage" | "rose";

export const gratitude = {
  overline: "♡ от всего сердца",
  title: "Спасибо за всё",
  quote:
    "Спасибо вам за то, что вы вырастили удивительных детей — добрых, умных, заботливых и настоящих. Всё лучшее, что я вижу в вашей дочери каждый день, — это ваша любовь, ваше терпение и ваш пример.",
  items: [
    {
      icon: "💖",
      tone: "blush",
      title: "Уют и нежность",
      text: "За доброту и душевное тепло, которыми наполнен ваш дом. Я никогда не видел такой дружной семьи...",
    },
    {
      icon: "⭐",
      tone: "peach",
      title: "Пример для нас",
      text: "За мудрость, чуткость и терпение, с которыми вы воспитали детей. Юля - это результат ваших трудов. Спасибо за это!",
    },
    {
      icon: "🏡",
      tone: "sage",
      title: "Опора и поддержка",
      text: "За то, что вы всегда рядом — и в мгновения радости, и в трудные минуты. Спасибо, что заботитесь и переживаете за Юлю!",
    },
    {
      icon: "🐾",
      tone: "rose",
      title: "Семья навсегда",
      text: "За то, что приняли меня с открытым сердцем как родного человека. Я правда это очень ценю!",
    },
  ] satisfies { icon: string; tone: IconTone; title: string; text: string }[],
  polaroid: {
    src: '/images/gratitude/with_kids.webp',
    alt: "Мама и дети",
    caption: "Мама и дети ❤️",
    badge: "Спасибо! ♡",
  },
};

export type Memory = {
  title: string;
  text: string;
  /** Путь к фото в /public; null — розовая заглушка */
  src: string | null;
  /** Необязательная персиковая плашка в углу фото */
  badge?: string;
};

export const memories = {
  overline: "♡ мгновения счастья",
  title: "Самые тёплые моменты",
  description:
    "Немного воспоминаний о том, что наполняет наши дни смыслом, любовью и звонким искренним смехом.",
  // Лучше всего смотрятся вертикальные фото (3:4). Можно добавлять и убирать карточки.
  // TODO: заменить заглушки на настоящие фото
  items: [
    {
      title: "Первое знакомство",
      text: "Уверен, всем было немного страшно знакомиться...",
      src: '/images/memories/together.webp',
    },
    {
      title: "Новый год всей семьёй",
      text: "Самые крепкие объятия, тепло и мандарины",
      src: "/images/memories/new_year.webp",
    },
    {
      title: "Тот самый день с мопсом",
      text: "Хвостик-бублик 🐾 море смеха и радости",
      src: '/images/memories/pug.webp',
      badge: "⭐ Звезда дня!",
    },
    {
      title: "День, который изменил всю жизнь",
      text: "Яркое платье, красота и новая жизнь, наполненная как счастьем, так и переживаниями",
      src: "/images/memories/smile.webp",
    },
    {
      title: "Прекрасный день на даче",
      text: "Навсегда запомню ту заботу, которую Вы проявили в первые часы нашего знакомства",
      src: "/images/memories/doch.webp",
    },
    {
      title: "Еще немного Бо)",
      text: "Лучший пёс, которого я знаю",
      src: "/images/memories/pug_2.webp",
    },
  ] satisfies Memory[],
  footnote: "Впереди ещё сотни ярких моментов...",
};

export const wishes = {
  overline: "♡ личное письмо",
  title: "Мои пожелания",
  letter: {
    greeting: `Дорогая ${recipient.name}!`,
    // Каждый элемент — отдельный абзац
    paragraphs: [
      "От всей души поздравляю вас с днём рождения! Желаю крепкого здоровья, много радостных дней, тепла и уюта в доме, вдохновляющих путешествий и новых ярких впечатлений.",
      "Пусть дети и близкие дарят вам только счастье и поводы для гордости, а каждый новый рассвет приносит повод искренне улыбнуться. Вы делаете этот мир добрее — пусть он отвечает вам тем же сторицей!",
    ],
    signature: "С любовью, Саша ♡",
    signatureNote: "Всегда рядом",
  },
  cake: {
    pugBubble: "Мы ждём кусочек!",
    blowButton: "Задуть свечи и загадать желание 🎂",
    relightButton: "Зажечь свечи снова",
    hint: "Нажми на кнопку, чтобы погасить свечи!",
    hintDone: "Желание обязательно сбудется! ✨",
  },
};

export const footer = {
  title: "С днём рождения! 💛",
  datePill: `${recipient.birthday} • Специально для ${recipient.nameGenitive}`,
  backToTop: "Вернуться в начало",
  keepsake: `${recipient.latinName}'s Birthday Keepsake`,
  note: "С любовью, нежностью и искренним теплом",
};
