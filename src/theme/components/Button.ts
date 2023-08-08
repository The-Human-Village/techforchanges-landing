import { pxToRem } from '@/utilities/pxToRem'
export const ButtonStyles = {
  baseStyles: {
    fontWeight: 600,
    fontSize: 'md',
    lineHeight: '1.5',
  },
  colors: {},
  sizes: {
    md: {
      padding: '1rem',
    },
    lg: {
      padding: '1.5rem 1.875rem',
    },
  },
  variants: {
    primary: {
      bg: 'blue.800',
      color: 'white',
      _hover: {
        bg: 'blue.900',
      },
      _disabled: {
        bg: 'blue.900 !important',
      },
    },
    secondary: {
      bg: 'white.50',
      color: 'blue.800',
      _hover: {
        bg: 'white.100',
      },
    },
    ghost: {
      _hover: {
        bg: 'inherit',
      },
      _active: {
        bg: 'inherit',
      },
    },
    circle: {
      w: pxToRem(60),
      h: pxToRem(60),
      borderRadius: '50%',
      boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.14)',
      bg: 'rgba(255, 255, 255, 0.64)',
      _hover: {
        bg: 'rgba(255, 255, 255, 0.9)',
      },
    },
    transparent: {
      bg: 'transparent',
      padding: 0,
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
}
