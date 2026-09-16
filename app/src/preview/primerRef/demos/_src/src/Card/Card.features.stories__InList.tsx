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

export const InList = () => (
  <ul className={classes.CardList} aria-label="Repositories">
    <li>
      <Card>
        <Card.Icon icon={RepoIcon} />
        <Card.Description>primer/react</Card.Description>
        <Card.Metadata>
          <StarIcon size={16} />
          1.2k stars
        </Card.Metadata>
      </Card>
    </li>
    <li>
      <Card>
        <Card.Icon icon={RepoIcon} />
        <Card.Description>primer/css</Card.Description>
        <Card.Metadata>
          <StarIcon size={16} />
          850 stars
        </Card.Metadata>
      </Card>
    </li>
    <li>
      <Card>
        <Card.Icon icon={RepoIcon} />
        <Card.Description>primer/octicons</Card.Description>
        <Card.Metadata>
          <StarIcon size={16} />
          2.1k stars
        </Card.Metadata>
      </Card>
    </li>
  </ul>
)
