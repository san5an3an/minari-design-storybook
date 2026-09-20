// @ts-nocheck
import { action } from '../../../_stub/storybookActions';
import { Banner } from '@primer/react';
import { Link } from '@primer/react';


const meta = {
  title: 'Components/Banner/Features',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta


export const DismissibleWithHiddenTitleAndActions = () => {
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
      primaryAction={<Banner.PrimaryAction>Button</Banner.PrimaryAction>}
      secondaryAction={<Banner.SecondaryAction>Button</Banner.SecondaryAction>}
    />
  )
}
