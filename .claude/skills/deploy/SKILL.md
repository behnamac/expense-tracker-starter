Deploy the app to staging by running these steps in order. Stop immediately if any step fails and report the error.

## Steps

### 1. Run tests
Run `npm run lint` and confirm it exits with no errors.

> Note: this project has no test runner configured. When one is added (e.g. Vitest), update this step to run `npm test` or `npm run test` first, then lint.

### 2. Build production bundle
Run `npm run build` and confirm the `dist/` directory is produced with no build errors.

### 3. Push to staging
Run the staging deploy command for this project.

> **TODO — configure staging target:** Replace this step with the real command once staging is set up. Common examples:
> - Static host (e.g. Netlify CLI): `npx netlify deploy --dir=dist --prod`
> - Firebase: `firebase deploy --only hosting`
> - Custom rsync/SSH: `rsync -avz dist/ user@staging-host:/var/www/app`
> - GitHub Pages: `npm run deploy` (if gh-pages is configured)

After all three steps succeed, report a short summary: what was linted, build output size, and where the app was deployed.
