// @ts-nocheck
import { Radio } from '@primer/react';
import { RadioGroup } from '@primer/react';
import { FormControl } from '@primer/react';
import classes from './RadioGroup.features.stories.module.css'


export default {
  title: 'Components/RadioGroup/Features',
}

export const WithExternalLabel = () => (
  <>
    <div id="choiceHeading" className={classes.ExternalLabel}>
      External label
    </div>
    <RadioGroup aria-labelledby="choiceHeading" name="defaultRadioGroup">
      <FormControl>
        <Radio value="one" />
        <FormControl.Label>Choice one</FormControl.Label>
      </FormControl>
      <FormControl>
        <Radio value="two" />
        <FormControl.Label>Choice two</FormControl.Label>
      </FormControl>
      <FormControl>
        <Radio value="three" />
        <FormControl.Label>Choice three</FormControl.Label>
      </FormControl>
    </RadioGroup>
  </>
)
