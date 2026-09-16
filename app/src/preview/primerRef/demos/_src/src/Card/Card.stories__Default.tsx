// @ts-nocheck
import {PeopleIcon, RocketIcon} from '@primer/octicons-react'
import { Card } from '@primer/react/experimental';
import classes from './Card.stories.module.css'


const meta = {
  title: 'Experimental/Components/Card',
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

export const Default = () => {
  return (
    <Card>
      <Card.Icon icon={RocketIcon} />
      <Card.Heading>Card Heading</Card.Heading>
      <Card.Description>This is a description of the card providing supplemental information.</Card.Description>
      <Card.Metadata>
        <PeopleIcon size={16} />3 contributors
      </Card.Metadata>
    </Card>
  )
}
