import { BecomePartnerCard } from '@/components/home/help/become-partner-card/become-partner-card'
import { BecomeVolunteerCard } from '@/components/home/help/become-volunteer-card/become-volunteer-card'
import { NeedHelpCard } from '@/components/home/help/need-help-card/need-help-card'
import type { IApp } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex } from '@chakra-ui/react'

export type Props = {
  app: IApp
}

export const Help = ({ app }: Props) => {
  return (
    <Box id={Section.Help} as="section" bg="blue.50">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(40) }}
      >
        <NeedHelpCard app={app} />
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: pxToRem(24), lg: pxToRem(40) }}
        >
          <BecomePartnerCard app={app} />
          <BecomeVolunteerCard app={app} />
        </Flex>
      </Flex>
    </Box>
  )
}
