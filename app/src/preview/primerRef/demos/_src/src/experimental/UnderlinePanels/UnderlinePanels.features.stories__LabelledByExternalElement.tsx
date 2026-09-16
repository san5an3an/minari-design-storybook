// @ts-nocheck
import { UnderlinePanels } from '@primer/react/experimental';


export default {
  title: 'Experimental/Components/UnderlinePanels/Features',
  component: UnderlinePanels,
} as Meta<ComponentProps<typeof UnderlinePanels>>

export const LabelledByExternalElement = () => (
  <>
    <h2 id="my-heading">UnderlinePanels example</h2>
    <UnderlinePanels aria-labelledby="my-heading">
      <UnderlinePanels.Tab>Tab 1</UnderlinePanels.Tab>
      <UnderlinePanels.Tab>Tab 2</UnderlinePanels.Tab>
      <UnderlinePanels.Tab>Tab 3</UnderlinePanels.Tab>
      <UnderlinePanels.Panel>Panel 1</UnderlinePanels.Panel>
      <UnderlinePanels.Panel>Panel 2</UnderlinePanels.Panel>
      <UnderlinePanels.Panel>Panel 3</UnderlinePanels.Panel>
    </UnderlinePanels>
  </>
)
