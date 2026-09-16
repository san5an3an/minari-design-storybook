// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';
import {MarkGithubIcon} from '@primer/octicons-react'


export default {
  title: 'Components/Checkbox/Features',
}

export const WithLeadingVisual = () => {
  return (
    <form>
      <FormControl>
        <FormControl.LeadingVisual>
          <MarkGithubIcon />
        </FormControl.LeadingVisual>
        <Checkbox value="default" />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>
  )
}
