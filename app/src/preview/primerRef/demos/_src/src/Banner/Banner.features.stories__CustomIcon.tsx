// @ts-nocheck
import { action } from '../../../_stub/storybookActions';
import { CopilotIcon } from '@primer/octicons-react';
import { Banner } from '@primer/react';
import { Link } from '@primer/react';


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
