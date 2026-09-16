// @ts-nocheck
import { Stack } from '@primer/react';
import { Spinner } from '@primer/react';
import { AriaStatus } from '@primer/react';
import classes from './Spinner.features.stories.module.css'


export default {
  title: 'Components/Spinner/Features',
  component: Spinner,
} as Meta<typeof Spinner>

export const SuppressScreenReaderText = () => (
  <Stack direction="horizontal" className={classes.SuppressScreenReaderText}>
    <Spinner size="small" srText={null} />
    <AriaStatus>Loading...</AriaStatus>
  </Stack>
)
