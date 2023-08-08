import { axiosClient } from '@/api/base/axios'

export const fetchTranslationsData = async (locale: string) => {
  const { data } = await axiosClient.get(
    `translations?pagination[pageSize]=200&pagination[withCount]=false&locale=${locale}`,
  )
  return data?.data
}
