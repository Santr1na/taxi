# FareLook — taxi-site

Современный лендинг мобильного сервиса FareLook для оценки стоимости поездок и анализа маршрутов. Продукт на стадии MVP.

## Стек

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3021](http://localhost:3021).

## Сборка

```bash
npm run build
npm start
```

## Запуск через PM2

```bash
npm run build
npm run pm2:start
```

Полезные команды:

```bash
npm run pm2:status   # статус процесса
npm run pm2:logs     # логи
npm run pm2:restart  # перезапуск
npm run pm2:stop     # остановка
npm run pm2:delete   # удалить из PM2
```

Сайт будет доступен на [http://localhost:3021](http://localhost:3021).

## Структура

- `src/app/` — страницы и глобальные стили
- `src/components/` — секции лендинга (Hero, Benefits, FAQ и др.)
