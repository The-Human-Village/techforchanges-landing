import { pxToRem } from '@/utilities/pxToRem'
export const LinkStyles = {
  baseStyle: {
    transition: 'all 0.3s',
    fontWeight: 500,
    color: 'gray.500',
    _hover: {
      color: 'blue.800',
      textDecoration: 'none',
    },
    _activeLink: {
      color: 'blue.800',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
    },
    md: {
      fontSize: 'md',
      lineHeight: '1.5rem',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: '1.75rem',
    },
  },
  variants: {
    light: {
      color: 'gray.300',
      _hover: {
        color: 'white.50',
        textDecoration: 'underline',
      },
    },
    'btn-primary': {
      bg: 'blue.800',
      fontWeight: 600,
      fontSize: pxToRem(18),
      lineHeight: pxToRem(28),
      borderRadius: pxToRem(8),
      textAlign: 'center',
      py: pxToRem(13),
      px: pxToRem(24),
      minWidth: pxToRem(215),
      color: 'white',
      _hover: {
        background: 'blue.900',
        color: 'white',
      },
    },
    'btn-secondary': {
      bg: 'white',
      fontWeight: 600,
      borderRadius: pxToRem(6),
      py: pxToRem(8),
      px: pxToRem(16),
      color: 'blue.800',
      _hover: {
        bg: 'gray.100',
        color: 'blue.800',
      },
    },
    blue: {
      color: 'blue.800',
      fontWeight: 600,
      _hover: {
        color: 'blue.900',
        textDecoration: 'underline',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
}
