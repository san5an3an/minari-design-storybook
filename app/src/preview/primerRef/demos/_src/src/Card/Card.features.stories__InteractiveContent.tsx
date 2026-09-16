// @ts-nocheck
import {KebabHorizontalIcon, RepoIcon, RepoForkedIcon, StarIcon} from '@primer/octicons-react'
import { Button } from '@primer/react';
import { VisuallyHidden } from '@primer/react';
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

/**
 * When several Cards share the same interactive controls (for example "Star"
 * or "Fork" buttons in a list of repositories), the controls' accessible
 * names must include enough context to distinguish one card's action from
 * another's. This story uses `VisuallyHidden` to append the repo name to
 * each button's accessible name — a common pattern across GitHub.
 */
export const InteractiveContent = () => {
  const repos = [{name: 'primer/react'}, {name: 'primer/css'}, {name: 'primer/octicons'}]

  return (
    <ul className={classes.CardList} aria-label="Repositories">
      {repos.map(repo => (
        <li key={repo.name}>
          <Card>
            <Card.Icon icon={RepoIcon} />
            <Card.Description>{repo.name}</Card.Description>
            <Card.Metadata>
              <Button leadingVisual={StarIcon} size="small">
                Star <VisuallyHidden>{repo.name}</VisuallyHidden>
              </Button>
              <Button leadingVisual={RepoForkedIcon} size="small">
                Fork <VisuallyHidden>{repo.name}</VisuallyHidden>
              </Button>
            </Card.Metadata>
          </Card>
        </li>
      ))}
    </ul>
  )
}
