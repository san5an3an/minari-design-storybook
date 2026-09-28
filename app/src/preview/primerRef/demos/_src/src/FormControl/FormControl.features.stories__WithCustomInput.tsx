// @ts-nocheck
import React, {useState} from 'react'
import { CheckboxGroup } from '@primer/react';
import { FormControl } from '@primer/react';
import classes from './FormControl.features.stories.module.css'


export default {
  title: 'Components/FormControl/Features',
  argTypes: {
    disabled: {
      type: 'boolean',
    },
    required: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
  },
} as Meta

const CustomTextInput = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
) => <input type="text" {...props} />
const CustomCheckboxInput = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>,
) => <input type="checkbox" {...props} />

export const WithCustomInput = () => {
  const [value, setValue] = React.useState('mona lisa')
  const [validationResult, setValidationResult] = React.useState('')
  const doesValueContainSpaces = (inputValue: string) => /\s/g.test(inputValue)
  const handleInputChange = (e: {currentTarget: {value: React.SetStateAction<string>}}) => {
    setValue(e.currentTarget.value)
  }

  React.useEffect(() => {
    if (doesValueContainSpaces(value)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect, react-you-might-not-need-an-effect/no-chain-state-updates
      setValidationResult('noSpaces')
      // eslint-disable-next-line react-you-might-not-need-an-effect/no-event-handler
    } else if (value) {
      // eslint-disable-next-line react-you-might-not-need-an-effect/no-chain-state-updates
      setValidationResult('validName')
    }
  }, [value])

  return (
    <div className={classes.GridContainer}>
      <FormControl>
        <FormControl.Label htmlFor="custom-input">GitHub handle</FormControl.Label>
        <CustomTextInput
          id="custom-input"
          aria-describedby="custom-input-validation custom-input-caption"
          aria-invalid={validationResult === 'noSpaces'}
          onChange={handleInputChange}
        />
        {validationResult === 'noSpaces' && (
          <FormControl.Validation id="custom-input-validation" variant="error">
            GitHub handles cannot contain spaces
          </FormControl.Validation>
        )}
        {validationResult === 'validName' && (
          <FormControl.Validation id="custom-input-validation" variant="success">
            Valid name
          </FormControl.Validation>
        )}
        <FormControl.Caption id="custom-input-caption">
          With or without &quot;@&quot;. For example &quot;monalisa&quot; or &quot;@monalisa&quot;
        </FormControl.Caption>
      </FormControl>

      <CheckboxGroup>
        <CheckboxGroup.Label>Checkboxes</CheckboxGroup.Label>
        <FormControl layout="horizontal">
          <CustomCheckboxInput
            id="custom-checkbox-one"
            aria-describedby="custom-checkbox-one-caption"
            value="checkOne"
          />
          <FormControl.Label htmlFor="custom-checkbox-one">Checkbox one</FormControl.Label>
          <FormControl.Caption id="custom-checkbox-one-caption">Hint text for checkbox one</FormControl.Caption>
        </FormControl>
        <FormControl layout="horizontal">
          <CustomCheckboxInput
            id="custom-checkbox-two"
            aria-describedby="custom-checkbox-two-caption"
            value="checkTwo"
          />
          <FormControl.Label htmlFor="custom-checkbox-two">Checkbox two</FormControl.Label>
          <FormControl.Caption id="custom-checkbox-two-caption">Hint text for checkbox two</FormControl.Caption>
        </FormControl>
      </CheckboxGroup>
    </div>
  )
}
