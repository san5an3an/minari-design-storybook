// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const SizeMedium = () => (
  <Text as="span" size="medium">
    Stylized text
  </Text>
)
