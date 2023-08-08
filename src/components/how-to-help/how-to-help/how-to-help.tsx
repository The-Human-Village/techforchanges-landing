import undraw_appreciation from '@/../public/images/illustrations/undraw_appreciation.svg'
import type { IHowToHelp } from '@/types'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  howToHelp: IHowToHelp
}

export const HowToHelp = ({ howToHelp }: Props) => {
  return (
    <Box as="section">
      <Flex
        maxW={pxToRem(1440)}
        m="0 auto"
        alignItems={{ base: 'center', md: 'flex-start' }}
        flexDir={{ base: 'column', lg: 'row' }}
        px={{ base: pxToRem(24), lg: pxToRem(220) }}
        py={{ base: pxToRem(40), lg: pxToRem(60) }}
        gap={{ base: pxToRem(24), lg: pxToRem(40) }}
      >
        <Flex flexDir="column" flex="1">
          <Heading
            as="h2"
            variant={{ base: 'sm', lg: 'lg' }}
            mt={{ lg: pxToRem(78) }}
            mb={{ base: pxToRem(12), lg: pxToRem(16) }}
          >
            {howToHelp?.title}
          </Heading>
          <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(600) }}>
            {howToHelp?.description}
          </Text>
        </Flex>
        <Flex w={{ base: 'full', lg: 'auto' }} justifyContent="center">
          <Image
            src={undraw_appreciation.src}
            alt="Women holding heart"
            w={{ base: pxToRem(188), lg: pxToRem(300) }}
            h={{ base: pxToRem(160), lg: pxToRem(224) }}
            mb={pxToRem(24)}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
