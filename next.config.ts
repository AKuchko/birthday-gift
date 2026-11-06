import type { NextConfig } from "next";

// На GitHub Pages сайт живёт по адресу https://akuchko.github.io/birthday-gift/,
// поэтому при сборке в GitHub Actions добавляем префикс пути. Локально он пустой.
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/birthday-gift" : "";

const nextConfig: NextConfig = {
  /* config options here */
  // Статический экспорт: `next build` кладёт готовый сайт в папку out/
  output: "export",
  basePath,
  // Прокидываем basePath в клиентский код — им пользуется хелпер asset()
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Оптимизатор next/image требует сервер, на GitHub Pages его нет
  images: { unoptimized: true },
  // cacheComponents и partialPrefetching выключены: они включают PPR,
  // а PPR несовместим со статическим экспортом (output: "export")
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
