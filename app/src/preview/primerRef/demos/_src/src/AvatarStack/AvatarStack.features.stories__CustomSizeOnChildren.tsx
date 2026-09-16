// @ts-nocheck
import { AvatarStack } from '@primer/react';
import { Avatar } from '@primer/react';


export default {
  title: 'Components/AvatarStack/Features',
  component: AvatarStack,
} as Meta<typeof AvatarStack>

// the smallest size of the children avatars will be used
export const CustomSizeOnChildren = () => (
  <AvatarStack>
    <Avatar size={20} alt="Primer logo" src="https://avatars.githubusercontent.com/u/7143434?v=4" />
    <Avatar size={32} alt="GitHub logo" src="https://avatars.githubusercontent.com/github" />
    <Avatar size={48} alt="Atom logo" src="https://avatars.githubusercontent.com/atom" />
    <Avatar size={64} alt="GitHub Desktop logo" src="https://avatars.githubusercontent.com/u/13171334?v=4" />
  </AvatarStack>
)
