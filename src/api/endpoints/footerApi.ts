import { axiosClient } from '@/api/base/axios'

export const fetchFooterData = async (locale: string) => {
  const { data } = await axiosClient.get(`footer?locale=${locale}`)
  return data?.data
}
