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
  birthday: "12 ноября",
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
  overline: "Для самой тёплой и любимой",
  titleLine: "С днём рождения,",
  titleName: `${recipient.name}!`,
  portrait: {
    src: "/images/hero/portrait.png",
    alt: recipient.name,
  },
  pugBubble: "Гав! С праздником!",
  subtitle:
    "Сегодня твой день — и этот маленький сайт создан, чтобы сказать тебе самые важные слова.",
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
      text: "За доброту и душевное тепло, которыми наполнен ваш дом.",
    },
    {
      icon: "⭐",
      tone: "peach",
      title: "Пример для нас",
      text: "За мудрость, чуткость и терпение, с которыми вы воспитали детей.",
    },
    {
      icon: "🏡",
      tone: "sage",
      title: "Опора и поддержка",
      text: "За то, что вы всегда рядом — и в мгновения радости, и в трудные минуты.",
    },
    {
      icon: "🐾",
      tone: "rose",
      title: "Семья навсегда",
      text: "За то, что приняли меня с открытым сердцем как родного человека.",
    },
  ] satisfies { icon: string; tone: IconTone; title: string; text: string }[],
  polaroid: {
    // TODO: положить фото в public/images/gratitude/ и указать путь, например
    // "/images/gratitude/mom-and-kids.jpg". Пока null — показывается розовая заглушка.
    src: null as string | null,
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
      title: "Лето на даче",
      text: "Родные сады, свежие ягоды и чай у самовара",
      src: null,
    },
    {
      title: "Новый год всей семьёй",
      text: "Самые крепкие объятия, тепло и мандарины",
      src: "/images/memories/new-year.jpg",
    },
    {
      title: "Тот самый день с мопсом",
      text: "Хвостик-бублик 🐾 море смеха и радости",
      src: null,
      badge: "⭐ Звезда дня!",
    },
    {
      title: "Самая лучезарная улыбка",
      text: "Светлые глаза, вдохновение и нежность",
      src: "/images/memories/smile.jpg",
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
