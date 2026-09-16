// @ts-nocheck
import React, {useState} from 'react'
import { FormControl } from '@primer/react';
import { TextInput } from '@primer/react';


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

export const ValidationExample = () => {
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
    <FormControl>
      <FormControl.Label>GitHub handle</FormControl.Label>
      <TextInput block value={value} onChange={handleInputChange} />
      {validationResult === 'noSpaces' && (
        <FormControl.Validation variant="error">GitHub handles cannot contain spaces</FormControl.Validation>
      )}
      {validationResult === 'validName' && (
        <FormControl.Validation variant="success">Valid name</FormControl.Validation>
      )}
      <FormControl.Caption>
        With or without &quot;@&quot;. For example &quot;monalisa&quot; or &quot;@monalisa&quot;
      </FormControl.Caption>
    </FormControl>
  )
}
