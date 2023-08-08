import { axiosClient } from '@/api/base/axios'

export const fetchBecomePartnerData = async (locale: string) => {
  const { data } = await axiosClient.get(`become-a-partner?locale=${locale}`)
  return data?.data
}
