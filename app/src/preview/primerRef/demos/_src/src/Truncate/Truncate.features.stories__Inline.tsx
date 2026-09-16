// @ts-nocheck
import { Truncate } from '@primer/react';
import {ArrowLeftIcon, ArrowRightIcon} from '@primer/octicons-react'


export default {
  title: 'Components/Truncate/Features',
  component: Truncate,
} as Meta<typeof Truncate>

export const Inline = () => (
  <>
    <ArrowRightIcon />
    <Truncate title="Inline example text" inline>
      Inline example text
    </Truncate>
    <ArrowLeftIcon />
  </>
)
