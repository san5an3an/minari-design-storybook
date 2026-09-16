// @ts-nocheck
import {KebabHorizontalIcon, RepoIcon, RepoForkedIcon, StarIcon} from '@primer/octicons-react'
import { ActionList } from '@primer/react';
import { ActionMenu } from '@primer/react';
import { IconButton } from '@primer/react';
import { Card } from '@primer/react/experimental';
import classes from './Card.stories.module.css'


const meta = {
  title: 'Experimental/Components/Card/Features',
  component: Card,
  decorators: [
    Story => (
      <div className={classes.WidthConstraintContainer}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

export const WithMenu = () => {
  return (
    <Card>
      <Card.Icon icon={RepoIcon} />
      <Card.Heading>primer/react</Card.Heading>
      <Card.Description>
        {"GitHub's design system implemented as React components for building consistent user interfaces."}
      </Card.Description>
      <Card.Action>
        <ActionMenu>
          <ActionMenu.Anchor>
            <IconButton icon={KebabHorizontalIcon} aria-label="More options for primer/react" variant="invisible" />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay>
            <ActionList>
              <ActionList.Item>Star</ActionList.Item>
              <ActionList.Item>Watch</ActionList.Item>
              <ActionList.Item>Fork</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </Card.Action>
    </Card>
  )
}
