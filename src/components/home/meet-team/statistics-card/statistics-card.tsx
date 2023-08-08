import { pxToRem } from '@/utilities/pxToRem'
import { Card as ChakraCard, CardBody, Heading, Text } from '@chakra-ui/react'

export type Props = {
  title: string
  number: string
}

export const StatisticsCard = ({ title, number }: Props) => {
  return (
    <ChakraCard
      variant="elevated"
      py={{ base: pxToRem(32), lg: pxToRem(40) }}
      px={{ base: pxToRem(24), lg: pxToRem(35) }}
      flex="1"
    >
      <CardBody flexDir="column">
        <Heading
          as="h1"
          size={{ base: '2xl', xl: '3xl' }}
          variant="locationNumber"
        >
          {number}
        </Heading>
        <Text
          size={{ base: 'sm', xl: 'lg' }}
          textTransform="uppercase"
          letterSpacing={pxToRem(1)}
          color="gray.600"
          fontSize={{ base: 'xs', lg: 'lg' }}
          lineHeight={pxToRem(28)}
        >
          {title}
        </Text>
      </CardBody>
    </ChakraCard>
  )
}
