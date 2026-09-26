// @ts-nocheck
import {action} from 'storybook/actions'
import {useState} from 'react'
import { UnderlinePanels } from '@primer/react/experimental';
import { useFeatureFlag } from '@primer/react/experimental';
import { AnchoredOverlay } from '@primer/react';
import { Button } from '@primer/react';


export default {
  title: 'Experimental/Components/UnderlinePanels/Features',
  component: UnderlinePanels,
} as Meta<ComponentProps<typeof UnderlinePanels>>

// These stories exercise the controlled API, which is gated. Rather than force the flag on (which
// would override the toolbar), surface its state so the toolbar can be used to compare on vs off.
const FlagState = () => {
  const enabled = useFeatureFlag('primer_react_underline_panels_controlled')

  return enabled ? null : (
    <p>
      <code>primer_react_underline_panels_controlled</code> is <strong>off</strong>, so <code>value</code>,{' '}
      <code>defaultValue</code>, <code>onChange</code>, and <code>activationMode</code> are ignored and tabs fall back
      to positional selection. Toggle the flag in the Storybook toolbar to compare.
    </p>
  )
}

// The tablist implements its own roving tabindex, so disable the overlay's focus zone to stop the
// two from both managing `tabindex` — a competing focus zone can leave every tab at `tabindex="-1"`
// and trap keyboard users.
export const InOverlay = () => {
  const [open, setOpen] = useState(false)
  const [refType, setRefType] = useState('branch')

  return (
    <>
      <FlagState />
      <AnchoredOverlay
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderAnchor={props => <Button {...props}>Select ref type</Button>}
        overlayProps={{role: 'dialog', 'aria-modal': true, 'aria-label': 'Select a ref type', style: {width: '320px'}}}
        focusZoneSettings={{disabled: true}}
      >
        <UnderlinePanels
          aria-label="Ref type"
          value={refType}
          onChange={({value}) => {
            action('onChange')({value})
            setRefType(value)
          }}
        >
          <UnderlinePanels.Tab value="branch">Branches</UnderlinePanels.Tab>
          <UnderlinePanels.Tab value="tag">Tags</UnderlinePanels.Tab>
          <UnderlinePanels.Panel value="branch">Find or create a branch…</UnderlinePanels.Panel>
          <UnderlinePanels.Panel value="tag">Search or create a new tag…</UnderlinePanels.Panel>
        </UnderlinePanels>
      </AnchoredOverlay>
    </>
  )
}
