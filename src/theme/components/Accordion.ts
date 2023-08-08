export const AccordionStyles = {
  parts: ['container', 'button'],
  baseStyle: {
    container: {
      bg: 'white',
      border: 'none',
    },
    button: {
      fontWeight: 700,
      color: 'gray.500',
      padding: 0,
      '&[aria-expanded="true"]': {
        bg: 'white',
        fontWeight: 800,
        color: 'blue.800',
      },
      _hover: {
        bg: 'white',
      },
    },
  },
}
