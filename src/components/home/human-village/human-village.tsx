import thriveApp from '@/../public/images/thrive-app/app.png'
import type { IApp } from '@/types/index'
import { HUMAN_VILLAGE_APP_URL, RoutePath, Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export type Props = {
  app: IApp
}

export const HumanVillage = ({ app }: Props) => {
  return (
    <Grid
      id={Section.HumanVillage}
      as="section"
      maxW={pxToRem(1440)}
      m="0 auto"
      px={{ base: pxToRem(24), lg: pxToRem(100) }}
      py={{ base: pxToRem(40), lg: pxToRem(100) }}
      templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
      templateRows={{ base: 'repeat(2, auto)', lg: 'repeat(1, 1fr)' }}
      gap={{ base: pxToRem(24), lg: pxToRem(62) }}
    >
      <GridItem display="flex" justifyContent="center" flexDir="column">
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {app?.title}
        </Heading>
        <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
          {app?.description}
        </Text>
        <Flex
          mt={{ base: pxToRem(24), lg: pxToRem(32) }}
          gap={pxToRem(10)}
          flexDir={{ base: 'column', xl: 'row' }}
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
      </GridItem>
      <GridItem justifySelf="center">
        <Image
          src={thriveApp.src}
          h={{ base: pxToRem(218), md: pxToRem(400) }}
          alt="Thrive app"
        />
      </GridItem>
    </Grid>
  )
}
