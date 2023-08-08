import phoneMockup from '@/../public/images/need-help/hero/phone-mockup.png'
import type { IApp } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  app: IApp
}

export const Hero = ({ app }: Props) => {
  return (
    <Box as="section" bg="blue.800">
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        pt={{ base: pxToRem(40), lg: pxToRem(68) }}
        gap={pxToRem(40)}
      >
        <Flex flexDir="column" flex="1">
          <Heading
            as="h2"
            variant={{ base: 'sm', lg: 'lg' }}
            color="white !important"
            mt={{ lg: pxToRem(32) }}
          >
            {app?.title}
          </Heading>
          <Text
            color="white"
            variant="regular"
            maxW={{ base: 'auto', lg: pxToRem(532) }}
          >
            {app?.description}
          </Text>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <Image
            src={phoneMockup.src}
            w={{ base: pxToRem(180), lg: pxToRem(289) }}
            alt="Thrive app image"
          />
        </Flex>
      </Flex>
    </Box>
  )
}
