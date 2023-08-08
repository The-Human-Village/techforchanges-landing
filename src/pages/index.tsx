import { useLanding } from '@/api/hooks/useLanding'
import { getCommonServerSideProps } from '@/api/utils'
import { DataAndTransparency } from '@/components/home/data-and-transparency/data-and-transparency'
import { GettingServices } from '@/components/home/getting-services/getting-services'
import { Help } from '@/components/home/help/help'
import { HumanVillage } from '@/components/home/human-village/human-village'
import { Locations } from '@/components/home/locations/locations'
import { Map } from '@/components/home/map/map'
import { MeetTeam } from '@/components/home/meet-team/meet-team'
import { Mission } from '@/components/home/mission/mission'
import { Partners } from '@/components/home/partners/partners'
import { Story } from '@/components/home/story/story'
import { HomeLayout } from '@/components/layout/home-layout'
import { Gallery } from '@/components/shared/gallery/gallery'
import { QueryClient } from '@tanstack/react-query'
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient()
  return getCommonServerSideProps(context, queryClient)
}

const Home = () => {
  const { data } = useLanding()

  return (
    <>
      <Story story={data?.story} />
      <Mission mission={data?.mission} />
      <GettingServices vision={data?.vision} />
      <HumanVillage app={data?.app} />
      <Help app={data?.app} />
      <Locations location={data?.location} />
      <Map />
      <Partners partner={data?.partner} />
      <MeetTeam team={data?.team} />
      <Gallery gallery={data?.gallery} />
      <DataAndTransparency dataAndTransparency={data?.data_and_transparency} />
    </>
  )
}

Home.Layout = HomeLayout

export default Home
