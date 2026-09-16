// @ts-nocheck
import { AvatarStack } from '@primer/react';
import { Avatar } from '@primer/react';


export default {
  title: 'Components/AvatarStack/Features',
  component: AvatarStack,
} as Meta<typeof AvatarStack>

export const WithSingleAvatar = () => (
  <AvatarStack>
    <Avatar alt="Primer logo" src="https://avatars.githubusercontent.com/u/7143434?v=4" />
  </AvatarStack>
)
