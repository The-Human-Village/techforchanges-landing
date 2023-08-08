import { ImageCard } from '@/components/home/meet-team/image-card/image-card'
import { StatisticsCard } from '@/components/home/meet-team/statistics-card/statistics-card'
import type { ITeam } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

export type Props = {
  team: ITeam
}

export const MeetTeam = ({ team }: Props) => {
  return (
    <Box id={Section.Team} as="section" bg="white.100">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(96) }}
      >
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: pxToRem(24), lg: pxToRem(60), xl: pxToRem(100) }}
        >
          <Flex flex="1" flexDir="column">
            <Heading
              as="h2"
              variant={{ base: 'sm', lg: 'lg' }}
              maxW={pxToRem(400)}
            >
              {team?.title}
            </Heading>
            <Text variant="regular">{team.description}</Text>
          </Flex>
          <Flex gap={{ base: pxToRem(16), md: pxToRem(32), xl: pxToRem(67) }}>
            <Flex alignItems="end" flex="1">
              <StatisticsCard
                number={team?.number_employees}
                title={team?.employees_label}
              />
            </Flex>
            <Flex alignItems="start" flex="1">
              <StatisticsCard
                number={team?.number_volunteers}
                title={team?.volunteers_label}
              />
            </Flex>
          </Flex>
        </Flex>
        <Grid
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
          gap={pxToRem(40)}
        >
          {team?.members?.map((member, index) => (
            <GridItem key={index}>
              <ImageCard member={member} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}
