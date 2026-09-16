// @ts-nocheck
import { Text } from '@primer/react';
import classes from './Text.features.stories.module.css'


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const StyledText = () => (
  <Text as="p" className={classes.StyledText} size="small">
    Stylized text
  </Text>
)
