// @ts-nocheck
import { Token } from '@primer/react';
import { IssueLabelToken } from '@primer/react';


export default {
  title: 'Components/Token/Features',
  component: Token,
} as Meta

export const DefaultIssueLabelToken = () => {
  return <IssueLabelToken text="good first issue" />
}
DefaultIssueLabelToken.storyName = 'Default IssueLabelToken'
