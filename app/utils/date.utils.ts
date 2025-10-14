import { LanguageCode } from "../models/language.models"

export function formatDate(dateString: string, lang: LanguageCode): string {
  const date = new Date(dateString)
  
  const monthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    az: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
  }

  const year = date.getFullYear()
  const month = monthNames[lang as keyof typeof monthNames]?.[date.getMonth()] || 'Unknown'
  const day = date.getDate().toString().padStart(2, '0')

  // Разные форматы для разных языков
  const formats = {
    en: `${month} ${day}, ${year}`,      // May 29, 2025
    ru: `${day} ${month}, ${year}`,      // 29 мая, 2025
    az: `${day} ${month}, ${year}`       // 29 May, 2025
  }

  return formats[lang as keyof typeof formats] || formats.en
}
