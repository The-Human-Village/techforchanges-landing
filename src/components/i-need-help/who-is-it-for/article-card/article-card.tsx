import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Text } from '@chakra-ui/react'

export type Props = {
  imageSrc: string
  title: string
  date: string
  content: string
  badge: React.ReactNode
}

export const ArticleCard = ({
  imageSrc,
  title,
  date,
  content,
  badge,
}: Props) => {
  return (
    <Flex
      flexDir="column"
      maxW={{ base: '100%', lg: pxToRem(292) }}
      borderRadius={pxToRem(7)}
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0px 6px 24px rgba(0, 0, 0, 0.05);"
    >
      <Box
        h={{ base: pxToRem(125), lg: pxToRem(109) }}
        w={{ base: '100%', lg: pxToRem(290) }}
        bgImage={`url(${imageSrc})`}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        borderTopRadius={pxToRem(7)}
      >
        <Box pos="absolute" top={pxToRem(13)} right={pxToRem(10)}>
          {badge}
        </Box>
      </Box>
      <Flex
        flexDir="column"
        p={`${pxToRem(13)} ${pxToRem(13)} ${pxToRem(16)}`}
        gap={pxToRem(4)}
      >
        <Text color="gray.500" fontSize={pxToRem(10)} lineHeight={pxToRem(13)}>
          {date}
        </Text>
        <Text color="gray.900" fontSize={pxToRem(13)} lineHeight={pxToRem(20)}>
          {title}
        </Text>
        <Text color="gray.700" fontSize={pxToRem(12)} lineHeight={pxToRem(17)}>
          {content}
        </Text>
      </Flex>
    </Flex>
  )
}
