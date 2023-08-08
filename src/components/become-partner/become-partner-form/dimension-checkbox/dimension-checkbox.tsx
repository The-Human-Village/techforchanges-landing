import type { IDimension } from '@/types/index'
import { pxToRem } from '@/utilities/pxToRem'
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react'
import { useCallback } from 'react'

// Define the filters
const selectedFilter =
  'brightness(0) saturate(100%) invert(29%) sepia(70%) saturate(1595%) hue-rotate(194deg) brightness(91%) contrast(98%)'
const defaultFilter =
  'invert(55%) sepia(8%) saturate(986%) hue-rotate(176deg) brightness(89%) contrast(90%)'

export type Props = {
  name: string
  dimensions: IDimension[]
  value: string[]
  onChange: (checkedItems: string[]) => void
}

export const DimensionCheckbox = ({ name, dimensions, onChange, value }) => {
  const isDimensionSelected = useCallback(
    (dimension) => {
      return value.includes(dimension.id.toString())
    },
    [value],
  )

  const handleOnChange = useCallback(
    (dimension: IDimension) => {
      if (isDimensionSelected(dimension)) {
        onChange(value.filter((v) => v !== dimension.id.toString()))
      } else {
        onChange([...value, dimension.id.toString()])
      }
    },
    [isDimensionSelected, onChange, value],
  )

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(205px, 1fr))"
      gap={pxToRem(12)}
    >
      <CheckboxGroup onChange={onChange}>
        {dimensions?.map((dimension, index) => (
          <Checkbox
            variant="card"
            name={`${name}[${index}]`}
            checked={isDimensionSelected(dimension)}
            onChange={() => handleOnChange(dimension)}
            key={dimension.id}
            required={false}
          >
            <Flex alignItems="center" flexDir="column" gap={pxToRem(10)}>
              <Image
                src={dimension?.attributes?.icon?.data?.attributes?.url}
                alt={`${dimension.attributes.title} icon`}
                w={pxToRem(24)}
                h={pxToRem(24)}
                style={{
                  filter: isDimensionSelected(dimension)
                    ? selectedFilter
                    : defaultFilter,
                }}
              />
              <Text textAlign="center">{dimension.attributes.title}</Text>
            </Flex>
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Grid>
  )
}
