// @ts-nocheck
import {action} from 'storybook/actions'
import { Token } from '@primer/react';
import classes from './Token.features.stories.module.css'


export default {
  title: 'Components/Token/Features',
  component: Token,
} as Meta

export const TokenWithOnRemoveFn = ({...args}) => {
  return (
    <div className={classes.TokenRow}>
      <Token text="token" onRemove={action('remove me')} {...args} />
      <Token
        as="a"
        href="/?path=/story/components-token-features--issue-label-token-custom-colors"
        onRemove={action('remove me')}
        text="Link"
        {...args}
      />
      <Token as="button" onClick={action('clicked')} onRemove={action('remove me')} text="Button" {...args} />
    </div>
  )
}

TokenWithOnRemoveFn.storyName = 'Token with onRemove fn'
TokenWithOnRemoveFn.args = {
  size: 'medium',
}
TokenWithOnRemoveFn.argTypes = {
  size: {
    control: {
      type: 'radio',
    },
    options: ['small', 'medium', 'large', 'xlarge'],
  },
}
