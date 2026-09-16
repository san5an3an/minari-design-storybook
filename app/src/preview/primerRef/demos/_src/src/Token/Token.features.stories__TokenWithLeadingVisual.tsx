// @ts-nocheck
import { Token } from '@primer/react';
import {GitBranchIcon} from '@primer/octicons-react'


export default {
  title: 'Components/Token/Features',
  component: Token,
} as Meta

export const TokenWithLeadingVisual = () => {
  return <Token text="token" leadingVisual={GitBranchIcon} />
}
