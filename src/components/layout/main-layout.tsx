import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { pxToRem } from '@/utilities/pxToRem'
import { Box, Flex } from '@chakra-ui/react'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh">
      <Flex direction="column" minH="100vh">
        <Header />
        <Box
          as="main"
          w="100%"
          overflowY="auto"
          flexGrow={1}
          mt={{ base: pxToRem(72), lg: pxToRem(82) }}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
