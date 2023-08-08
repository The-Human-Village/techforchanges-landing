import { pxToRem } from '@/utilities/pxToRem'
import { Card, CardBody, Flex, GridItem, Heading, Text } from '@chakra-ui/react'

export type Props = {
  icon: React.ReactNode
  number: string
  title: string
}

export const LocationGridItem = ({ icon, number, title }: Props) => {
  return (
    <GridItem>
      <Card flex="1" variant="elevated" direction="row">
        <Flex
          p={pxToRem(40)}
          bg="blue.50"
          borderLeftRadius={pxToRem(16)}
          justifyContent="center"
          alignItems="center"
        >
          {icon}
        </Flex>
        <CardBody>
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            p={pxToRem(40)}
          >
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
            >
              {title}
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  )
}
