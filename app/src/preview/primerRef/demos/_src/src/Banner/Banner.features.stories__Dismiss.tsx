// @ts-nocheck
import { action } from '../../../_stub/storybookActions';
import { Banner } from '@primer/react';
import { Link } from '@primer/react';


const meta = {
  title: 'Components/Banner/Features',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta


export const Dismiss = () => {
  return (
    <Banner
      title="Notice"
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
    />
  )
}
