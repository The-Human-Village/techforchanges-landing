import { createContext, useState } from 'react'

export type LocaleContextValue = {
  locale: string | undefined
  updateLocale: (newLocale: string) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en') // Default to 'en'

  const updateLocale = (newLocale) => {
    setLocale(newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
