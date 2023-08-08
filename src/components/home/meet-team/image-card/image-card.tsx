import { Instagram, Linkedin, Twitter } from '@/components/utilities/icon/icon'
import type { IMember } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'

export type Props = {
  member: IMember
}

const HoverIconButton = ({ hover }) => {
  return (
    <IconButton
      position="absolute"
      bottom={pxToRem(8)}
      right={pxToRem(8)}
      zIndex="3"
      variant="transparent"
      aria-label="Add to favorites"
      icon={<AddIcon />}
      color={hover ? 'white' : 'transparent'}
      _hover={{ color: 'white' }}
    />
  )
}

export const ImageCard = ({ member }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hover, setHover] = useState(false)

  return (
    <>
      <Box
        role="button"
        aria-label="Image of a team member"
        w="full"
        h={pxToRem(300)}
        bgImage={
          member?.picture?.data?.attributes?.url &&
          `url(${member?.picture?.data?.attributes?.url})`
        }
        bg={!member?.picture?.data?.attributes?.url && 'gray.200'}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        borderRadius={pxToRem(16)}
        onClick={onOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box
          zIndex="2"
          pos="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg="rgba(0, 0, 0, 0.20)"
          borderRadius={pxToRem(16)}
        ></Box>
        <Box
          position="absolute"
          bottom={pxToRem(16)}
          left={pxToRem(16)}
          zIndex="3"
        >
          <Text color="white" fontWeight={800}>
            {member.first_name} {member.last_name}
          </Text>
          <Text
            color="white"
            fontSize="sm"
            lineHeight={pxToRem(20)}
            textAlign="left"
          >
            {member.position}
          </Text>
        </Box>
        <HoverIconButton hover={hover} />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton top={pxToRem(24)} right={pxToRem(24)} size="lg" />
          <ModalBody
            px={pxToRem(24)}
            pt={{ base: pxToRem(68), lg: pxToRem(80) }}
            pb={{ base: pxToRem(40), lg: pxToRem(80) }}
          >
            <Flex flexDir="column" gap={{ base: pxToRem(16), lg: pxToRem(24) }}>
              <Flex
                flexDir={{ base: 'column', lg: 'row' }}
                gap={pxToRem(40)}
                alignItems="center"
              >
                <Image
                  src={member?.picture?.data?.attributes?.url}
                  alt={`${member.first_name} picture`}
                  w={{ base: 'full', lg: pxToRem(200) }}
                  borderRadius={pxToRem(16)}
                />
                <Flex flexDir="column">
                  <Text
                    color="blue.800"
                    fontWeight={800}
                    fontSize={{ base: pxToRem(20), lg: pxToRem(30) }}
                    lineHeight={{ base: pxToRem(28), lg: pxToRem(36) }}
                  >
                    {member.first_name} {member.last_name}
                  </Text>
                  <Text
                    color="gray.800"
                    fontSize={{ base: pxToRem(16), lg: pxToRem(20) }}
                    lineHeight={pxToRem(28)}
                    fontWeight={500}
                  >
                    {member.position}
                  </Text>
                  <Flex gap={pxToRem(8)} mt={pxToRem(16)} mb={pxToRem(16)}>
                    <Twitter w={pxToRem(24)} h={pxToRem(20)} color="blue.800" />
                    <Linkedin
                      w={pxToRem(24)}
                      h={pxToRem(20)}
                      color="blue.800"
                    />
                    <Instagram
                      w={pxToRem(24)}
                      h={pxToRem(20)}
                      color="blue.800"
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Text color="gray.800">{member.description}</Text>
              <Text
                color="blue.800"
                fontSize="2xl"
                fontWeight={700}
                lineHeight={pxToRem(32)}
                mt={pxToRem(16)}
              >
                {member.quote}
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
