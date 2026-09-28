// @ts-nocheck
import { Details } from '@primer/react';
import { Button } from '@primer/react';
import { useDetails } from '@primer/react';


export default {
  title: 'Components/Details',
  component: Details,
} as Meta<typeof Details>
export const Default: StoryFn<typeof Details> = () => {
  const {getDetailsProps} = useDetails({closeOnOutsideClick: true})
  return (
    <Details {...getDetailsProps()}>
      <Details.Summary as={Button}>See Details</Details.Summary>
      This is some content
    </Details>
  )
}
