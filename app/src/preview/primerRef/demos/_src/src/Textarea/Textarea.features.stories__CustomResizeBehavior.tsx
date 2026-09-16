// @ts-nocheck
import { FormControl } from '@primer/react';
import { Stack } from '@primer/react';
import { Textarea } from '@primer/react';


export default {
  title: 'Components/Textarea/Features',
}

export const CustomResizeBehavior = () => (
  <Stack as="form">
    <FormControl>
      <FormControl.Label>Resize in either direction (default)</FormControl.Label>
      <Textarea resize="both" />
    </FormControl>
    <FormControl>
      <FormControl.Label>No resize</FormControl.Label>
      <Textarea resize="none" />
    </FormControl>
    <FormControl>
      <FormControl.Label>Horizontal resize</FormControl.Label>
      <Textarea resize="horizontal" />
    </FormControl>
    <FormControl>
      <FormControl.Label>Vertical resize</FormControl.Label>
      <Textarea resize="vertical" />
    </FormControl>
  </Stack>
)
