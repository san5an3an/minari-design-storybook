// @ts-nocheck
import { Pagination } from '@primer/react';


export default {
  title: 'Components/Pagination/Features',
  component: Pagination,
} as Meta<ComponentProps<typeof Pagination>>

export const LargerPageCountMargin = () => (
  <Pagination pageCount={15} currentPage={5} marginPageCount={4} onPageChange={e => e.preventDefault()} />
)
