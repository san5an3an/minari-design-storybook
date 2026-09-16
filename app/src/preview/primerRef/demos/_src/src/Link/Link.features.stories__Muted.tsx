// @ts-nocheck
import { Link } from '@primer/react';


export default {
  title: 'Components/Link/Features',
  component: Link,
} as Meta<ComponentProps<typeof Link>>

export const Muted = () => (
  <Link href="#" muted>
    Link
  </Link>
)
