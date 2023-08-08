import type { IStory } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

export type Props = {
  story: IStory
}

export const Story = ({ story }: Props) => {
  return (
    <Grid
      id={Section.Story}
      as="section"
      m="0 auto"
      maxW={pxToRem(1440)}
      px={{ base: pxToRem(24), lg: pxToRem(100) }}
      py={{ base: pxToRem(40), lg: pxToRem(100) }}
      templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
      templateRows={{ base: 'repeat(4, auto)', lg: 'repeat(2, 1fr)' }}
      gap={{ base: pxToRem(24), lg: pxToRem(62) }}
    >
      <GridItem display="flex" justifyContent="center" flexDir="column">
        <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
          {story?.title}
        </Heading>
        <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
          {story?.part1}
        </Text>
      </GridItem>
      <GridItem justifySelf="center">
        <Image
          src={story?.part1_image?.data?.attributes?.url}
          alt="Group of young volunteers packing clothes in boxes to give it to people in need"
          h={{ base: pxToRem(218), md: pxToRem(400) }}
          borderRadius={pxToRem(16)}
        />
      </GridItem>

      <GridItem rowStart={{ base: 4, lg: 2 }} justifySelf="center">
        <Image
          src={story?.part2_image?.data?.attributes?.url}
          alt="Group of young volunteers packing food in carton bags to give it to people in need"
          h={{ base: pxToRem(218), md: pxToRem(400) }}
          borderRadius={pxToRem(16)}
        />
      </GridItem>
      <GridItem
        rowStart={{ base: 3, lg: 2 }}
        display="flex"
        justifyContent="center"
        flexDir="column"
      >
        <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
          {story?.part2}
        </Text>
      </GridItem>
    </Grid>
  )
}
