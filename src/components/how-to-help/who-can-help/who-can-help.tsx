import type { IWhoCanHelp } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  whoCanHelp: IWhoCanHelp
}

export const WhoCanHelp = ({ whoCanHelp }: Props) => {
  return (
    <Box bg="white.100">
      <Grid
        as="section"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        templateRows={{ base: 'repeat(2, auto)', lg: 'repeat(1, 1fr)' }}
        gap={{ base: pxToRem(24), lg: pxToRem(62) }}
      >
        <GridItem justifySelf="center" order={[2, null, null, 1]}>
          <Image
            h={{ base: pxToRem(218), md: pxToRem(400) }}
            src={whoCanHelp?.image?.data?.attributes?.url}
            alt="Group of young volunteers packing clothes in boxes to give it to people in need"
          />
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          flexDir="column"
          order={[1, null, null, 2]}
        >
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {whoCanHelp?.title}
          </Heading>
          <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
            {whoCanHelp?.description}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}
