import { useDimensions } from '@/api/hooks/useDimensions'
import { useLanding } from '@/api/hooks/useLanding'
import { getDimensionsServerSideProps } from '@/api/utils'
import { AppIntroduction } from '@/components/i-need-help/app-introduction/app-introduction'
import { Hero } from '@/components/i-need-help/hero/hero'
import { Testimonials } from '@/components/i-need-help/testimonials/testimonials'
import { WhatWeOffer } from '@/components/i-need-help/what-we-offer/what-we-offer'
import { WhoIsItFor } from '@/components/i-need-help/who-is-it-for/who-is-it-for'
import { NeedHelp } from '@/components/shared/need-help/need-help'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getDimensionsServerSideProps(context, queryClient)
}

export default function INeedHelp() {
  const { data } = useLanding()
  const { data: dimensions } = useDimensions()

  return (
    <>
      <Hero app={data?.app} />
      <WhatWeOffer offer={data?.app?.offer} dimensions={dimensions} />
      <WhoIsItFor forWho={data?.app?.for_who} />
      <AppIntroduction howTo={data?.app?.how_to} />
      <NeedHelp app={data?.app} />
      <Testimonials testimonials={data?.app?.testimonials} />
    </>
  )
}
