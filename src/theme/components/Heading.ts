import { pxToRem } from '@/utilities/pxToRem'

export const HeadingStyles = {
  variants: {
    xs: {
      color: 'blue.800',
      fontWeight: 800,
      fontSize: pxToRem(24),
      lineHeight: pxToRem(32),
      mb: pxToRem(12),
    },
    base: {
      color: 'blue.800',
      fontWeight: 800,
      fontSize: pxToRem(30),
      lineHeight: pxToRem(36),
      mb: pxToRem(12),
    },
    sm: {
      color: 'blue.800',
      fontWeight: 800,
      fontSize: pxToRem(32),
      lineHeight: pxToRem(40),
      mb: pxToRem(12),
    },
    lg: {
      color: 'blue.800',
      fontWeight: 800,
      fontSize: pxToRem(48),
      lineHeight: pxToRem(48),
      mb: pxToRem(24),
    },
    locationNumber: {
      color: 'blue.300',
      fontWeight: 800,
    },
  },
}
