import { fetchTranslationsData } from '@/api/endpoints/translationsApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useTranslations = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Translations, locale], () =>
    fetchTranslationsData(locale),
  )
}
