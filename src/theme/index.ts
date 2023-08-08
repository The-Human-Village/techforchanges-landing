import { colors } from '@/theme/colors'
import { spacing } from '@/theme/spacing'
import { styles } from '@/theme/styles'
import { extendTheme } from '@chakra-ui/react'
import { Manrope } from '@next/font/google'

// Component overrides
import { AccordionStyles as Accordion } from '@/theme/components/Accordion'
import { ButtonStyles as Button } from '@/theme/components/Button'
import { CardStyles as Card } from '@/theme/components/Card'
import { CheckboxStyles as Checkbox } from '@/theme/components/Checkbox'
import { FormStyles as Form } from '@/theme/components/Form'
import { FormErrorStyles as FormError } from '@/theme/components/FormError'
import { FormLabelStyles as FormLabel } from '@/theme/components/FormLabel'
import { HeadingStyles as Heading } from '@/theme/components/Heading'
import { InputStyles as Input } from '@/theme/components/Input'
import { LinkStyles as Link } from '@/theme/components/Link'
import { TextStyles as Text } from '@/theme/components/Text'

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const overrides = {
  styles,
  colors,
  ...spacing,
  fonts: {
    heading: `${manrope.style.fontFamily}, sans-serif`,
    body: `${manrope.style.fontFamily}, sans-serif`,
  },
  components: {
    Card,
    Button,
    Accordion,
    Link,
    Text,
    Heading,
    Checkbox,
    Form,
    FormLabel,
    Input,
    FormError,
  },
}

export default extendTheme(overrides)
