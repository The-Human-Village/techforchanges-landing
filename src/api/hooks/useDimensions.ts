import { fetchDimensionsData } from '@/api/endpoints/dimensionsApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useDimensions = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Dimensions, locale], () =>
    fetchDimensionsData(locale),
  )
}
