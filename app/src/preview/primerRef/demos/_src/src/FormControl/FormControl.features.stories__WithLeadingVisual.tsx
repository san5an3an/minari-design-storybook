// @ts-nocheck
import { Checkbox } from '@primer/react';
import { FormControl } from '@primer/react';
import {MarkGithubIcon, TriangleDownIcon} from '@primer/octicons-react'
import { Stack } from '@primer/react';


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

export const WithLeadingVisual = () => (
  <Stack gap="none">
    <FormControl>
      <FormControl.Label>Option one</FormControl.Label>
      <FormControl.LeadingVisual>
        <MarkGithubIcon />
      </FormControl.LeadingVisual>
      <Checkbox />
    </FormControl>

    <FormControl>
      <FormControl.Label>Option two</FormControl.Label>
      <FormControl.LeadingVisual>
        <MarkGithubIcon />
      </FormControl.LeadingVisual>
      <Checkbox />
      <FormControl.Caption>This one has a caption</FormControl.Caption>
    </FormControl>

    <FormControl disabled>
      <FormControl.Label>Option three</FormControl.Label>
      <FormControl.LeadingVisual>
        <MarkGithubIcon />
      </FormControl.LeadingVisual>
      <Checkbox />
    </FormControl>

    <FormControl disabled>
      <FormControl.Label>Option four</FormControl.Label>
      <FormControl.LeadingVisual>
        <MarkGithubIcon />
      </FormControl.LeadingVisual>
      <Checkbox />
      <FormControl.Caption>This one has a caption</FormControl.Caption>
    </FormControl>
  </Stack>
)
