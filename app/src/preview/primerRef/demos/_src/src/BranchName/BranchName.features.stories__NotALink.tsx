// @ts-nocheck
import { BranchName } from '@primer/react';


export default {
  title: 'Components/BranchName/Features',
  component: BranchName,
} as Meta<typeof BranchName>

export const NotALink = () => <BranchName as="span">branch_name_as_span</BranchName>
