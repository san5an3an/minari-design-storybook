// @ts-nocheck
import { Text } from '@primer/react';
import classes from './Text.features.stories.module.css'


export default {
  title: 'Components/Text/Features',
  component: Text,
} as Meta<typeof Text>

export const Polymorphism = () => (
  <div className={classes.PolymorphismContainer}>
    <Text as="em">Emphasized text</Text>
    <Text as="i">Italicized text</Text>
    <Text as="strong">Strong text</Text>
    <Text as="small">Small text</Text>
    <Text as="u">Text with underline</Text>
  </div>
)
