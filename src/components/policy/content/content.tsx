import type { IPolicy } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export type Props = {
  policy: IPolicy
}

export const Content = ({ policy }: Props) => {
  return (
    <Box as="section">
      <Flex
        maxW={pxToRem(1440)}
        m="0 auto"
        alignItems={{ base: 'center', md: 'flex-start' }}
        flexDir={{ base: 'column', lg: 'row' }}
        px={{ base: pxToRem(24), lg: pxToRem(220) }}
        py={{ base: pxToRem(40), lg: pxToRem(80) }}
      >
        <Flex flexDir="column" gap={pxToRem(40)}>
          <Text>{policy?.description}</Text>
          {policy?.items?.map((item, idx) => (
            <Flex flexDir="column" key={idx}>
              <Heading as="h2" variant="xs">
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
