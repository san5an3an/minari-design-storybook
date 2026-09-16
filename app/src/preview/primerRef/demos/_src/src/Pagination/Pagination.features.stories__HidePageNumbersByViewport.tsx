// @ts-nocheck
import { Pagination } from '@primer/react';


export default {
  title: 'Components/Pagination/Features',
  component: Pagination,
} as Meta<ComponentProps<typeof Pagination>>

export const HidePageNumbersByViewport = () => (
  <>
    <Pagination pageCount={15} currentPage={5} showPages={{narrow: false}} onPageChange={e => e.preventDefault()} />
    <p>Page numbers are hidden on narrow viewports.</p>
  </>
)

HidePageNumbersByViewport.parameters = {
  viewport: {
    defaultViewport: 'small',
  },
}
