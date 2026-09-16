// @ts-nocheck
import { AvatarStack } from '@primer/react';
import { Avatar } from '@primer/react';


export default {
  title: 'Components/AvatarStack/Features',
  component: AvatarStack,
} as Meta<typeof AvatarStack>

export const CustomSizeOnParent = () => (
  <AvatarStack size={32}>
    <Avatar alt="Primer logo" src="https://avatars.githubusercontent.com/u/7143434?v=4" />
    <Avatar alt="GitHub logo" src="https://avatars.githubusercontent.com/github" />
    <Avatar alt="Atom logo" src="https://avatars.githubusercontent.com/atom" />
    <Avatar alt="GitHub Desktop logo" src="https://avatars.githubusercontent.com/u/13171334?v=4" />
  </AvatarStack>
)
