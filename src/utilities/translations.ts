export interface ITranslation {
  id: number
  text: string
  createdAt: string
  updatedAt: string
  locale: string
}

export const getTranslationText = (
  translation: Record<string, ITranslation>,
  key: string,
): string | null => (translation && translation[key]?.text) || null
