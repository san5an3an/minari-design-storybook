// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>
export const SizeLarge = () => <ProgressBar progress="66" barSize="large" aria-label="Upload test.png" />
