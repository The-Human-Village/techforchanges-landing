import { fetchBecomeVolunteerData } from '@/api/endpoints/becomeVolunteerApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useBecomeVolunteer = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.BecomeVolunteer, locale], () =>
    fetchBecomeVolunteerData(locale),
  )
}
