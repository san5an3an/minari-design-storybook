// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>

export const ProgressZero = () => <ProgressBar progress="0" aria-label="Upload test.png" />
