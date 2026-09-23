// @ts-nocheck
import {CopilotIcon, GitPullRequestIcon} from '@primer/octicons-react'
import {action} from 'storybook/actions'
import { Banner } from '@primer/react';
import { Link } from '@primer/react';


const meta = {
  title: 'Components/Banner/Features',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta

export const DismissibleWithHiddenTitleAndSecondaryAction = () => {
  return (
    <Banner
      title="Warning"
      hideTitle
      description={
        <>
          GitHub users are{' '}
          <Link inline href="#">
            now required
          </Link>{' '}
          to enable two-factor authentication as an additional security measure.
        </>
      }
      onDismiss={action('onDismiss')}
      variant="warning"
      secondaryAction={<Banner.SecondaryAction leadingVisual={GitPullRequestIcon}>Button</Banner.SecondaryAction>}
    />
  )
}
