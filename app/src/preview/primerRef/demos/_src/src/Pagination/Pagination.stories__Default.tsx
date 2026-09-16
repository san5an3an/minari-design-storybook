// @ts-nocheck
import {useState} from 'react'
import { Pagination } from '@primer/react';


export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta<ComponentProps<typeof Pagination>>

export const Default = () => {
  const [page, setPage] = useState(2)

  return (
    <Pagination
      pageCount={15}
      currentPage={page}
      onPageChange={(e, n) => {
        e.preventDefault()
        setPage(n)
      }}
      showPages={{narrow: false}}
    />
  )
}
