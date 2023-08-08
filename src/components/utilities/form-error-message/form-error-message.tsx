import { Alert } from '@/components/utilities/icon/icon'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Flex,
  FormErrorMessage as ChakraFormErrorMessage,
} from '@chakra-ui/react'

export const FormErrorMessage = ({ ...props }) => {
  return (
    <ChakraFormErrorMessage {...props}>
      <Flex alignItems="center" gap={pxToRem(10)}>
        <Alert w={pxToRem(20)} h={pxToRem(20)} />
        {props.children}
      </Flex>
    </ChakraFormErrorMessage>
  )
}
