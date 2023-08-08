import img1 from '@/../public/images/need-help/who-is-it-for/img1.png'
import img2 from '@/../public/images/need-help/who-is-it-for/img2.png'
import { ArticleCard } from '@/components/i-need-help/who-is-it-for/article-card/article-card'
import { Case, Medicine } from '@/components/utilities/icon/icon'
import type { IForWho } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export type Props = {
  forWho: IForWho
}

export const WhoIsItFor = ({ forWho }: Props) => {
  return (
    <Box as="section">
      <Flex
        flexDir="column"
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(130) }}
        py={{ base: pxToRem(40), lg: pxToRem(130) }}
        gap={{ base: pxToRem(24), lg: pxToRem(96) }}
      >
        <Flex
          flexDir={{ base: 'column', xl: 'row-reverse' }}
          gap={{ base: pxToRem(24), lg: pxToRem(60), xl: pxToRem(100) }}
        >
          <Flex flex="1" flexDir="column" mt={{ base: 0, xl: pxToRem(36) }}>
            <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
              {forWho?.title}
            </Heading>
            <Text variant="regular" maxW={{ base: 'auto', lg: pxToRem(532) }}>
              {forWho?.description}
            </Text>
          </Flex>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            gap={{ base: pxToRem(16), md: pxToRem(32), xl: pxToRem(40) }}
          >
            <Flex
              alignItems="start"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
            >
              <ArticleCard
                imageSrc={img1.src}
                date="12.01.2023"
                title="Medical Insurance (for Ukranians and returning residents)"
                content="The Ministry of Welfare and Social Affairs provides free health insurance to Ukrainian..."
                badge={
                  <Flex
                    bg="blue.50"
                    borderRadius={pxToRem(4)}
                    py={pxToRem(3)}
                    px={pxToRem(7)}
                    justifyContent="center"
                    alignItems="center"
                    gap={pxToRem(6)}
                  >
                    <Medicine
                      color="blue.800"
                      w={pxToRem(12)}
                      h={pxToRem(16)}
                    />
                    <Text
                      color="blue.800"
                      fontSize={pxToRem(12)}
                      lineHeight={pxToRem(16)}
                    >
                      Healthcare
                    </Text>
                  </Flex>
                }
              />
            </Flex>
            <Flex
              alignItems="end"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              mt={{ base: 0, xl: pxToRem(109) }}
            >
              <ArticleCard
                imageSrc={img2.src}
                date="12.01.2023"
                title="New jobs available"
                content="Find yourself a suitable employment opportunities, matching your skills and experience."
                badge={
                  <Flex
                    bg="blue.50"
                    borderRadius={pxToRem(4)}
                    py={pxToRem(3)}
                    px={pxToRem(7)}
                    justifyContent="center"
                    alignItems="center"
                    gap={pxToRem(6)}
                  >
                    <Case color="blue.800" w={pxToRem(12)} h={pxToRem(11)} />
                    <Text
                      color="blue.800"
                      fontSize={pxToRem(12)}
                      lineHeight={pxToRem(16)}
                    >
                      Work
                    </Text>
                  </Flex>
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
