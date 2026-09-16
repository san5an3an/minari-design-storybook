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

export const PaddingScale = () => (
  <Stack gap="spacious">
    {(['none', 'tight', 'condensed', 'cozy', 'normal', 'spacious'] as const).map(padding => (
      <Stack key={padding}>
        <span style={{fontSize: 'var(--text-body-size-small)', color: 'var(--fgColor-muted)'}}>
          padding=&quot;{padding}&quot;
        </span>
        <Stack padding={padding} style={{backgroundColor: 'var(--bgColor-muted)'}}>
          <Placeholder label="Content" />
        </Stack>
      </Stack>
    ))}
  </Stack>
)
