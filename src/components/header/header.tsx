import logo from '@/../public/logo.svg'
import { useAvailableLocales } from '@/api/hooks/useAvailableLocales'
import { useFooter } from '@/api/hooks/useFooter'
import { useLanding } from '@/api/hooks/useLanding'
import { LocaleSelect } from '@/components/header/locale-select/locale-select'
import { Navigation } from '@/components/home/navigation/navigation'
import { Linkedin, Youtube } from '@/components/utilities/icon/icon'
import type { IFooter, ILanding, Option } from '@/types/index'
import { HUMAN_VILLAGE_APP_URL, RoutePath } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { components } from 'react-select'

const CustomMenu = (props) => {
  return (
    <Flex
      position="fixed"
      borderRadius={0}
      bottom={0}
      left={0}
      right={0}
      bg="white"
      flexDir="column"
      px={pxToRem(16)}
      py={pxToRem(12)}
    >
      <Flex flex="1">
        <Flex justifyContent="center" flex="1">
          <Text color="gray.800" size="lg" fontWeight={800}>
            Select language
          </Text>
        </Flex>
        <CloseButton />
      </Flex>
      <components.Menu {...props} />
    </Flex>
  )
}

const OptionLabel = (props) => {
  const { data } = props

  return (
    <components.Option {...props}>
      <Flex alignItems="center" gap={pxToRem(8)}>
        <Image
          src={data?.flag?.url}
          alt={data?.flag?.name}
          w={pxToRem(24)}
          h={pxToRem(16)}
        />
        <Text>{data.label}</Text>
      </Flex>
    </components.Option>
  )
}

const ShortSingleValue = (props) => {
  return (
    <components.SingleValue {...props}>
      {props.data?.value?.toUpperCase()}
    </components.SingleValue>
  )
}

