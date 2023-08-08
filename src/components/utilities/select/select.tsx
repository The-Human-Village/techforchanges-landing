import { pxToRem } from '@/utilities/pxToRem'
import { useTheme } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'
import type { Props as SelectProps } from 'react-select'
import ReactSelect from 'react-select'

interface Props extends PropsWithChildren<SelectProps> {
  isInvalid: boolean
}

export const Select = ({ isInvalid, ...rest }: Props) => {
  const theme = useTheme()

  const styles = {
    control: (provided) => ({
      ...provided,
      borderRadius: pxToRem(6),
      border: isInvalid
        ? `2px solid ${theme.colors.red[500]}`
        : `1px solid ${theme.colors.gray[200]}`,

      minHeight: '48px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme.colors.gray[700],
      ':hover': {
        color: theme.colors.gray[700],
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: state.isSelected ? theme.colors.blue[800] : theme.colors.gray[500],
      fontWeight: state.isSelected ? 800 : 400,
      '&:hover': {
        color: state.isSelected
          ? theme.colors.blue[800]
          : theme.colors.blue[700],
        fontWeight: state.isSelected ? 800 : 400,
      },
      fontSize: pxToRem(18),
      lineHeight: pxToRem(28),
    }),
  }
  return <ReactSelect styles={styles} {...rest} />
}
