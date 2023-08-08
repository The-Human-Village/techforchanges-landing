import undraw_mobile_app from '@/../public/images/illustrations/undraw_mobile_app.svg'
import type { IApp } from '@/types/index'
import { HUMAN_VILLAGE_APP_URL, RoutePath } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export type Props = {
  app: IApp
}

export const NeedHelpCard = ({ app }: Props) => {
  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row-reverse' }}
      bg="white.100"
      p={{
        base: pxToRem(40),
        lg: `${pxToRem(52)} ${pxToRem(124)} ${pxToRem(52)} ${pxToRem(80)}`,
      }}
      borderRadius={pxToRem(16)}
      boxShadow="0px 5px 20px rgba(13, 66, 119, 0.06)"
      alignItems={{ base: 'center', lg: 'flex-start' }}
    >
      <Flex>
        <Image
          src={undraw_mobile_app.src}
          alt="A woman looking at app"
          w={{ base: pxToRem(188), xl: pxToRem(332) }}
          h={{ base: pxToRem(160), xl: pxToRem(248) }}
          mb={pxToRem(24)}
        />
      </Flex>
      <Flex flexDir="column" flex="1">
        <Heading
          as="h2"
          variant={{ base: 'sm', lg: 'lg' }}
          mt={{ base: 0, lg: pxToRem(28) }}
        >
          {app?.need_help?.title}
        </Heading>
        <Text
          variant="regular"
          maxW={pxToRem(600)}
          mb={{ base: pxToRem(24), lg: pxToRem(40) }}
        >
          {app?.need_help?.content}
        </Text>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap={pxToRem(10)}
          alignItems="center"
        >
          <Link
            variant="btn-primary"
            as={NextLink}
            href={HUMAN_VILLAGE_APP_URL}
            w={{ base: 'full', lg: pxToRem(215) }}
          >
            {app?.need_help?.go_to_button_title}
          </Link>
          <Link
            as={NextLink}
            href={RoutePath.I_NEED_HELP}
            w={{ base: 'full', lg: pxToRem(215) }}
            textAlign="center"
            variant="blue"
            size="lg"
          >
            {app?.need_help?.read_more_button_title}
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
