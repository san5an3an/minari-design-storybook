// @ts-nocheck
import { Banner } from '@primer/react';
import {action} from 'storybook/actions'
import { AriaStatus } from '@primer/react';
import { FormControl } from '@primer/react';
import { RadioGroup } from '@primer/react';
import { Radio } from '@primer/react';
import React from 'react'
import classes from './Banner.examples.stories.module.css'


const meta = {
  title: 'Components/Banner/Examples',
  component: Banner,
} satisfies Meta<typeof Banner>

export default meta

export const WithAnnouncement = () => {
  type Choice = 'one' | 'two' | 'three'
  const messages: Map<Choice, string> = new Map([
    ['one', 'This is a message for choice one'],
    ['two', 'This is a message for choice two'],
    ['three', 'This is a message for choice three'],
  ])
  const [selected, setSelected] = React.useState<Choice>('one')

  return (
    <>
      <Banner
        title="Info"
        description={<AriaStatus>{messages.get(selected)}</AriaStatus>}
        onDismiss={action('onDismiss')}
        primaryAction={<Banner.PrimaryAction>Button</Banner.PrimaryAction>}
        secondaryAction={<Banner.SecondaryAction>Button</Banner.SecondaryAction>}
      />
      <RadioGroup
        name="options"
        onChange={selected => {
          setSelected(selected as Choice)
        }}
        className={classes.RadioGroupWithTopMargin}
      >
        <RadioGroup.Label>Choices</RadioGroup.Label>
        <FormControl>
          <Radio value="one" defaultChecked />
          <FormControl.Label>Choice one</FormControl.Label>
        </FormControl>
        <FormControl>
          <Radio value="two" />
          <FormControl.Label>Choice two</FormControl.Label>
        </FormControl>
        <FormControl>
          <Radio value="three" />
          <FormControl.Label>Choice three</FormControl.Label>
        </FormControl>
      </RadioGroup>
    </>
  )
}
