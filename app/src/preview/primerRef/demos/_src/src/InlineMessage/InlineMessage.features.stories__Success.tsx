// @ts-nocheck
import { InlineMessage } from '@primer/react/experimental';


const meta = {
  title: 'Experimental/Components/InlineMessage/Features',
  component: InlineMessage,
} satisfies Meta<typeof InlineMessage>

export default meta

export const Success = () => {
  return <InlineMessage variant="success">An example inline message</InlineMessage>
}
