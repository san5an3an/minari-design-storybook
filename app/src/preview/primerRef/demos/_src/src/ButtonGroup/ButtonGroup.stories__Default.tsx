// @ts-nocheck
import { ButtonGroup } from '@primer/react';
import { Button } from '@primer/react';


export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    as: {table: {disable: true}},
    ref: {table: {disable: true}},
    theme: {table: {disable: true}},
    forwardedAs: {table: {disable: true}},
    sx: {table: {disable: true}},
  },
} as Meta<typeof ButtonGroup>

export const Default = () => (
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
)
