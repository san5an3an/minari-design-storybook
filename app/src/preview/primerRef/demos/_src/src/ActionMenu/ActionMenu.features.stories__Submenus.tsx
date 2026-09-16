// @ts-nocheck
import { ActionMenu } from '@primer/react';
import { ActionList } from '@primer/react';
import {
  WorkflowIcon,
  ArchiveIcon,
  GearIcon,
  CopyIcon,
  RocketIcon,
  CommentIcon,
  BookIcon,
  SparkleFillIcon,
} from '@primer/octicons-react'


export default {
  title: 'Components/ActionMenu/Features',
}

export const Submenus = () => (
  <ActionMenu>
    <ActionMenu.Button>Edit</ActionMenu.Button>
    <ActionMenu.Overlay>
      <ActionList>
        <ActionList.Item>Cut</ActionList.Item>
        <ActionList.Item>Copy</ActionList.Item>
        <ActionList.Item>Paste</ActionList.Item>
        <ActionMenu>
          <ActionMenu.Anchor>
            <ActionList.Item>
              <ActionList.LeadingVisual>
                <SparkleFillIcon />
              </ActionList.LeadingVisual>
              Paste special
            </ActionList.Item>
          </ActionMenu.Anchor>
          <ActionMenu.Overlay>
            <ActionList>
              <ActionList.Item>Paste plain text</ActionList.Item>
              <ActionList.Item>Paste formulas</ActionList.Item>
              <ActionList.Item>Paste with formatting</ActionList.Item>
              <ActionMenu>
                <ActionMenu.Anchor>
                  <ActionList.Item>Paste from</ActionList.Item>
                </ActionMenu.Anchor>
                <ActionMenu.Overlay>
                  <ActionList>
                    <ActionList.Item>Current clipboard</ActionList.Item>
                    <ActionList.Item>History</ActionList.Item>
                    <ActionList.Item>Another device</ActionList.Item>
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </ActionList>
    </ActionMenu.Overlay>
  </ActionMenu>
)
