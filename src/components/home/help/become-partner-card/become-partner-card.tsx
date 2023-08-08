import undraw_agreement from '@/../public/images/illustrations/undraw_agreement_with_doc.svg'
import type { IApp } from '@/types/index'
import { RoutePath } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export type Props = {
  app: IApp
}

export const BecomePartnerCard = ({ app }: Props) => {
  return (
    <Flex
      flexDir="column"
      bg="white.100"
      p={{
        base: pxToRem(40),
        lg: `${pxToRem(40)} ${pxToRem(80)}`,
      }}
      alignItems="center"
      justifyContent="center"
      borderRadius={pxToRem(16)}
      boxShadow="0px 5px 20px rgba(13, 66, 119, 0.06)"
    >
      <Image
        src={undraw_agreement.src}
        alt="People making agreement"
        w={pxToRem(210)}
        h={pxToRem(140)}
        mt={pxToRem(40)}
        mb={pxToRem(24)}
      />
      <Heading as="h2" variant="base" textAlign="center">
        {app?.want_help?.title}
      </Heading>
      <Text
        variant="regular"
        mb={{ base: pxToRem(24), lg: pxToRem(40) }}
        textAlign="center"
      >
        {app?.want_help?.content}
      </Text>
      <Flex w="full" flexDir={{ base: 'column', xl: 'row' }} gap={pxToRem(10)}>
        <Link
          variant="btn-primary"
          as={NextLink}
          href={RoutePath.BECOME_PARTNER}
          flex="1"
        >
          {app?.want_help?.go_to_button_title}
        </Link>
        <Link
          as={NextLink}
          href={RoutePath.HOW_TO_HELP}
          variant="blue"
          size="lg"
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {app?.want_help?.read_more_button_title}
        </Link>
      </Flex>
    </Flex>
  )
}
