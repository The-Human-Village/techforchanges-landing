import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Hero } from '@/components/home/hero/hero'
import { Box, Flex } from '@chakra-ui/react'

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh">
      <Flex direction="column" minH="100vh">
        <Header />
        <Hero />
        <Box as="main" w="100%" overflowY="auto" flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
