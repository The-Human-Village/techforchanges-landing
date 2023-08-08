import { PartnerCard } from '@/components/home/partners/partner-card/partner-card'
import type { IPartner } from '@/types/index'
import { RoutePath, Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export type Props = {
  partner: IPartner
}

export const Partners = ({ partner }: Props) => {
  return (
    <>
      <Flex
        id={Section.Partners}
        as="section"
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        pt={{ base: pxToRem(40), lg: pxToRem(100) }}
        pb={{ base: pxToRem(24), lg: pxToRem(56) }}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {partner?.title}
        </Heading>
        <Text variant="regular" mb={pxToRem(24)}>
          {partner?.content}
        </Text>
      </Flex>
      <Box
        as="div"
        className="slide-container slide-container-partners"
        pb={{ base: pxToRem(39), lg: pxToRem(66) }}
        w="100%"
      >
        <Slide
          indicators={false}
          arrows={false}
          autoplay={true}
          infinite={true}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: Math.min(partner?.partners.length, 4),
                slidesToScroll: Math.min(partner?.partners.length, 4),
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: Math.min(partner?.partners.length, 2),
                slidesToScroll: Math.min(partner?.partners.length, 2),
              },
            },
          ]}
        >
          {partner?.partners.map((partner, index) => (
            <Flex
              justifyContent="center"
              alignItems="center"
              h={pxToRem(204)}
              w={pxToRem(204)}
              key={index}
            >
              <PartnerCard
                url={partner?.logo?.data?.attributes?.url}
                name={partner?.name}
              />
            </Flex>
          ))}
        </Slide>
      </Box>
      <Flex
        maxW={pxToRem(1440)}
        m="0 auto"
        alignItems="center"
        justifyContent="center"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        pb={{ base: pxToRem(48), lg: pxToRem(110) }}
      >
        <Link as={NextLink} href={RoutePath.PARTNERS} variant="blue">
          {partner.see_more_link_label}
        </Link>
      </Flex>
    </>
  )
}
