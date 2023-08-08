import { axiosClient } from '@/api/base/axios'

export const fetchCountriesData = async (locale: string) => {
  const { data } = await axiosClient.get(
    `countries?populate=flag&locale=${locale}`,
  )
  return data?.results
}
