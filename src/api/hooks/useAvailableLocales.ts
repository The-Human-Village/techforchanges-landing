import { fetchAvailableLocalesData } from '@/api/endpoints/localesApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'

export const useAvailableLocales = () => {
  return useQuery({
    queryKey: [QueryKeys.Locales],
    queryFn: () => fetchAvailableLocalesData(),
  })
}
