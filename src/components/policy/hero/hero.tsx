import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading } from '@chakra-ui/react'

export type Props = {
  title: string
}

export const Hero = ({ title }) => {
  return (
    <Box as="section" bg="white.100">
      <Flex
        maxW={pxToRem(1440)}
        m="0 auto"
        alignItems={{ base: 'center', md: 'flex-start' }}
        flexDir={{ base: 'column', lg: 'row' }}
        px={{ base: pxToRem(24), lg: pxToRem(220) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }} mb="0 !important">
          {title}
        </Heading>
      </Flex>
    </Box>
  )
}
