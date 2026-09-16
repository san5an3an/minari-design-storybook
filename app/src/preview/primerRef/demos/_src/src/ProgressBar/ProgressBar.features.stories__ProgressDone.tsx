// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>
export const ProgressDone = () => <ProgressBar progress="100" aria-label="Upload test.png" />
