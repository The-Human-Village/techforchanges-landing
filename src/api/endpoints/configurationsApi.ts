import { axiosClient } from '@/api/base/axios'

export const fetchConfigurationsData = async (locale: string) => {
  const { data } = await axiosClient.get(
    `configurations?pagination[withCount]=false&locale=${locale}`,
  )
  return data?.data
}
