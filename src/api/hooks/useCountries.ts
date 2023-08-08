import { fetchCountriesData } from '@/api/endpoints/countriesApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useCountries = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Countries, locale], () =>
    fetchCountriesData(locale),
  )
}
