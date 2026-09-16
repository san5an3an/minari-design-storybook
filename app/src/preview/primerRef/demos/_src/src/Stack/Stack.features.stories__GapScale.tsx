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

export const GapScale = () => (
  <Stack gap="spacious">
    {(['none', 'tight', 'condensed', 'cozy', 'normal', 'spacious'] as const).map(gap => (
      <Stack key={gap}>
        <span style={{fontSize: 'var(--text-body-size-small)', color: 'var(--fgColor-muted)'}}>
          gap=&quot;{gap}&quot;
        </span>
        <Stack direction="horizontal" gap={gap}>
          <Placeholder label="A" />
          <Placeholder label="B" />
          <Placeholder label="C" />
        </Stack>
      </Stack>
    ))}
  </Stack>
)
