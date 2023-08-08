import { fetchBecomePartnerData } from '@/api/endpoints/becomePartnerApi'
import { fetchBecomeVolunteerData } from '@/api/endpoints/becomeVolunteerApi'
import { fetchCitiesData } from '@/api/endpoints/citiesApi'
import { fetchCountriesData } from '@/api/endpoints/countriesApi'
import { fetchDimensionsData } from '@/api/endpoints/dimensionsApi'
import { fetchFooterData } from '@/api/endpoints/footerApi'
import { fetchLandingData } from '@/api/endpoints/landingApi'
import { fetchLanguagesData } from '@/api/endpoints/languagesApi'
import { fetchAvailableLocalesData } from '@/api/endpoints/localesApi'
import { QueryKeys } from '@/types/index'
import { dehydrate } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getCommonServerSideProps(
  context: GetServerSidePropsContext,
  queryClient,
) {
  await queryClient.prefetchQuery([QueryKeys.Locales], () =>
    fetchAvailableLocalesData(),
  )

  await queryClient.prefetchQuery([QueryKeys.Landing, context.locale], () =>
    fetchLandingData(context.locale),
  )

  await queryClient.prefetchQuery([QueryKeys.Footer, context.locale], () =>
    fetchFooterData(context.locale),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export async function getPartnerServerSideProps(
  context: GetServerSidePropsContext,
  queryClient,
) {
  await queryClient.prefetchQuery([QueryKeys.Dimensions, context.locale], () =>
    fetchDimensionsData(context.locale),
  )

  await queryClient.prefetchQuery([QueryKeys.Cities, context.locale], () =>
    fetchCitiesData(context.locale),
  )

  await queryClient.prefetchQuery([QueryKeys.Languages, context.locale], () =>
    fetchLanguagesData(context.locale),
  )

  await queryClient.prefetchQuery([QueryKeys.Countries, context.locale], () =>
    fetchCountriesData(context.locale),
  )

  await queryClient.prefetchQuery(
    [QueryKeys.BecomePartner, context.locale],
    () => fetchBecomePartnerData(context.locale),
  )

  await queryClient.prefetchQuery(
    [QueryKeys.BecomeVolunteer, context.locale],
    () => fetchBecomeVolunteerData(context.locale),
  )

  return getCommonServerSideProps(context, queryClient)
}

export async function getDimensionsServerSideProps(
  context: GetServerSidePropsContext,
  queryClient,
) {
  await queryClient.prefetchQuery([QueryKeys.Dimensions], () =>
    fetchDimensionsData(context.locale),
  )

  return getCommonServerSideProps(context, queryClient)
}
