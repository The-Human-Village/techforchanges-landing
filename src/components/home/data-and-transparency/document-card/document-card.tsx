import { Download, File } from '@/components/utilities/icon/icon'
import { FileExt } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import { Flex, Link, Text } from '@chakra-ui/react'

export const DocumentCard = ({ name, ext, url }) => {
  const getFileBgColor = (ext) => {
    switch (ext) {
      case FileExt.Doc:
      case FileExt.Docx:
        return '#0263D1'
      case FileExt.Pdf:
        return 'red'
      case FileExt.Xls:
      case FileExt.Xlsx:
        return 'green'
      default:
        return 'gray.800'
    }
  }

  return (
    <Flex
      w="full"
      bg="white"
      borderRadius="lg"
      alignItems="center"
      p={pxToRem(12)}
    >
      <Flex flex="1" alignItems="center" gap={pxToRem(14)}>
        <File
          color={getFileBgColor(ext)}
          w={pxToRem(32)}
          h={pxToRem(32)}
          ext={ext}
        />
        <Text color="gray.800" fontWeight="600">
          {name}
        </Text>
      </Flex>
      <Link
        href={url}
        download={name}
        variant="btn-primary"
        display="flex"
        alignItems="center"
        p={pxToRem(8)}
        w={pxToRem(32)}
        h={pxToRem(32)}
        minW="auto"
      >
        <Download w={pxToRem(16)} h={pxToRem(16)} />
      </Link>
    </Flex>
  )
}
