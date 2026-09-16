// @ts-nocheck
import { Stack } from '@primer/react';


const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
}

export default meta

export const Default: Story = {
  render: () => (
    <Stack>
      <div
        style={{
          background: 'var(--display-lemon-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)',
        }}
      >
        First
      </div>
      <div
        style={{
          background: 'var(--display-olive-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)',
        }}
      >
        Second
      </div>
      <div
        style={{
          background: 'var(--display-lime-bgColor-muted)',
          borderRadius: 'var(--borderRadius-medium)',
          padding: 'var(--base-size-8)',
        }}
      >
        Third
      </div>
    </Stack>
  ),
}
