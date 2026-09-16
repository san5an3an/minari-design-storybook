// @ts-nocheck
import { ButtonGroup } from '@primer/react';
import { Button } from '@primer/react';


export default {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const AsToolbar = () => (
  <ButtonGroup role="toolbar">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
)
