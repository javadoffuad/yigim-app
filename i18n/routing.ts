import { LanguageCode } from '@/app/models/language.models';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // Все поддерживаемые локали
  locales: [LanguageCode.ENG, LanguageCode.AZE, LanguageCode.RUS],
 
  // Локаль по умолчанию (не отображается в URL)
  defaultLocale: LanguageCode.ENG,

  // Не показывать локаль по умолчанию в URL
  localeDetection: true,
  localePrefix: 'as-needed',
});