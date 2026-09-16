// @ts-nocheck
import { Spinner } from '@primer/react';


export default {
  title: 'Components/Spinner/Features',
  component: Spinner,
} as Meta<typeof Spinner>

export const WithDelay = () => <Spinner delay="long" />
