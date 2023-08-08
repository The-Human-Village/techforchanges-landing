import { pxToRem } from '@/utilities/pxToRem'

export const CheckboxStyles = {
  variants: {
    primary: {
      control: {
        width: '20px',
        height: '20px',
        borderColor: 'gray.200',
        _checked: {
          bg: 'blue.500',
          borderColor: 'blue.500',
          _hover: {
            bg: 'blue.500',
            borderColor: 'blue.500',
          },
        },
        _invalid: {
          borderColor: 'gray.200',
        },
      },
      label: {
        fontWeight: '500',
        color: 'gray.500',
        _checked: {
          fontWeight: 800,
          color: 'blue.800',
        },
      },
    },
    card: {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: pxToRem(100),
        padding: pxToRem(10),
      },
      control: {
        _checked: {
          bg: 'blue.50',
          borderColor: 'blue.700',
          color: 'blue.800',
          _hover: {
            bg: 'blue.50',
            borderColor: 'blue.700',
          },
        },
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        borderWidth: 1,
      },
      icon: {
        display: 'none',
      },
      label: {
        fontWeight: '500',
        zIndex: '2',
        color: 'gray.500',
        _checked: {
          fontWeight: 700,
          color: 'blue.800',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
