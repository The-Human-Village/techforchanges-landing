import { useTranslations } from '@/api/hooks/useTranslations'
import { ArrowUpRight } from '@/components/utilities/icon/icon'
import { pxToRem } from '@/utilities/pxToRem'
import { getTranslationText } from '@/utilities/translations'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'

const UsageCard = ({ title, href }) => (
  <Link
    display="flex"
    flex="1"
    px={{ base: pxToRem(16), lg: pxToRem(24) }}
    py={{ base: pxToRem(12), lg: pxToRem(24) }}
    bg="white"
    boxShadow="0px 5px 20px rgba(13, 66, 119, 0.06)"
    borderRadius={pxToRem(12)}
    border="1px solid"
    borderColor="gray.200"
    href={`mailto:${href}`}
    cursor="pointer"
    _hover={{ bg: 'gray.100' }}
  >
    <Text
      fontSize={{ base: pxToRem(18), lg: pxToRem(24) }}
      lineHeight={{ base: pxToRem(28), lg: pxToRem(32) }}
      fontWeight={800}
      color="blue.800"
    >
      {title}
    </Text>
    <Flex flex="1" justifyContent="flex-end">
      <ArrowUpRight color="blue.800" w={pxToRem(32)} h={pxToRem(32)} />
    </Flex>
  </Link>
)

export const YouCanAlso = () => {
  const { data: translations } = useTranslations()

  const usageItems = [
    {
      title: getTranslationText(translations, 'landing-donate'),
      href: getTranslationText(translations, 'donate-button-email'),
    },
    {
      title: getTranslationText(translations, 'landing-join-our-team'),
      href: getTranslationText(translations, 'joinus-button-email'),
    },
    {
      title: getTranslationText(translations, 'landing-share-your-initiative'),
      href: getTranslationText(translations, 'share-button-email'),
    },
  ]

  return (
    <Box as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={pxToRem(36)}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {getTranslationText(translations, 'landing-you-can-also')}
        </Heading>
        <Flex flexDir={{ base: 'column', lg: 'row' }} gap={pxToRem(24)}>
          {usageItems.map((item, index) => (
            <UsageCard title={item.title} key={index} href={item.href} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
