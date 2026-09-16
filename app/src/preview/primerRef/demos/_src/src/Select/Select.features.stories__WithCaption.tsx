// @ts-nocheck
import { FormControl } from '@primer/react';
import { Select } from '@primer/react';


export default {
  title: 'Components/Select/Features',
}

export const WithCaption = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <FormControl.Caption>This is a caption</FormControl.Caption>
      <Select>
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
