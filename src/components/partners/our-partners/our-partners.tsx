import undraw_agreement from '@/../public/images/illustrations/undraw_agreement.svg'
import type { IPartner } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  partner: IPartner
}

export const OurPartners = ({ partner }: Props) => {
  return (
    <Box as="section">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(178) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          gap={pxToRem(40)}
        >
          <Flex flexDir="column" flex="1">
            <Heading
              as="h2"
              variant={{ base: 'sm', lg: 'lg' }}
              mt={{ lg: pxToRem(32) }}
            >
              {partner?.title}
            </Heading>
            <Text variant="regular" maxW={pxToRem(600)}>
              {partner?.content}
            </Text>
          </Flex>
          <Flex>
            <Image
              src={undraw_agreement.src}
              alt="Handshake image"
              w={{ base: pxToRem(210), xl: pxToRem(300) }}
              h={{ base: pxToRem(140), xl: pxToRem(200) }}
              mb={pxToRem(24)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
