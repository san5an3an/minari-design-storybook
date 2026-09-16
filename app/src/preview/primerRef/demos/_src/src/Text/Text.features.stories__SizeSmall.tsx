// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const SizeSmall = () => (
  <Text as="span" size="small">
    Stylized text
  </Text>
)
