import { PartnerCard } from '@/components/home/partners/partner-card/partner-card'
import type { IPartner } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

export type Props = {
  partner: IPartner
}

export const PartnersGrid = ({ partner }: Props) => {
  return (
    <Box as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(178) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Grid
          templateColumns="repeat(auto-fill, minmax(204px, 1fr))"
          gap={pxToRem(40)}
        >
          {partner?.partners?.map((partner, index) => (
            <GridItem key={index} h={pxToRem(204)}>
              <PartnerCard
                url={partner?.logo?.data?.attributes?.url}
                name={partner?.name}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
