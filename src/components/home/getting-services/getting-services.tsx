import { Timeline } from '@/components/home/getting-services/timeline/timeline'
import type { IVision } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading } from '@chakra-ui/react'

export type Props = {
  vision: IVision
}

export const GettingServices = ({ vision }: Props) => {
  return (
    <Box id={Section.GettingServices} as="section" bg="blue.50">
      <Flex
        m="0 auto"
        maxW={pxToRem(1440)}
        flexDir="column"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {vision?.title}
        </Heading>
        <Timeline items={vision?.items} />
      </Flex>
    </Box>
  )
}
