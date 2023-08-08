import type { IDimension, IOffer } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

export type Props = {
  offer: IOffer
  dimensions: IDimension[]
}

export const WhatWeOffer = ({ offer, dimensions }: Props) => {
  return (
    <Box as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(80) }}
      >
        <Flex flexDir="column">
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {offer?.title}
          </Heading>
          <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(700) }}>
            {offer?.description}
          </Text>
        </Flex>
        <Grid
          templateColumns="repeat(auto-fill, minmax(327px, 1fr))"
          gap={pxToRem(40)}
        >
          {dimensions?.map((dimension, index) => (
            <GridItem key={index}>
              <Card h="full" p={pxToRem(40)}>
                <CardBody
                  flexDir="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Flex
                    w={pxToRem(60)}
                    h={pxToRem(60)}
                    justifyContent="center"
                    alignItems="center"
                    bg="blue.50"
                    borderRadius={pxToRem(8)}
                    mb={pxToRem(28)}
                  >
                    <Image
                      src={dimension?.attributes?.icon?.data?.attributes?.url}
                      alt={`${dimension.attributes.title} icon`}
                      w={pxToRem(24)}
                      h={pxToRem(24)}
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(29%) sepia(70%) saturate(1595%) hue-rotate(194deg) brightness(91%) contrast(98%)',
                      }}
                    />
                  </Flex>
                  <Heading as="h4" variant="base" mb={pxToRem(12)}>
                    {dimension?.attributes?.title}
                  </Heading>
                  <Text variant="regular">
                    {dimension?.attributes?.description}
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
