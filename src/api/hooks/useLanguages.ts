import { fetchLanguagesData } from '@/api/endpoints/languagesApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useLanguages = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Languages, locale], () =>
    fetchLanguagesData(locale),
  )
}
