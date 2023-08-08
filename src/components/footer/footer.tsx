import logo from '@/../public/logo.svg'
import { useFooter } from '@/api/hooks/useFooter'
import { useLanding } from '@/api/hooks/useLanding'
import { Linkedin, Youtube } from '@/components/utilities/icon/icon'
import type { IFooter, ILanding } from '@/types/index'
import { HUMAN_VILLAGE_APP_URL, RoutePath } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Footer = () => {
  const { data: footerData }: { data: IFooter } = useFooter()
  const { data: landingData }: { data: ILanding } = useLanding()
  const router = useRouter()

  return (
    <Box as="footer" bg="blue.800">
      <Flex
        m="0 auto"
        maxW={pxToRem(1440)}
        flexDir="column"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Grid
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr 1fr',
            lg: `${pxToRem(400)} 1fr 1fr 1fr`,
            xl: `${pxToRem(597)} 1fr 1fr 1fr`,
          }}
          templateRows={{
            base: 'repeat(4, auto)',
            md: 'repeat(2, auto)',
            lg: '1fr',
          }}
          gap={pxToRem(40)}
        >
          <GridItem colSpan={{ md: 3, lg: 1 }}>
            <Image
              src={logo.src}
              alt="The Human Village"
              w={{ base: pxToRem(192), lg: pxToRem(324) }}
            />
            <Text
              fontSize="xs"
              color="gray.300"
              lineHeight="1rem"
              mt={pxToRem(16)}
              mb={{ base: pxToRem(40), lg: pxToRem(55) }}
              maxW={pxToRem(300)}
            >
              {footerData?.attributes?.human_village_desc_label}
            </Text>
            <Heading
              fontSize="md"
              lineHeight={pxToRem(24)}
              textTransform="uppercase"
              mb={pxToRem(16)}
              color="white"
            >
              {footerData?.attributes?.our_content_label}
            </Heading>
            <Flex flexDir="column" gap={pxToRem(16)}>
              <Link
                variant="light"
                href={`tel:${footerData?.attributes?.phone_number_label}`}
              >
                {footerData?.attributes?.phone_number_label}
              </Link>
              <Link
                variant="light"
                href={`mailto:${footerData?.attributes?.email_labeel}`}
              >
                {footerData?.attributes?.email_labeel}
              </Link>
              <Flex gap={pxToRem(16)}>
                <Link isExternal href={footerData?.attributes?.youtube_url}>
                  <Youtube w={6} h={6} color="white" />
                </Link>
                <Link isExternal href={footerData?.attributes?.linked_in_url}>
                  <Linkedin w={6} h={6} color="white" />
                </Link>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem justifySelf={{ lg: 'end' }}>
            <Heading
              fontSize="md"
              lineHeight={pxToRem(24)}
              textTransform="uppercase"
              mb={pxToRem(16)}
              color="white"
            >
              {footerData?.attributes?.about_us_label}
            </Heading>
            <Flex flexDir="column" gap={pxToRem(16)}>
              {landingData?.navigation.map((item, idx) => (
                <Link
                  as={NextLink}
                  key={idx}
                  variant="light"
                  href={`${RoutePath.HOME}#${item.url}`}
                >
                  {item.title}
                </Link>
              ))}
            </Flex>
          </GridItem>
          <GridItem>
            <Heading
              fontSize="md"
              lineHeight={pxToRem(24)}
              textTransform="uppercase"
              mb={pxToRem(16)}
              color="white"
            >
              {footerData?.attributes?.join_us_label}
            </Heading>
            <Flex flexDir="column" gap={pxToRem(16)}>
              <Link as={NextLink} variant="light" href={RoutePath.HOW_TO_HELP}>
                {footerData?.attributes?.how_to_help_label}
              </Link>
              <Link
                as={NextLink}
                variant="light"
                href={RoutePath.BECOME_PARTNER}
              >
                {footerData?.attributes?.become_partner_label}
              </Link>
              <Link
                as={NextLink}
                variant="light"
                href={RoutePath.BECOME_VOLUNTEER}
              >
                {footerData?.attributes?.become_volunteer_label}
              </Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Heading
              fontSize="md"
              lineHeight={pxToRem(24)}
              textTransform="uppercase"
              mb={pxToRem(16)}
              color="white"
            >
              {footerData?.attributes?.thrive_app_label}
            </Heading>
            <Flex flexDir="column" gap={pxToRem(16)}>
              <Link variant="light" as={NextLink} href={HUMAN_VILLAGE_APP_URL}>
                {footerData?.attributes?.about_label}
              </Link>
            </Flex>
          </GridItem>
        </Grid>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          w="full"
          mt={{ base: pxToRem(60), md: pxToRem(80) }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <Text
            color="gray.300"
            size="sm"
            flex="1"
            mb={{ base: pxToRem(8), lg: 0 }}
          >
            {footerData?.attributes?.copy_rights_label}
          </Text>
          <Flex
            gap={pxToRem(8)}
            alignItems="center"
            flex="1"
            justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
          >
            <Link
              as={NextLink}
              variant="light"
              size="sm"
              href={RoutePath.PRIVACY_POLICY}
            >
              {footerData?.attributes?.privacy_policy_label}
            </Link>
            <Box height={pxToRem(12)}>
              <Divider orientation="vertical" borderColor="gray.400" />
            </Box>
            <Link
              as={NextLink}
              variant="light"
              size="sm"
              href={RoutePath.TERMS_OF_USE}
            >
              {footerData?.attributes?.terms_of_use_label}
            </Link>
            <Box height={pxToRem(12)}>
              <Divider orientation="vertical" borderColor="gray.400" />
            </Box>
            <Link
              as={NextLink}
              variant="light"
              size="sm"
              href={RoutePath.COOKIE_POLICY}
            >
              {footerData?.attributes?.cookie_policy_label}
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
