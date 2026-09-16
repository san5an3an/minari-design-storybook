// @ts-nocheck
import { Link } from '@primer/react';


export default {
  title: 'Components/Link/Features',
  component: Link,
} as Meta<ComponentProps<typeof Link>>

export const Inline = () => (
  <div data-a11y-link-underlines="true">
    <Link inline={true} href="#">
      Link
    </Link>
  </div>
)
