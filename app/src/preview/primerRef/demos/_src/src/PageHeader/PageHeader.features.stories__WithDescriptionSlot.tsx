// @ts-nocheck
import { Text } from '@primer/react';
import { Link } from '@primer/react';
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

export const WithDescriptionSlot = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Add-pageheader-docs">
      <PageHeader.TitleArea>
        <PageHeader.Title>add-pageheader-docs</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.Description>
        <Text className={classes.DescriptionText}>
          <Link href="https://github.com/broccolinisoup" className={classes.BoldLink}>
            broccolinisoup
          </Link>{' '}
          created this branch 5 days ago · 14 commits · updated today
        </Text>
      </PageHeader.Description>
    </PageHeader>
  </div>
)

export default meta
