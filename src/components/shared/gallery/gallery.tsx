import type { IGallery } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, IconButton } from '@chakra-ui/react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const properties = {
  prevArrow: (
    <IconButton
      aria-label="Previous image"
      variant="circle"
      icon={
        <ChevronLeftIcon color="blue.800" w={pxToRem(32)} h={pxToRem(32)} />
      }
    />
  ),
  nextArrow: (
    <IconButton
      aria-label="Next image"
      variant="circle"
      icon={
        <ChevronRightIcon color="blue.800" w={pxToRem(32)} h={pxToRem(32)} />
      }
    />
  ),
}

export type Props = {
  gallery: IGallery
}

export const Gallery = ({ gallery }: Props) => {
  return (
    <>
      <Box
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        pt={{ base: pxToRem(40), lg: pxToRem(100) }}
      >
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }} mb="0px !important">
          {gallery?.title}
        </Heading>
      </Box>
      <Box
        as="div"
        className="slide-container slide-container-gallery"
        py={{ base: pxToRem(24), lg: pxToRem(80) }}
        m="0 auto"
        w="100%"
      >
        <Slide
          {...properties}
          responsive={[
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: Math.min(gallery?.items?.length, 3),
                slidesToScroll: Math.min(gallery?.items?.length, 3),
              },
            },
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: Math.min(gallery?.items?.length, 2),
                slidesToScroll: Math.min(gallery?.items?.length, 2),
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {gallery?.items?.map((image, index) => (
            <Box
              key={index}
              w={{ base: pxToRem(279), lg: pxToRem(600) }}
              h={{ base: pxToRem(186), lg: pxToRem(400) }}
              bgImage={`url(${image?.media?.data?.attributes?.url})`}
              bgSize="cover"
              bgPosition="center"
              position="relative"
              borderRadius={pxToRem(16)}
            ></Box>
          ))}
        </Slide>
      </Box>
    </>
  )
}
