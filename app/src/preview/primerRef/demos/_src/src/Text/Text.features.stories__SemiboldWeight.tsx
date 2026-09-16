// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const SemiboldWeight = () => (
  <Text as="span" weight="semibold">
    Stylized text
  </Text>
)
