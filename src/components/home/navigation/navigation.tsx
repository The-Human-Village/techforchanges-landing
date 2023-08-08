import type { INavigation } from '@/types/index'
import { RoutePath } from '@/types/index'
import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const getLinkProps = (url, router) => {
  return {
    as: NextLink,
    href: `#${url}`,
    color: router.asPath === `/#${url}` ? 'blue.800' : 'gray.800',
    fontWeight: router.asPath === `/#${url}` ? '700' : '400',
    pb: '3',
    size: 'sm',
    borderBottom: '3px solid',
    borderColor: router.asPath === `/#${url}` ? 'blue.800' : 'transparent',
  }
}

interface Props {
  navigationItems: INavigation[]
}

export const Navigation = ({ navigationItems }: Props) => {
  const router = useRouter()

  return (
    <Flex
      pt={4}
      px={{ sm: 4, xl: 15 }}
      display={{ base: 'none', lg: 'flex' }}
      borderBottom="1px"
      borderColor="gray.200"
      gap="8"
      justifyContent="center"
      alignItems="center"
      background="white"
      textTransform="uppercase"
    >
      {navigationItems?.map((item, idx) => (
        <Link
          key={idx}
          {...getLinkProps(item.url, router)}
          href={`${RoutePath.HOME}#${item.url}`}
        >
          {item.title}
        </Link>
      ))}
    </Flex>
  )
}
