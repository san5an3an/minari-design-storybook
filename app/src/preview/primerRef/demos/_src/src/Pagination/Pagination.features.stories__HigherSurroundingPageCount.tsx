// @ts-nocheck
import { Pagination } from '@primer/react';


export default {
  title: 'Components/Pagination/Features',
  component: Pagination,
} as Meta<ComponentProps<typeof Pagination>>

export const HigherSurroundingPageCount = () => (
  <Pagination pageCount={15} currentPage={5} surroundingPageCount={4} onPageChange={e => e.preventDefault()} />
)
