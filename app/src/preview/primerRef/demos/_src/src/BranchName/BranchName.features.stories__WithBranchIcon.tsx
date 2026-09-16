// @ts-nocheck
import { BranchName } from '@primer/react';
import { Stack } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import {GitBranchIcon, CopyIcon, CheckIcon, TriangleDownIcon} from '@primer/octicons-react'


export default {
  title: 'Components/BranchName/Features',
  component: BranchName,
} as Meta<typeof BranchName>

export const WithBranchIcon = () => (
  <BranchName href="#">
    <Stack direction="horizontal" gap="condensed" align="center">
      <Octicon icon={GitBranchIcon} />
      branch_name
    </Stack>
  </BranchName>
)
