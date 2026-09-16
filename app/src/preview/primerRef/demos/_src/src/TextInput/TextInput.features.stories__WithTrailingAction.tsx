// @ts-nocheck
import {useState} from 'react'
import { FormControl } from '@primer/react';
import { Stack } from '@primer/react';
import { TextInput } from '@primer/react';
import {CalendarIcon, CheckIcon, XCircleFillIcon} from '@primer/octicons-react'


export default {
  title: 'Components/TextInput/Features',
}

export const WithTrailingAction = () => {
  const [value, setValue] = useState('sample text')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <form>
      <FormControl>
        <FormControl.Label>Default label</FormControl.Label>
        <TextInput
          value={value}
          onChange={handleChange}
          trailingAction={
            <Stack justify="center" style={{minWidth: '34px'}}>
              {value.length ? (
                <TextInput.Action onClick={() => setValue('')} icon={XCircleFillIcon} aria-label="Clear input" />
              ) : undefined}
            </Stack>
          }
        />
      </FormControl>
    </form>
  )
}
