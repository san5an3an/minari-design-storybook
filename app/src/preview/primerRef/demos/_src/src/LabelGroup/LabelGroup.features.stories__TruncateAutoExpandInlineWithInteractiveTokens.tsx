// @ts-nocheck
import { LabelGroup } from '@primer/react';
import { Token } from '@primer/react';
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

export const TruncateAutoExpandInlineWithInteractiveTokens: StoryFn = () => (
  <ResizableContainer>
    <LabelGroup visibleChildCount="auto" overflowStyle="inline">
      <Token as="button" text="One" />
      <Token as="button" text="Two" />
      <Token as="button" text="Three" />
      <Token as="button" text="Four" />
      <Token as="button" text="Five" />
      <Token as="button" text="Six" />
      <Token as="button" text="Seven" />
      <Token as="button" text="Eight" />
      <Token as="button" text="Nine" />
      <Token as="button" text="Ten" />
      <Token as="button" text="Eleven" />
      <Token as="button" text="Twelve" />
      <Token as="button" text="Thirteen" />
      <Token as="button" text="Fourteen" />
      <Token as="button" text="Fifteen" />
      <Token as="button" text="Sixteen" />
    </LabelGroup>
  </ResizableContainer>
)

export default meta
