import { fetchLandingData } from '@/api/endpoints/landingApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useLanding = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Landing, locale], () => fetchLandingData(locale))
}
