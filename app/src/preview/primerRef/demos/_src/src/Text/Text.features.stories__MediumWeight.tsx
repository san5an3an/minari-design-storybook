// @ts-nocheck
import { Text } from '@primer/react';


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const MediumWeight = () => (
  <Text as="span" weight="medium">
    Stylized text
  </Text>
)
