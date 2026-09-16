// @ts-nocheck
import { Link } from '@primer/react';


export default {
  title: 'Components/Link',
  component: Link,
} as Meta<ComponentProps<typeof Link> & {text: string}>

export const Default = () => <Link href="#">Links are great</Link>
