import { axiosClient } from '@/api/base/axios'

export const fetchBecomeVolunteerData = async (locale: string) => {
  const { data } = await axiosClient.get(`become-a-volunteer?locale=${locale}`)
  return data?.data
}
