import { MainLayout } from '@/components/layout/main-layout'
import { LocaleProvider } from '@/components/utilities/locale-provider/locale-provider'
import '@/styles/globals.css'
import theme from '@/theme/index'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ComponentType } from 'react'
import { useState } from 'react'

interface Props extends AppProps {
  Component: ComponentType<any> & {
    Layout?: ComponentType<any>
  }
}

function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || MainLayout
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          position: 'top',
          variant: 'left-accent',
          isClosable: true,
          duration: 5000,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title>The Human Village</title>
            <meta name="description" content="Helping Refugees Thrive" />
            <link rel="icon" href="/favicon.jpg" />
          </Head>
          <LocaleProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LocaleProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
