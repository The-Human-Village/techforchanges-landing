import type { IMission } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  mission: IMission
}

export const Mission = ({ mission }: Props) => {
  return (
    <Grid
      id={Section.Mission}
      as="section"
      m="0 auto"
      maxW={pxToRem(1440)}
      px={{ base: pxToRem(24), lg: pxToRem(100) }}
      py={{ base: pxToRem(40), lg: pxToRem(100) }}
      templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
      templateRows={{ base: 'repeat(2, auto)', lg: 'repeat(1, 1fr)' }}
      gap={{ base: pxToRem(24), lg: pxToRem(62) }}
    >
      <GridItem display="flex" justifyContent="center" flexDir="column">
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {mission?.title}
        </Heading>
        <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
          {mission?.description}
        </Text>
      </GridItem>
      <GridItem justifySelf="center">
        <Image
          src={mission?.image?.data?.attributes?.url}
          h={{ base: pxToRem(218), md: pxToRem(400) }}
          alt="Group of young volunteers packing clothes in boxes to give it to people in need"
        />
      </GridItem>
    </Grid>
  )
}
