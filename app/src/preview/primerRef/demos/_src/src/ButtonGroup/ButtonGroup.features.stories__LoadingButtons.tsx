// @ts-nocheck
import { ButtonGroup } from '@primer/react';
import { Button } from '@primer/react';
import { Tooltip } from '@primer/react';


export default {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>

export const LoadingButtons = () => {
  const handleClick = () => {}
  return (
    <ButtonGroup>
      <Button loading={true} onClick={handleClick}>
        Button 1
      </Button>
      <Button onClick={handleClick}>Button 2</Button>
      <Tooltip text="Additional info about the button">
        <Button onClick={handleClick}>Button 3</Button>
      </Tooltip>
    </ButtonGroup>
  )
}
