// @ts-nocheck
import { Checkbox } from '@primer/react';
import { CheckboxGroup } from '@primer/react';
import { FormControl } from '@primer/react';
import classes from './CheckboxGroup.features.stories.module.css'


export default {
  title: 'Components/CheckboxGroup/Features',
}

export const WithExternalLabel = () => (
  <>
    <div id="choiceHeading" className={classes.ExternalLabel}>
      External label
    </div>
    <CheckboxGroup aria-labelledby="choiceHeading">
      <FormControl>
        <Checkbox />
        <FormControl.Label>Choice one</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox />
        <FormControl.Label>Choice two</FormControl.Label>
      </FormControl>
      <FormControl>
        <Checkbox />
        <FormControl.Label>Choice three</FormControl.Label>
      </FormControl>
    </CheckboxGroup>
  </>
)
