import { axiosClient } from '@/api/base/axios'

export const fetchLanguagesData = async (locale: string) => {
  const { data } = await axiosClient.get(`languages?locale=${locale}`)
  return data?.results
}
