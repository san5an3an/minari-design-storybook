// @ts-nocheck
import { UnderlineNav } from '@primer/react';


const meta = {
  title: 'Components/UnderlineNav/Features',
} satisfies Meta<typeof UnderlineNav>

export default meta

export const VariantFlush = () => {
  return (
    <UnderlineNav aria-label="Repository" variant="flush">
      <UnderlineNav.Item aria-current="page">Code</UnderlineNav.Item>
      <UnderlineNav.Item>Issues</UnderlineNav.Item>
      <UnderlineNav.Item>Pull Requests</UnderlineNav.Item>
    </UnderlineNav>
  )
}
