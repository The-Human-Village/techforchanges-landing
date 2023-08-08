import { VideoPlayer } from '@/components/utilities/video-player/video-player'
import type { ITestimonials } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const properties = {
  prevArrow: (
    <IconButton
      aria-label="Previous image"
      variant="ghost"
      icon={
        <ChevronLeftIcon color="blue.800" w={pxToRem(32)} h={pxToRem(32)} />
      }
    />
  ),
  nextArrow: (
    <IconButton
      aria-label="Next image"
      variant="ghost"
      icon={
        <ChevronRightIcon color="blue.800" w={pxToRem(32)} h={pxToRem(32)} />
      }
    />
  ),
  indicators: false,
  autoplay: true,
  infinite: true,
}

export type Props = {
  testimonials: ITestimonials
}

export const Testimonials = ({ testimonials }: Props) => {
  return (
    <Box as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(80) }}
      >
        <Flex flexDir="column">
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {testimonials?.title}
          </Heading>
          <Text variant="regular" maxW={pxToRem(700)}>
            {testimonials?.description}
          </Text>
        </Flex>
        {testimonials?.items?.length > 0 && (
          <Box as="div" className="slide-container" m="0 auto" w="100%">
            <Slide
              {...properties}
              responsive={[
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: Math.min(testimonials?.items?.length, 3),
                    slidesToScroll: Math.min(testimonials?.items?.length, 3),
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
              {testimonials.items.map((item, index) => (
                <VideoPlayer
                  src={item?.video?.data?.attributes?.url}
                  key={index}
                  width={pxToRem(344)}
                  height={pxToRem(500)}
                />
              ))}
            </Slide>
          </Box>
        )}
      </Flex>
    </Box>
  )
}
