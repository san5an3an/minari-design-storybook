// @ts-nocheck
import {MarkGithubIcon} from '@primer/octicons-react'
import { Avatar } from '@primer/react';
import { FormControl } from '@primer/react';
import { Radio } from '@primer/react';


export default {
  title: 'Components/Radio/Features',
  component: Radio,
}

export const WithLeadingVisual = () => {
  return (
    <form>
      <FormControl>
        <FormControl.LeadingVisual>
          <MarkGithubIcon />
        </FormControl.LeadingVisual>
        <Radio value="default" name="default-radio-name" />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
      <FormControl>
        <FormControl.LeadingVisual>
          <Avatar src={`https://github.com/lukasoppermann.png`} />
        </FormControl.LeadingVisual>
        <Radio value="default" name="default-radio-name" />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>
  )
}
