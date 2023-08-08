import undraw_agreement from '@/../public/images/illustrations/undraw_agreement_with_doc.svg'
import { useBecomePartner } from '@/api/hooks/useBecomePartner'
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

export default function BecomePartner() {
  const { data: becomePartner } = useBecomePartner()
  const { data: dimensions } = useDimensions()
  const { data: cities } = useCities()
  const { data: languages } = useLanguages()
  const { data: countries } = useCountries()
  const { data: translations } = useTranslations()

  return (
    <>
      <BecomePartnerSection
        title={becomePartner?.attributes?.title}
        description={becomePartner?.attributes?.description}
        imgUrl={undraw_agreement.src}
        imgAlt="Handshake image"
      />
      <BecomePartnerForm
        dimensions={dimensions}
        cities={cities}
        languages={languages}
        countries={countries}
        title={getTranslationText(translations, 'landing-become-partner-title')}
      />
    </>
  )
}
