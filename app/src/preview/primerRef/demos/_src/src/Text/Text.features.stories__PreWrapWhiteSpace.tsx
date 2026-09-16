// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const PreWrapWhiteSpace = () => (
  <Text as="span" whiteSpace="pre-wrap">
    Stylized text
  </Text>
)
