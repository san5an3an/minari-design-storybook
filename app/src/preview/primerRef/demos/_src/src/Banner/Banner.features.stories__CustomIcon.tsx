// @ts-nocheck
import {CopilotIcon, GitPullRequestIcon} from '@primer/octicons-react'
import {action} from 'storybook/actions'
import { Banner } from '@primer/react';


const meta = {
  title: 'Components/Banner/Features',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta

export const CustomIcon = () => {
  return (
    <Banner
      title="Upsell"
      description="An example banner with a custom icon"
      leadingVisual={<CopilotIcon />}
      onDismiss={action('onDismiss')}
      variant="upsell"
    />
  )
}
