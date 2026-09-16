// @ts-nocheck
import { LabelGroup } from '@primer/react';
import { Label } from '@primer/react';
import classes from './LabelGroup.stories.module.css'


const meta: Meta = {
  title: 'Components/LabelGroup/Features',
  component: LabelGroup,
}

const ResizableContainer = ({children, ...props}: {children: React.ReactNode}) => (
  <div className={classes.ResizableContainer} {...props}>
    {children}
  </div>
)

export const TruncateAutoExpandInline: StoryFn = () => (
  <ResizableContainer>
    <LabelGroup visibleChildCount="auto" overflowStyle="inline">
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
      <Label>Four</Label>
      <Label>Five</Label>
      <Label>Six</Label>
      <Label>Seven</Label>
      <Label>Eight</Label>
      <Label>Nine</Label>
      <Label>Ten</Label>
      <Label>Eleven</Label>
      <Label>Twelve</Label>
      <Label>Thirteen</Label>
      <Label>Fourteen</Label>
      <Label>Fifteen</Label>
      <Label>Sixteen</Label>
    </LabelGroup>
  </ResizableContainer>
)

export default meta
