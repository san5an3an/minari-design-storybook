// @ts-nocheck
import {useState} from 'react'
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';


export default {
  title: 'Components/Checkbox/Features',
}

export const Indeterminate = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(true)
  return (
    <form>
      <FormControl>
        <Checkbox
          value="default"
          indeterminate={isIndeterminate}
          onChange={() => {
            setIsIndeterminate(!isIndeterminate)
          }}
          checked={false}
        />
        <FormControl.Label>Default label</FormControl.Label>
      </FormControl>
    </form>
  )
}
