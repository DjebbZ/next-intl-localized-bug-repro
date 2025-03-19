import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
  pathnames: {
    "/": "/",
    "/some-page/[id]": "/some-page[id]"
  }
});
