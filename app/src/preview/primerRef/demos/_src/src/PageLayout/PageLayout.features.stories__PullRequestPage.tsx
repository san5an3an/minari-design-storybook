// @ts-nocheck
import { PageLayout } from '@primer/react';
import { BranchName } from '@primer/react';
import { Heading } from '@primer/react';
import { Link } from '@primer/react';
import { StateLabel } from '@primer/react';
import { Text } from '@primer/react';
import { TabNav } from '@primer/react/deprecated';
import classes from './PageLayout.features.stories.module.css'


export default {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
} as Meta<typeof PageLayout>

export const PullRequestPage = () => (
  <PageLayout>
    <PageLayout.Header>
      <div className={classes.HeaderStack}>
        <div>
          <Heading as="h1" className={classes.TitleHeading}>
            Input validation styles <Text className={classes.TitleSubdued}>#1831</Text>
          </Heading>
          <div className={classes.StatusRow}>
            <StateLabel status="pullOpened">Open</StateLabel>
            <Text className={classes.StatusMeta}>
              <Link href="#" muted className={classes.BoldMetaLink}>
                mperrotti
              </Link>{' '}
              wants to merge 3 commits into <BranchName href="#">main</BranchName> from{' '}
              <BranchName href="#">mp/validation-styles</BranchName>
            </Text>
          </div>
        </div>
        <TabNav>
          <TabNav.Link href="#" selected>
            Conversation
          </TabNav.Link>
          <TabNav.Link href="#">Commits</TabNav.Link>
          <TabNav.Link href="#">Checks</TabNav.Link>
          <TabNav.Link href="#">Files changed</TabNav.Link>
        </TabNav>
      </div>
    </PageLayout.Header>
    <PageLayout.Content>
      <div className={classes.ContentBox}></div>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div className={classes.ScrollBox} tabIndex={0}>
        This box has really long content. If it is too long, it will cause x overflow and should show a scrollbar. When
        this overflows, it should not break to overall page layout!
      </div>
    </PageLayout.Content>
    <PageLayout.Pane aria-label="Side pane">
      <div className={classes.PaneStack}>
        <div>
          <Text className={classes.PaneSectionHeading}>Assignees</Text>
          <Text className={classes.PaneMetaText}>
            No one –{' '}
            <Link href="#" muted>
              assign yourself
            </Link>
          </Text>
        </div>
        <div role="separator" className={classes.PaneSeparator}></div>
        <div>
          <Text className={classes.PaneSectionHeading}>Labels</Text>
          <Text className={classes.PaneMetaText}>None yet</Text>
        </div>
      </div>
    </PageLayout.Pane>
  </PageLayout>
)
