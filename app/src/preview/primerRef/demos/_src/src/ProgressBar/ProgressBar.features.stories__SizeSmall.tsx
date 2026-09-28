// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>

export const SizeSmall = () => <ProgressBar progress="66" barSize="small" aria-label="Upload test.png" />
