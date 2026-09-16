// @ts-nocheck
import { FormControl } from '@primer/react';
import { Select } from '@primer/react';


export default {
  title: 'Components/Select/Features',
}

export const WithOptionGroups = () => (
  <form>
    <FormControl>
      <FormControl.Label>Default label</FormControl.Label>
      <Select>
        <Select.OptGroup label="Group one">
          <Select.Option value="one">Choice one</Select.Option>
          <Select.Option value="two">Choice two</Select.Option>
          <Select.Option value="three">Choice three</Select.Option>
          <Select.Option value="four">Choice four</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup disabled label="Group two">
          <Select.Option value="five">Choice five</Select.Option>
          <Select.Option value="six">Choice six</Select.Option>
        </Select.OptGroup>
      </Select>
    </FormControl>
  </form>
)
