// @ts-nocheck
import { Button } from '@primer/react';
import { PageHeader } from '@primer/react';
import { Hidden } from '@primer/react/experimental';
import classes from './PageHeader.features.stories.module.css'


const meta: Meta = {
  title: 'Components/PageHeader/Features',
  parameters: {
    layout: 'fullscreen',
    controls: {expanded: true},
  },
  args: {},
}

export const WithActionsThatHaveResponsiveContent = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Webhooks">
      <PageHeader.TitleArea>
        <PageHeader.Title as="h2">Webhooks</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.Actions>
        <Hidden when={['narrow']}>
          <Button variant="primary">New webhook</Button>
        </Hidden>
        <Hidden when={['regular', 'wide']}>
          <Button variant="primary">New</Button>
        </Hidden>
      </PageHeader.Actions>
    </PageHeader>
  </div>
)

export default meta
