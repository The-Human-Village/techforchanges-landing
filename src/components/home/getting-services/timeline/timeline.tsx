import type { IVisionItem } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

export type ContentProps = {
  item: IVisionItem
  align?: string
  showVerticalLine?: boolean
}

const Content = ({
  item,
  align = 'left',
  showVerticalLine = false,
}: ContentProps) => (
  <Flex
    justifyContent={align === 'right' && 'flex-end'}
    mb={{ base: showVerticalLine && pxToRem(40), lg: 0 }}
  >
    <Box
      display={{
        base: 'block',
        lg: item.position !== align ? 'block' : 'none',
      }}
      bg="white"
      color="gray.800"
      p={pxToRem(28)}
      borderRadius={pxToRem(12)}
      h="max-content"
      w="full"
    >
      <Flex alignItems="center" gap={pxToRem(24)}>
        <Image
          src={item?.icon?.data?.attributes?.url}
          alt={`${item?.icon?.data?.attributes?.name}`}
          w={pxToRem(48)}
          h={pxToRem(48)}
        />
        <Box>
          <Heading as="h6" fontSize={pxToRem(18)} lineHeight={pxToRem(28)}>
            {item?.title}
          </Heading>
          <Text variant="regular">{item?.content}</Text>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

const LineWithCircle = ({ showVerticalLine }) => (
  <Flex
    pos="relative"
    h="full"
    borderLeft={showVerticalLine && '1px'}
    borderStyle="solid"
    borderColor="blue.700"
  >
    <Box
      bg="blue.700"
      border="2px solid"
      borderColor="blue.700"
      borderRadius="50%"
      position="absolute"
      left="0"
      transform="translateX(-50%)"
      w={pxToRem(12)}
      h={pxToRem(12)}
      zIndex="10"
    />
  </Flex>
)

export type Props = {
  items: IVisionItem[]
}

export const Timeline = ({ items }: Props) =>
  items?.length > 0 && (
    <Grid
      templateColumns={{ base: 'auto 1fr', lg: '1fr auto 1fr' }}
      gridAutoRows={{ lg: 'minmax(200px, auto)' }}
      mt={{ base: pxToRem(28), lg: pxToRem(44) }}
    >
      {items.map((item, idx) => (
        <>
          <GridItem
            display={{ base: 'none', lg: 'flex' }}
            mr={{ base: pxToRem(22), lg: pxToRem(40) }}
          >
            <Content item={item} align="right" />
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <LineWithCircle showVerticalLine={idx !== items?.length - 1} />
          </GridItem>
          <GridItem ml={{ base: pxToRem(22), lg: pxToRem(40) }}>
            <Content item={item} showVerticalLine={idx !== items?.length - 1} />
          </GridItem>
        </>
      ))}
    </Grid>
  )
