import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  title: string
  description: string
  imgUrl: string
  imgAlt: string
}

export const BecomePartner = ({ title, description, imgUrl, imgAlt }) => {
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
            {title}
          </Heading>
          <Text
            fontSize={pxToRem(16)}
            lineHeight={pxToRem(24)}
            color="gray.800"
            maxW={{ base: 'auto', lg: pxToRem(600) }}
          >
            {description}
          </Text>
        </Flex>
        <Flex w={{ base: 'full', lg: 'auto' }} justifyContent="center">
          <Image
            src={imgUrl}
            alt={imgAlt}
            w={{ base: pxToRem(188), xl: pxToRem(300) }}
            h={{ base: pxToRem(160), xl: pxToRem(200) }}
            mb={pxToRem(24)}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
