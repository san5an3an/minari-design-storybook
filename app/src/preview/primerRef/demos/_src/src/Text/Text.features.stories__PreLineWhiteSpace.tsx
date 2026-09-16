// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const PreLineWhiteSpace = () => (
  <Text as="span" whiteSpace="pre-line">
    Stylized text
  </Text>
)
