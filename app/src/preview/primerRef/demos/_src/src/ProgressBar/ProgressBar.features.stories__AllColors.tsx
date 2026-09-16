// @ts-nocheck
import { ProgressBar } from '@primer/react';


export default {
  title: 'Components/ProgressBar/Features',
  component: ProgressBar,
} as Meta<typeof ProgressBar>

export const AllColors = () => (
  <ProgressBar aria-label="Upload test.png">
    <ProgressBar.Item progress={20} aria-label="Photo Usage" bg="accent.emphasis" />
    <ProgressBar.Item progress={15} aria-label="Application Usage" bg="danger.emphasis" />
    <ProgressBar.Item progress={12} aria-label="Music Usage" bg="severe.emphasis" />
    <ProgressBar.Item progress={11} aria-label="Music Usage" bg="done.emphasis" />
    <ProgressBar.Item progress={8} aria-label="Music Usage" bg="sponsors.emphasis" />
    <ProgressBar.Item progress={7} aria-label="Music Usage" bg="neutral.emphasis" />
    <ProgressBar.Item progress={7} aria-label="Music Usage" bg="attention.emphasis" />
  </ProgressBar>
)
