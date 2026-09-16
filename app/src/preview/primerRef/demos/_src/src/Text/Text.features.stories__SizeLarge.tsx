// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const SizeLarge = () => (
  <Text as="span" size="large">
    Stylized text
  </Text>
)
