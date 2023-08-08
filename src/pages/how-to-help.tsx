import { useLanding } from '@/api/hooks/useLanding'
import { getCommonServerSideProps } from '@/api/utils'
import { HowToHelp as HowToHelpSection } from '@/components/how-to-help/how-to-help/how-to-help'
import { Partnership } from '@/components/how-to-help/partnership/partnership'
import { WhoCanHelp } from '@/components/how-to-help/who-can-help/who-can-help'
import { YouCanAlso } from '@/components/how-to-help/you-can-also/you-can-also'
import { Gallery } from '@/components/shared/gallery/gallery'
import { NeedHelp } from '@/components/shared/need-help/need-help'
import { RoutePath } from '@/types/index'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getCommonServerSideProps(context, queryClient)
}

export default function HowToHelp() {
  const { data } = useLanding()

  return (
    <>
      <HowToHelpSection howToHelp={data?.how_to_help} />
      <WhoCanHelp whoCanHelp={data?.who_can_help} />
      <Partnership
        partnership={data?.partnership}
        joinUsUrl={RoutePath.BECOME_PARTNER}
      />
      <Partnership
        partnership={data?.volunteering}
        joinUsUrl={RoutePath.BECOME_VOLUNTEER}
        bg="white.100"
      />
      <NeedHelp app={data?.app} />
      <YouCanAlso />
      <Gallery gallery={data?.gallery} />
    </>
  )
}
