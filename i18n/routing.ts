import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // Все поддерживаемые локали
  locales: ['en', 'az'],
 
  // Локаль по умолчанию (не отображается в URL)
  defaultLocale: 'en',

  // Не показывать локаль по умолчанию в URL
  localeDetection: false
});