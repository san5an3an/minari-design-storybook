// @ts-nocheck
import {action} from 'storybook/actions'
import { Token } from '@primer/react';
import classes from './Token.features.stories.module.css'


export default {
  title: 'Components/Token/Features',
  component: Token,
} as Meta

export const InteractiveToken = () => {
  return (
    <div className={classes.TokenRow}>
      <Token as="a" href="/?path=/story/components-token-features--issue-label-token-custom-colors" text="Link" />
      <Token as="button" onClick={action('clicked')} text="Button" />
    </div>
  )
}
