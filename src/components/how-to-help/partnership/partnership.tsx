import { useTranslations } from '@/api/hooks/useTranslations'
import type { IPartnership } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { getTranslationText } from '@/utilities/translations'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export type Props = {
  partnership: IPartnership
  bg?: string
  joinUsUrl: string
}

export const properties = {
  prevArrow: (
    <IconButton
      aria-label="Previous image"
      variant="ghost"
      icon={
        <ChevronLeftIcon color="blue.800" w={pxToRem(40)} h={pxToRem(40)} />
      }
    />
  ),
  nextArrow: (
    <IconButton
      aria-label="Next image"
      variant="ghost"
      icon={
        <ChevronRightIcon color="blue.800" w={pxToRem(40)} h={pxToRem(40)} />
      }
    />
  ),
  indicators: false,
  autoplay: true,
  infinite: true,
}

export const Partnership = ({
  partnership,
  bg = 'white',
  joinUsUrl,
}: Props) => {
  const { data: translations } = useTranslations()

  return (
    <Box as="section" bg={bg}>
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Flex flexDir="column">
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {partnership?.title}
          </Heading>
          <Text variant="regular" maxW={pxToRem(700)}>
            {partnership?.description}
          </Text>
        </Flex>
        <Box
          as="div"
          className="slide-container slide-container-partnership"
          m="0 auto"
          w="100%"
          py={{ base: pxToRem(24), lg: pxToRem(56) }}
        >
          <Slide
            {...properties}
            responsive={[
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: Math.min(partnership?.cards?.length, 3),
                  slidesToScroll: Math.min(partnership?.cards?.length, 3),
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {partnership?.cards?.map((item, index) => (
              <Card h="full" p={0} w={pxToRem(344)} key={index} m="0 auto">
                <CardBody
                  flexDir="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Box
                    key={index}
                    h={pxToRem(240)}
                    w={pxToRem(344)}
                    bgImage={`url(${item?.image?.data?.attributes?.url})`}
                    bgSize="cover"
                    bgPosition="center"
                    position="relative"
                    borderTopRadius={pxToRem(16)}
                  ></Box>
                  <Box
                    pt={pxToRem(28)}
                    pb={pxToRem(28)}
                    px={{ base: pxToRem(24), lg: pxToRem(28) }}
                  >
                    <Heading as="h4" variant="base" mb={pxToRem(8)}>
                      {item.title}
                    </Heading>
                    <Text variant="regular">{item.description}</Text>
                  </Box>
                </CardBody>
              </Card>
            ))}
          </Slide>
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <Link
            as={NextLink}
            variant="btn-primary"
            href={joinUsUrl}
            py={pxToRem(12)}
            px={pxToRem(64)}
          >
            {getTranslationText(translations, 'landing-join-us')}
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
