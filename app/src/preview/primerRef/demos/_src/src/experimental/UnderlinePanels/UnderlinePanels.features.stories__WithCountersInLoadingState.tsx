// @ts-nocheck
import { UnderlinePanels } from '@primer/react/experimental';


export default {
  title: 'Experimental/Components/UnderlinePanels/Features',
  component: UnderlinePanels,
} as Meta<ComponentProps<typeof UnderlinePanels>>

export const WithCountersInLoadingState = () => {
  return (
    <UnderlinePanels aria-label="Tabs with counters" loadingCounters>
      <UnderlinePanels.Tab counter="11K">Tab 1</UnderlinePanels.Tab>
      <UnderlinePanels.Tab counter={12}>Tab 2</UnderlinePanels.Tab>
      <UnderlinePanels.Panel>Panel 1</UnderlinePanels.Panel>
      <UnderlinePanels.Panel>Panel 2</UnderlinePanels.Panel>
    </UnderlinePanels>
  )
}
