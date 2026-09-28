// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const NormalWeight = () => (
  <Text as="span" weight="normal">
    Stylized text
  </Text>
)
