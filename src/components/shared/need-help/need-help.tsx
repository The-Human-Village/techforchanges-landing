import { NeedHelpCard } from '@/components/home/help/need-help-card/need-help-card'
import type { IApp } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex } from '@chakra-ui/react'

export type Props = {
  app: IApp
}

export const NeedHelp = ({ app }: Props) => {
  return (
    <Box as="section" bg="blue.50">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(40) }}
      >
        <NeedHelpCard app={app} />
      </Flex>
    </Box>
  )
}
