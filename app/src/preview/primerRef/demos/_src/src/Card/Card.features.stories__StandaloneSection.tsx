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

export const StandaloneSection = () => (
  <Card as="section">
    <Card.Icon icon={RepoIcon} />
    <Card.Heading>primer/react</Card.Heading>
    <Card.Description>
      {
        'Standalone cards render as a labelled <section> landmark. aria-labelledby is automatically wired to Card.Heading.'
      }
    </Card.Description>
  </Card>
)
