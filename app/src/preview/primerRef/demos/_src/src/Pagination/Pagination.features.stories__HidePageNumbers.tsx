// @ts-nocheck
import { Pagination } from '@primer/react';


export default {
  title: 'Components/Pagination/Features',
  component: Pagination,
} as Meta<ComponentProps<typeof Pagination>>

export const HidePageNumbers = () => (
  <Pagination pageCount={15} currentPage={5} showPages={false} onPageChange={e => e.preventDefault()} />
)
