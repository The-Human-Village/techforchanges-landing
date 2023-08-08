import type { IDataAndTransparency } from '@/types/index'
import { Section } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { DocumentCard } from './document-card/document-card'

export type Props = {
  dataAndTransparency: IDataAndTransparency
}

export const DataAndTransparency = ({ dataAndTransparency }: Props) => {
  return (
    <Box as="section" bg="white.100" id={Section.DataAndTransparency}>
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        maxW={pxToRem(1440)}
        m="0 auto"
        px={{ base: pxToRem(24), lg: pxToRem(100) }}
        py={{ base: pxToRem(40), lg: pxToRem(100) }}
        gap={{ base: pxToRem(24), lg: pxToRem(60) }}
      >
        <Flex flex="1" flexDir="column">
          <Heading as="h2" variant={{ base: 'sm', lg: 'lg' }}>
            {dataAndTransparency?.title}
          </Heading>
          <Text variant="regular">{dataAndTransparency?.content}</Text>
        </Flex>
        <Flex flex="1" flexDir="column" gap={pxToRem(12)}>
          {dataAndTransparency?.files?.data?.map((item, index) => (
            <DocumentCard
              key={index}
              name={item?.attributes?.name}
              ext={item?.attributes?.ext}
              url={item?.attributes?.url}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
