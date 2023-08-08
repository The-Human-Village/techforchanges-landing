import { useLanding } from '@/api/hooks/useLanding'
import { getCommonServerSideProps } from '@/api/utils'
import { Content } from '@/components/policy/content/content'
import { Hero } from '@/components/policy/hero/hero'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getCommonServerSideProps(context, queryClient)
}

export default function TermsOfUse() {
  const { data } = useLanding()

  return (
    <>
      <Hero title={data?.terms_of_use?.title} />
      <Content policy={data?.terms_of_use} />
    </>
  )
}
