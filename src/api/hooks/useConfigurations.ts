import { fetchConfigurationsData } from '@/api/endpoints/configurationsApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useConfigurations = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Configurations, locale], () =>
    fetchConfigurationsData(locale),
  )
}
