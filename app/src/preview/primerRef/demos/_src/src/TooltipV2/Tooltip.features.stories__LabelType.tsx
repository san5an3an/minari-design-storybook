// @ts-nocheck
import { Link } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import { Tooltip } from '@primer/react';
import {
  SearchIcon,
  BookIcon,
  CheckIcon,
  TriangleDownIcon,
  GitBranchIcon,
  InfoIcon,
  HeartIcon,
} from '@primer/octicons-react'
import classes from './Tooltip.features.stories.module.css'


export default {
  title: 'Components/TooltipV2/Features',
  component: Tooltip,
}

export const LabelType = () => (
  <div>
    <Tooltip text="Contribution Documentation for 'Primer React'" type="label">
      <Link href="https://github.com/primer/react/contributor-docs/CONTRIBUTING.md" className={classes.LabelLink}>
        <Octicon icon={BookIcon} className={classes.LabelIcon} />
      </Link>
    </Tooltip>
  </div>
)
