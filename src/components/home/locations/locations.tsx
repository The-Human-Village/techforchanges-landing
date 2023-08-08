import { LocationGridItem } from '@/components/home/locations/location-grid-item/location-grid-item'
import { LocationPin, People, World } from '@/components/utilities/icon/icon'
import type { ILocation } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'

export type Props = {
  location: ILocation
}

export const Locations = ({ location }: Props) => {
  return (
    <Box id={Section.Locations} as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {location?.title}
        </Heading>
        <Text variant="regular" mb={{ base: pxToRem(24), lg: pxToRem(62) }}>
          {location?.description}
        </Text>
        <Grid
          templateColumns={`repeat(auto-fill, minmax(${pxToRem(327)}, 1fr))`}
          gap={{ base: pxToRem(24), xl: pxToRem(32) }}
        >
          <LocationGridItem
            icon={<People w={pxToRem(60)} h={pxToRem(60)} color="blue.800" />}
            title={location.organisations_label}
            number={location?.number_organisations}
          />
          <LocationGridItem
            icon={
              <LocationPin w={pxToRem(60)} h={pxToRem(60)} color="blue.800" />
            }
            title={location.cities_label}
            number={location?.number_cities}
          />
          <LocationGridItem
            icon={<World w={pxToRem(60)} h={pxToRem(60)} color="blue.800" />}
            title={location.countries_label}
            number={location?.number_countries}
          />
        </Grid>
      </Flex>
    </Box>
  )
}
