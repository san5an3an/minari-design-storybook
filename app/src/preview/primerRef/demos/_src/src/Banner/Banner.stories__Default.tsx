// @ts-nocheck
import { Link } from '@primer/react';
import { Banner } from '@primer/react';
import {action} from 'storybook/actions'


const meta = {
  title: 'Components/Banner',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta

export const Default = () => {
  return (
    <Banner
      onDismiss={action('onDismiss')}
      title="Info"
      description={
        <>
          GitHub users are{' '}
          <Link inline href="#">
            now required
          </Link>{' '}
          to enable two-factor authentication as an additional security measure.
        </>
      }
      primaryAction={<Banner.PrimaryAction>Button</Banner.PrimaryAction>}
      secondaryAction={<Banner.SecondaryAction>Button</Banner.SecondaryAction>}
    />
  )
}
