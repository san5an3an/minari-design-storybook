// @ts-nocheck
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';
import {CalendarIcon, CheckIcon, XCircleFillIcon} from '@primer/octicons-react'
import {formControlArgTypes, textInputExcludedControlKeys} from '../utils/story-helpers'
import classes from './TextInput.features.stories.module.css'


export default {
  title: 'Components/TextInput/Features',
}

const Calendar = () => <CalendarIcon aria-label="Calendar" />

export const WithLoadingIndicator = (args: FormControlArgs<TextInputProps>) => {
  return (
    <div>
      <h3>No visual</h3>

      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput value="auto" {...args} />
        </FormControl>
      </div>
      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput value="leading" {...args} loaderPosition="leading" />
        </FormControl>
      </div>
      <div className={classes.MarginBottomLarge}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput value="trailing" {...args} loaderPosition="trailing" />
        </FormControl>
      </div>

      <h3>Leading visual</h3>

      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput leadingVisual={Calendar} {...args} value="auto" />
        </FormControl>
      </div>
      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput leadingVisual={Calendar} {...args} loaderPosition="leading" value="leading" />
        </FormControl>
      </div>
      <div className={classes.MarginBottomLarge}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput leadingVisual={Calendar} {...args} loaderPosition="trailing" value="trailing" />
        </FormControl>
      </div>

      <h3>Trailing visual</h3>
      <FormControl>
        <div className={classes.MarginBottom}>
          <FormControl>
            <FormControl.Label>Default label</FormControl.Label>
            <TextInput trailingVisual={Calendar} {...args} value="auto" />
          </FormControl>
        </div>
        <div className={classes.MarginBottom}>
          <FormControl>
            <FormControl.Label>Default label</FormControl.Label>
            <TextInput trailingVisual={Calendar} {...args} loaderPosition="leading" value="leading" />
          </FormControl>
        </div>
        <div className={classes.MarginBottomLarge}>
          <FormControl>
            <FormControl.Label>Default label</FormControl.Label>
            <TextInput trailingVisual={Calendar} {...args} loaderPosition="trailing" value="trailing" />
          </FormControl>
        </div>
      </FormControl>

      <h3>Both visuals</h3>

      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput size="small" leadingVisual={Calendar} trailingVisual={Calendar} {...args} value="auto" />
        </FormControl>
      </div>
      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput
            leadingVisual={Calendar}
            trailingVisual={Calendar}
            {...args}
            loaderPosition="leading"
            value="leading"
          />
        </FormControl>
      </div>
      <div className={classes.MarginBottom}>
        <FormControl>
          <FormControl.Label>Default label</FormControl.Label>
          <TextInput
            size="large"
            leadingVisual={Calendar}
            trailingVisual={Calendar}
            {...args}
            loaderPosition="trailing"
            value="trailing"
          />
        </FormControl>
      </div>
    </div>
  )
}

WithLoadingIndicator.args = {
  loading: true,
}
WithLoadingIndicator.parameters = {
  controls: {
    exclude: [...textInputExcludedControlKeys, 'loaderPosition', ...Object.keys(formControlArgTypes), 'children'],
  },
}
