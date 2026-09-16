// @ts-nocheck
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

export const WithCustomNavigation = () => (
  <div className={classes.PaddingContainer}>
    <PageHeader role="banner" aria-label="Pull request title">
      <PageHeader.TitleArea>
        <PageHeader.Title>Pull request title</PageHeader.Title>
      </PageHeader.TitleArea>
      <PageHeader.Navigation as="nav" aria-label="Item list">
        <ul className={classes.CustomNavigationList}>
          <li>
            <Link href="https://github.com/primer/react" aria-current="page">
              Item 1
            </Link>
          </li>
          <li>
            <Link href="https://github.com/primer/react/pulls">Item 2</Link>
          </li>
        </ul>
      </PageHeader.Navigation>
    </PageHeader>
  </div>
)

export default meta
