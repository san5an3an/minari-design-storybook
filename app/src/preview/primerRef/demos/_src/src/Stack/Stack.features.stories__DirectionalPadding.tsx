// @ts-nocheck
import { Stack } from '@primer/react';


export default {
  title: 'Components/Stack/Features',
  component: Stack,
} as Meta<typeof Stack>

const Placeholder = ({label}: {label: string}) => (
  <div
    style={{
      padding: 'var(--base-size-8) var(--base-size-16)',
      backgroundColor: 'var(--bgColor-accent-muted)',
      border: '1px solid var(--borderColor-accent-muted)',
      borderRadius: 'var(--borderRadius-medium)',
      fontSize: 'var(--text-body-size-small)',
    }}
  >
    {label}
  </div>
)

export const DirectionalPadding = () => (
  <Stack gap="normal">
    <Stack padding="normal" style={{backgroundColor: 'var(--bgColor-muted)'}}>
      <Placeholder label='padding="normal" (all sides)' />
    </Stack>
    <Stack padding="normal" paddingInline="spacious" style={{backgroundColor: 'var(--bgColor-muted)'}}>
      <Placeholder label='padding="normal" paddingInline="spacious"' />
    </Stack>
    <Stack paddingBlock="condensed" paddingInline="spacious" style={{backgroundColor: 'var(--bgColor-muted)'}}>
      <Placeholder label='paddingBlock="condensed" paddingInline="spacious"' />
    </Stack>
  </Stack>
)
