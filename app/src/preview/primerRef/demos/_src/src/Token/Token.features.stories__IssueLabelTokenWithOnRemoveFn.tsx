// @ts-nocheck
import {action} from 'storybook/actions'
import { Token } from '@primer/react';
import { IssueLabelToken } from '@primer/react';
import classes from './Token.features.stories.module.css'


export default {
  title: 'Components/Token/Features',
  component: Token,
} as Meta

export const IssueLabelTokenWithOnRemoveFn = () => {
  return (
    <div className={classes.TokenRow}>
      <IssueLabelToken text="token" onRemove={action('remove me')} />
      <IssueLabelToken
        as="a"
        href="/?path=/story/components-token-features--issue-label-token-custom-colors"
        onRemove={action('remove me')}
        text="Link"
      />
      <IssueLabelToken as="button" onClick={action('clicked')} onRemove={action('remove me')} text="Button" />
    </div>
  )
}

IssueLabelTokenWithOnRemoveFn.storyName = 'IssueLabelToken with onRemove fn'
