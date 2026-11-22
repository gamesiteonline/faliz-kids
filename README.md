# Faliz Kids World

A cartoon game universe for children. Play, learn, explore and create across 12 islands and 60 games.

Developer: Fahad Mohamed.

## Play

Open the app and tap Play. Progress, coins, stars and profiles stay on this device (IndexedDB, with a local backup copy). No account and no personal details are required.

Grown-ups can open the lock icon, answer a sum (or a 4-digit code they set), then review play time, set a daily limit, remove a profile, or save and restore a backup file.

## Graphics

Low uses a flat island list. Medium and High show the 3D lobby. Each game loads only when it is opened.

## Sounds

Music and effects are generated in the browser, so they work offline after the app itself has loaded.

## Android

This build is the installable web app (phones, tablets, portrait and landscape). A sideload APK is not produced here because packaging one needs Android Studio, which is outside this preview. Do not treat a missing APK as a finished native package.

## Scripts

- `npm run dev` starts the preview
- `npm run typecheck` checks types
- `npm run build` makes the production build
