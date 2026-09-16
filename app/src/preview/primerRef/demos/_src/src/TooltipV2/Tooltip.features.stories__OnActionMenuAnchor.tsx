// @ts-nocheck
import { Button } from '@primer/react';
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';
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

export const OnActionMenuAnchor = () => (
  <div className={classes.ActionMenuRow}>
    <ActionMenu>
      <ActionMenu.Anchor>
        <Tooltip text="Supplementary text to add here" direction="n">
          <Button leadingVisual={GitBranchIcon} trailingAction={TriangleDownIcon}>
            ActionMenu.Anchor w/ t
          </Button>
        </Tooltip>
      </ActionMenu.Anchor>
      <ActionMenu.Overlay width="medium">
        <ActionList>
          <ActionList.Item onSelect={() => alert('Main')}>
            <ActionList.LeadingVisual>
              <CheckIcon />
            </ActionList.LeadingVisual>
            main <ActionList.TrailingVisual>default</ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 1')}>branch-1</ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 2')}>branch-2</ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
    <ActionMenu>
      <Tooltip text="Supplementary text to add here" direction="n">
        <ActionMenu.Button leadingVisual={GitBranchIcon}>ActionMenu.Button w/ t</ActionMenu.Button>
      </Tooltip>
      <ActionMenu.Overlay width="medium">
        <ActionList>
          <ActionList.Item onSelect={() => alert('Main')}>
            <ActionList.LeadingVisual>
              <CheckIcon />
            </ActionList.LeadingVisual>
            main <ActionList.TrailingVisual>default</ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 1')}>branch-1</ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 2')}>branch-2</ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
    <ActionMenu>
      <ActionMenu.Anchor>
        <Button leadingVisual={GitBranchIcon} trailingAction={TriangleDownIcon}>
          ActionMenu.Anchor
        </Button>
      </ActionMenu.Anchor>
      <ActionMenu.Overlay width="medium">
        <ActionList>
          <ActionList.Item onSelect={() => alert('Main')}>
            <ActionList.LeadingVisual>
              <CheckIcon />
            </ActionList.LeadingVisual>
            main <ActionList.TrailingVisual>default</ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 1')}>branch-1</ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 2')}>branch-2</ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
    <ActionMenu>
      <ActionMenu.Button leadingVisual={GitBranchIcon}>ActionMenu.Button</ActionMenu.Button>

      <ActionMenu.Overlay width="medium">
        <ActionList>
          <ActionList.Item onSelect={() => alert('Main')}>
            <ActionList.LeadingVisual>
              <CheckIcon />
            </ActionList.LeadingVisual>
            main <ActionList.TrailingVisual>default</ActionList.TrailingVisual>
          </ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 1')}>branch-1</ActionList.Item>
          <ActionList.Item onSelect={() => alert('Branch 2')}>branch-2</ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  </div>
)
