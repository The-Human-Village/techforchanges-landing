import { axiosClient } from '@/api/base/axios'

export const fetchDimensionsData = async (locale: string) => {
  const { data } = await axiosClient.get(
    `dimensions?populate=icon&filters[dimension_parent][id][$null]=true&locale=${locale}`,
  )
  return data?.data
}
