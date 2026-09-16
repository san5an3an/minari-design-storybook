// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>

export const Inline = () => <ProgressBar inline progress="66" style={{width: '100px'}} aria-label="Upload test.png" />
