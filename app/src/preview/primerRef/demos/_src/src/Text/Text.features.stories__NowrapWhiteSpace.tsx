// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const NowrapWhiteSpace = () => (
  <Text as="span" whiteSpace="nowrap">
    Stylized text
  </Text>
)
