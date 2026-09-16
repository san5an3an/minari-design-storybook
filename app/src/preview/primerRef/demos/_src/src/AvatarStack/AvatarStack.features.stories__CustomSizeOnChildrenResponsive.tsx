// @ts-nocheck
import { AvatarStack } from '@primer/react';
import { Avatar } from '@primer/react';


export default {
  title: 'Components/AvatarStack/Features',
  component: AvatarStack,
} as Meta<typeof AvatarStack>

// the smallest size of the children avatars will be used at each breakpoint
export const CustomSizeOnChildrenResponsive = () => (
  <AvatarStack>
    <Avatar
      size={{narrow: 16, regular: 32, wide: 48}}
      alt="Primer logo"
      src="https://avatars.githubusercontent.com/u/7143434?v=4"
    />
    <Avatar
      size={{narrow: 32, regular: 48, wide: 64}}
      alt="GitHub logo"
      src="https://avatars.githubusercontent.com/github"
    />
    <Avatar
      size={{narrow: 48, regular: 64, wide: 96}}
      alt="Atom logo"
      src="https://avatars.githubusercontent.com/atom"
    />
    <Avatar
      size={{narrow: 64, regular: 96, wide: 120}}
      alt="GitHub Desktop logo"
      src="https://avatars.githubusercontent.com/u/13171334?v=4"
    />
  </AvatarStack>
)
