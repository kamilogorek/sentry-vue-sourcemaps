1. Install dependencies `yarn`
2. Create `.sentryclirc` file by copying `.sentryclirc.sample` and updating it with your project name, organization name and API token that can be obtained here https://sentry.io/api/
3. Update `src/App.vue` with your `DSN` and `RELEASE` config options
4. `yarn build`
5. `RELEASE=sameAsInApp yarn upload`
6. `yarn serve:prod`
7. Click the button!
8. Go to your Sentry project page
9. ???
10. PROFIT