const locales = ['en', 'ru', 'az'] as const;
export function generateLocaleStaticParams() {
  return locales.map((locale) => ({ locale }));
}