import type { IHowTo } from '@/types/index'
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
  howTo: IHowTo
}

export const AppIntroduction = ({ howTo }: Props) => {
  return (
    <Box as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(60) }}
      >
        <Flex flexDir="column">
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {howTo?.title}
          </Heading>
          <Text variant="regular" maxW={pxToRem(700)}>
            {howTo?.description}
          </Text>
        </Flex>
        <Grid
          templateColumns="repeat(auto-fill, minmax(327px, 1fr))"
          gap={pxToRem(40)}
        >
          {howTo?.steps.map((item, index) => (
            <GridItem key={index}>
              <Card h="full" p={pxToRem(40)}>
                <CardBody
                  flexDir="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Text
                    fontSize={pxToRem(18)}
                    lineHeight={pxToRem(28)}
                    color="blue.400"
                    fontWeight={500}
                    mb={pxToRem(4)}
                  >
                    STEP {item.order}
                  </Text>
                  <Heading as="h3" variant="base" mb={pxToRem(16)}>
                    {item.title}
                  </Heading>
                  <Text color="gray.800" mb={pxToRem(40)}>
                    {item.description}
                  </Text>
                  <Flex alignItems="center" justifyContent="center" w="full">
                    <Image
                      src={item?.picture?.data?.attributes?.url}
                      alt={item.title}
                      w={pxToRem(200)}
                      h={pxToRem(180)}
                    />
                  </Flex>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
