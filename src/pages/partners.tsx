import { useLanding } from '@/api/hooks/useLanding'
import { getCommonServerSideProps } from '@/api/utils'
import { OurPartners } from '@/components/partners/our-partners/our-partners'
import { PartnersGrid } from '@/components/partners/partners-grid/partners-grid'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getCommonServerSideProps(context, queryClient)
}

export default function Partners() {
  const { data } = useLanding()

  return (
    <>
      <OurPartners partner={data?.partner} />
      <PartnersGrid partner={data?.partner} />
    </>
  )
}
