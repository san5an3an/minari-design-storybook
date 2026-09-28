// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const LightWeight = () => (
  <Text as="span" weight="light">
    Stylized text
  </Text>
)
