import { fetchFooterData } from '@/api/endpoints/footerApi'
import { QueryKeys } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useFooter = () => {
  const { locale } = useRouter()
  return useQuery([QueryKeys.Footer, locale], () => fetchFooterData(locale))
}
