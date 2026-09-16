// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const NormalWhiteSpace = () => (
  <Text as="span" whiteSpace="normal">
    Stylized text
  </Text>
)
