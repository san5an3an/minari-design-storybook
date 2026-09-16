// @ts-nocheck
import { FormControl } from '@primer/react';
import { Select } from '@primer/react';


export default {
  title: 'Components/Select/Features',
}

export const Small = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Select size="small">
        <Select.Option value="one">Choice one</Select.Option>
        <Select.Option value="two">Choice two</Select.Option>
        <Select.Option value="three">Choice three</Select.Option>
        <Select.Option value="four">Choice four</Select.Option>
        <Select.Option value="five">Choice five</Select.Option>
        <Select.Option value="six">Choice six</Select.Option>
      </Select>
    </FormControl>
  </form>
)
