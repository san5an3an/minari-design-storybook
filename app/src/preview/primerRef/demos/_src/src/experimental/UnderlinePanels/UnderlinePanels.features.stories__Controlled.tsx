// @ts-nocheck
import {action} from 'storybook/actions'
import {useState} from 'react'
import { UnderlinePanels } from '@primer/react/experimental';
import { useFeatureFlag } from '@primer/react/experimental';
import {
  CodeIcon,
  CommentDiscussionIcon,
  EyeIcon,
  GearIcon,
  GitBranchIcon,
  GitPullRequestIcon,
  GraphIcon,
  PlayIcon,
  ProjectIcon,
  ShieldLockIcon,
  TagIcon,
} from '@primer/octicons-react'


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

export const Controlled = () => {
  const [refType, setRefType] = useState('branch')

  return (
    <>
      <FlagState />
      <UnderlinePanels
        aria-label="Ref type"
        value={refType}
        onChange={({value}) => {
          action('onChange')({value})
          setRefType(value)
        }}
      >
        <UnderlinePanels.Tab value="branch" icon={GitBranchIcon}>
          Branches
        </UnderlinePanels.Tab>
        <UnderlinePanels.Tab value="tag" icon={TagIcon}>
          Tags
        </UnderlinePanels.Tab>
        <UnderlinePanels.Panel value="branch">Find or create a branch…</UnderlinePanels.Panel>
        <UnderlinePanels.Panel value="tag">Search or create a new tag…</UnderlinePanels.Panel>
      </UnderlinePanels>
      <p>
        Selected ref type: <strong>{refType}</strong>
      </p>
    </>
  )
}
