import { fetchCitiesData } from '@/api/endpoints/citiesApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useCities = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Cities, locale], () => fetchCitiesData(locale))
}
