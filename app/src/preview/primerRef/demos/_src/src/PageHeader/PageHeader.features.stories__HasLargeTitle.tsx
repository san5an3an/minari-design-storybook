// @ts-nocheck
import { PageHeader } from '@primer/react';
import classes from './PageHeader.features.stories.module.css'


const meta: Meta = {
  title: 'Components/PageHeader/Features',
  parameters: {
    layout: 'fullscreen',
    controls: {expanded: true},
  },
  args: {},
}

export const HasLargeTitle = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Title">
      <PageHeader.TitleArea variant="large">
        <PageHeader.Title>Title</PageHeader.Title>
      </PageHeader.TitleArea>
    </PageHeader>
  </div>
)

export default meta
