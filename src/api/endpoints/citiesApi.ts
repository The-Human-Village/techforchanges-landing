import { axiosClient } from '@/api/base/axios'

export const fetchCitiesData = async (locale: string) => {
  const { data } = await axiosClient.get(`cities?locale=${locale}`)
  return data?.results
}
