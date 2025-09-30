export enum LanguageCode {
  AZE = 'az',
  ENG = 'en',
  RUS = 'ru',
}

export interface Language {
  icon: string;
  name: string;
  code: LanguageCode;
}