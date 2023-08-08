import { pxToRem } from '@/utilities/pxToRem'
import { Card, CardBody, Image } from '@chakra-ui/react'

export type Props = {
  url: string
  name: string
}

export const PartnerCard = ({ url, name }: Props) => {
  return (
    <Card
      h="full"
      p={pxToRem(12)}
      borderRadius={pxToRem(8)}
      boxShadow="0px 6px 24px rgba(0, 0, 0, 0.1)"
      w={pxToRem(204)}
    >
      <CardBody flexDir="column" alignItems="center" justifyContent="center">
        <Image src={url} alt={name} />
      </CardBody>
    </Card>
  )
}
