// @ts-nocheck
import { InlineMessage } from '@primer/react/experimental';


const meta = {
  title: 'Experimental/Components/InlineMessage/Features',
  component: InlineMessage,
} satisfies Meta<typeof InlineMessage>

export default meta

export const Multiline = () => {
  return (
    <div
      style={{
        maxWidth: '30ch',
      }}
    >
      <InlineMessage variant="success">An example inline message that spans multiple lines</InlineMessage>
    </div>
  )
}
