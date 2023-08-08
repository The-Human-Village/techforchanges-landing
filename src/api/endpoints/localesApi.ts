import { axiosClient } from '@/api/base/axios'

export const fetchAvailableLocalesData = async () => {
  const data = await axiosClient.get('i18n/locales')
  return data?.data
}
