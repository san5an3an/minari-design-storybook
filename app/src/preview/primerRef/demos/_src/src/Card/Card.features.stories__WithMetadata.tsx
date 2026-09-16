// @ts-nocheck
import {KebabHorizontalIcon, RepoIcon, RepoForkedIcon, StarIcon} from '@primer/octicons-react'
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

export const WithMetadata = () => {
  return (
    <Card>
      <Card.Icon icon={RepoIcon} />
      <Card.Heading>primer/react</Card.Heading>
      <Card.Description>
        {"GitHub's design system implemented as React components for building consistent user interfaces."}
      </Card.Description>
      <Card.Metadata>
        <StarIcon size={16} />
        1.2k stars
      </Card.Metadata>
    </Card>
  )
}
