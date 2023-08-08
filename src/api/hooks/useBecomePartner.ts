import { fetchBecomePartnerData } from '@/api/endpoints/becomePartnerApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useBecomePartner = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.BecomePartner, locale], () =>
    fetchBecomePartnerData(locale),
  )
}
