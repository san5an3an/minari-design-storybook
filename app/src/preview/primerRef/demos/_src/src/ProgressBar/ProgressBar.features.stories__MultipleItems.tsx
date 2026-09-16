// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>

export const MultipleItems = () => (
  <ProgressBar>
    <ProgressBar.Item progress={33} aria-label="Photo Usage" bg="accent.emphasis" />
    <ProgressBar.Item progress={23} aria-label="Application Usage" bg={'danger.emphasis'} />
    <ProgressBar.Item progress={14} aria-label="Music Usage" bg={'severe.emphasis'} />
  </ProgressBar>
)
