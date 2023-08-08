import hero from '@/../public/images/hero.png'
import { useLanding } from '@/api/hooks/useLanding'
import type { ILanding } from '@/types'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading } from '@chakra-ui/react'

export const Hero = () => {
  const { data: landingData }: { data: ILanding } = useLanding()

  return (
    <Flex
      position="relative"
      bgImage={hero.src}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        zIndex="2"
        pos="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        bg="rgba(0, 0, 0, 0.28)"
      ></Box>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        zIndex="3"
        p={pxToRem(16)}
      >
        <Heading
          as="h2"
          color="white"
          fontSize={{ base: pxToRem(32), lg: pxToRem(48) }}
          lineHeight={{ base: pxToRem(40), lg: pxToRem(48) }}
          fontWeight={800}
          textShadow="0px 6px 30px rgba(0, 0, 0, 0.5)"
          mb={pxToRem(16)}
          textAlign="center"
        >
          {landingData?.hero_title}
        </Heading>
        <Heading
          as="h4"
          color="white"
          fontSize={{ base: pxToRem(18), lg: pxToRem(30) }}
          lineHeight={{ base: pxToRem(28), lg: pxToRem(36) }}
          fontWeight={500}
          textShadow="0px 6px 30px rgba(0, 0, 0, 0.5)"
          textAlign="center"
        >
          {landingData?.hero_subtitle}
        </Heading>
      </Flex>
    </Flex>
  )
}
