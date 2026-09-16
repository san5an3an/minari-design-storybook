// @ts-nocheck
import { InlineMessage } from '@primer/react/experimental';


const meta = {
  title: 'Experimental/Components/InlineMessage',
  component: InlineMessage,
} satisfies Meta<typeof InlineMessage>

export default meta

export const Default = () => {
  return <InlineMessage variant="unavailable">An example inline message</InlineMessage>
}