export const Header = () => {
  const { data: locales } = useAvailableLocales()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const { locale, pathname, asPath, query } = router
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const { data: footerData }: { data: IFooter } = useFooter()
  const { data: landingData }: { data: ILanding } = useLanding()

  const localeOptions = useMemo<Option[]>(() => {
    return locales?.map(({ code, name, flag }) => ({
      value: code,
      label: name,
      flag: flag,
    })) as Option[]
  }, [locales])

  const handleChange = (option) => {
    router.push({ pathname, query }, asPath, { locale: option })
  }

  const desktopContent = (
    <>
      <Box
        as="header"
        w="full"
        position="sticky"
        top={0}
        zIndex="20"
        transition="all 0.2s ease-out"
      >
        <Box
          py={pxToRem(20)}
          px={{ sm: pxToRem(16), xl: pxToRem(60) }}
          bg="blue.800"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            maxW={pxToRem(1440)}
            m="0 auto"
          >
            <Box mr={pxToRem(16)}>
              <LocaleSelect
                aria-label="Select language"
                options={localeOptions}
                isSearchable={false}
                value={localeOptions?.find((option) => option.value === locale)}
                onChange={(selectedOption: Option) =>
                  handleChange(selectedOption.value)
                }
                components={{
                  Option: OptionLabel,
                  SingleValue: ShortSingleValue,
                }}
              />
            </Box>
            <Flex alignItems="center" ml={{ base: 0, lg: pxToRem(200) }}>
              <Link variant="ghost" as={NextLink} href={RoutePath.HOME}>
                <Image src={logo.src} alt="The Human Village" />
              </Link>
            </Flex>
            <Flex gap={pxToRem(12)}>
              <Link
                variant="btn-primary"
                as={NextLink}
                href={RoutePath.HOW_TO_HELP}
                borderRadius={pxToRem(6)}
                py={pxToRem(8)}
                px={pxToRem(16)}
                fontSize={pxToRem(16)}
                lineHeight={pxToRem(24)}
                minW="auto"
                border="1px solid white"
              >
                {landingData?.want_help_button_title}
              </Link>
              <Link
                variant="btn-secondary"
                as={NextLink}
                href={HUMAN_VILLAGE_APP_URL}
              >
                {landingData?.need_help_button_title}
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Navigation navigationItems={landingData?.navigation} />
      </Box>
    </>
  )

  const mobileContent = (
    <Box
      as="header"
      w="full"
      position="fixed"
      top={0}
      zIndex="20"
      bg="blue.800"
      p={pxToRem(16)}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box mr={4}>
          <Link variant="ghost" as={NextLink} href={RoutePath.HOME}>
            <Image src={logo.src} alt="The Human Village" w={pxToRem(194)} />
          </Link>
        </Box>
        <Flex alignItems="center">
          <LocaleSelect
            aria-label="Select language"
            options={localeOptions}
            isSearchable={false}
            value={localeOptions?.find((option) => option.value === locale)}
            onChange={(selectedOption: Option) =>
              handleChange(selectedOption.value)
            }
            components={{
              Menu: CustomMenu,
              Option: OptionLabel,
              SingleValue: ShortSingleValue,
            }}
          />

          <IconButton
            icon={<HamburgerIcon w={pxToRem(24)} h={pxToRem(24)} />}
            variant="ghost"
            aria-label="Open menu"
            color="white"
            onClick={onOpen}
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background="white" overflowY="auto">
          <DrawerCloseButton
            color="white"
            top={pxToRem(12)}
            w={pxToRem(24)}
            h={pxToRem(24)}
          />
          <DrawerHeader
            bg="blue.800"
            color="white"
            py={pxToRem(18)}
            px={pxToRem(16)}
            textTransform="uppercase"
          >
            <Link variant="ghost" as={NextLink} href={RoutePath.HOME}>
              <Image src={logo.src} alt="The Human Village" w={pxToRem(194)} />
            </Link>
          </DrawerHeader>

          <DrawerBody px={pxToRem(16)} pb={pxToRem(40)} pt={pxToRem(28)}>
            <Accordion
              allowMultiple
              display="flex"
              flexDir="column"
              gap={pxToRem(16)}
            >
              <AccordionItem>
                <AccordionButton py="1">
                  <Text flex="1" textAlign="left">
                    The Human Village
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  display="flex"
                  flexDir="column"
                  gap={pxToRem(10)}
                  pl={`0 ${pxToRem(20)} 0 0`}
                >
                  {landingData?.navigation?.map((item, idx) => (
                    <Link key={idx} href={`#${item.url}`}>
                      {item.title}
                    </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton py={pxToRem(4)}>
                  <Text flex="1" textAlign="left">
                    {footerData?.attributes?.thrive_app_label}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  display="flex"
                  flexDir="column"
                  gap={pxToRem(10)}
                  pl={`0 ${pxToRem(20)} 0 0`}
                >
                  <Link as={NextLink} href={HUMAN_VILLAGE_APP_URL}>
                    {footerData?.attributes?.about_label}
                  </Link>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton py="1">
                  <Text flex="1" textAlign="left">
                    {footerData?.attributes?.our_content_label}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  display="flex"
                  flexDir="column"
                  gap={pxToRem(10)}
                  pl={`0 ${pxToRem(20)} 0 0`}
                >
                  <Link
                    href={`tel:${footerData?.attributes?.phone_number_label}`}
                  >
                    {footerData?.attributes?.phone_number_label}
                  </Link>
                  <Link href={`mailto:${footerData?.attributes?.email_labeel}`}>
                    {footerData?.attributes?.email_labeel}
                  </Link>
                  <Flex gap={pxToRem(16)}>
                    <Link isExternal href={footerData?.attributes?.youtube_url}>
                      <Youtube w={6} h={6} color="blue.800" />
                    </Link>
                    <Link
                      isExternal
                      href={footerData?.attributes?.linked_in_url}
                    >
                      <Linkedin w={6} h={6} color="blue.800" />
                    </Link>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDir="column"
            gap={pxToRem(12)}
            px={pxToRem(16)}
            py={pxToRem(24)}
          >
            <Link
              variant="btn-primary"
              w="full"
              as={NextLink}
              href={HUMAN_VILLAGE_APP_URL}
              py={pxToRem(8)}
              px={pxToRem(16)}
            >
              {landingData?.need_help_button_title}
            </Link>
            <Link
              variant="btn-secondary"
              as={NextLink}
              w="full"
              href={RoutePath.HOW_TO_HELP}
              borderRadius={pxToRem(6)}
              fontSize={pxToRem(16)}
              lineHeight={pxToRem(24)}
              minW="auto"
              border="1px solid"
              borderColor="blue.800"
              textAlign="center"
            >
              {landingData?.want_help_button_title}
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )

  return isMobile ? mobileContent : desktopContent
}
