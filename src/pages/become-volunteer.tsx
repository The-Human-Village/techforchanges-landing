import undraw_lives_matter from '@/../public/images/illustrations/undraw_lives_matter.svg'
import { useBecomeVolunteer } from '@/api/hooks/useBecomeVolunteer'
import { useCities } from '@/api/hooks/useCities'
import { useCountries } from '@/api/hooks/useCountries'
import { useDimensions } from '@/api/hooks/useDimensions'
import { useLanguages } from '@/api/hooks/useLanguages'
import { useTranslations } from '@/api/hooks/useTranslations'
import { getPartnerServerSideProps } from '@/api/utils'
import { BecomePartner as BecomePartnerSection } from '@/components/become-partner/become-partner /become-partner'
import { BecomePartnerForm } from '@/components/become-partner/become-partner-form/become-partner-form'
import { getTranslationText } from '@/utilities/translations'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getPartnerServerSideProps(context, queryClient)
}

export default function BecomeVolunteer() {
  const { data: becomeVolunteer } = useBecomeVolunteer()
  const { data: dimensions } = useDimensions()
  const { data: cities } = useCities()
  const { data: languages } = useLanguages()
  const { data: countries } = useCountries()
  const { data: translations } = useTranslations()

  return (
    <>
      <BecomePartnerSection
        title={becomeVolunteer?.attributes?.title}
        description={becomeVolunteer?.attributes?.description}
        imgUrl={undraw_lives_matter.src}
        imgAlt="People holding hands"
      />
      <BecomePartnerForm
        dimensions={dimensions}
        cities={cities}
        languages={languages}
        countries={countries}
        title={getTranslationText(
          translations,
          'landing-become-volunteer-title',
        )}
      />
    </>
  )
}
