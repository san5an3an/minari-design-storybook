// @ts-nocheck
import {
  DiffAddedIcon,
  DiffModifiedIcon,
  DiffRemovedIcon,
  DiffRenamedIcon,
  FileIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react'
import { Octicon } from '@primer/react/deprecated';
import { TreeView } from '@primer/react';
import classes from './TreeView.features.stories.module.css'


const meta: Meta = {
  title: 'Components/TreeView/Features',
  component: TreeView,
  decorators: [
    Story => {
      return (
        // Prevent TreeView from expanding to the full width of the screen
        <div className={classes.StorybookDecorator}>
          <Story />
        </div>
      )
    },
  ],
}

export const FilesChanged: StoryFn = () => {
  return (
    <nav aria-label="Files">
      <TreeView aria-label="Files" truncate={false}>
        <TreeView.Item id="src" defaultExpanded>
          <TreeView.LeadingVisual>
            <TreeView.DirectoryIcon />
          </TreeView.LeadingVisual>
          src
          <TreeView.SubTree>
            <TreeView.Item id="src/Avatar.tsx">
              <TreeView.LeadingVisual>
                <FileIcon />
              </TreeView.LeadingVisual>
              Avatar.tsx
              <TreeView.TrailingVisual label="added">
                <Octicon icon={DiffAddedIcon} className={classes.SuccessIcon} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item id="src/Button" defaultExpanded>
              <TreeView.LeadingVisual>
                <TreeView.DirectoryIcon />
              </TreeView.LeadingVisual>
              Button
              <TreeView.SubTree>
                <TreeView.Item id="src/Button/Button.tsx" current>
                  <TreeView.LeadingVisual>
                    <FileIcon />
                  </TreeView.LeadingVisual>
                  Button.tsx
                  <TreeView.TrailingVisual label="modified">
                    <Octicon icon={DiffModifiedIcon} className={classes.AttentionIcon} />
                  </TreeView.TrailingVisual>
                </TreeView.Item>
                <TreeView.Item id="src/Button/Button.test.tsx">
                  <TreeView.LeadingVisual>
                    <FileIcon />
                  </TreeView.LeadingVisual>
                  Button.test.tsx
                  <TreeView.TrailingVisual label="modified">
                    <Octicon icon={DiffModifiedIcon} className={classes.AttentionIcon} />
                  </TreeView.TrailingVisual>
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
            <TreeView.Item id="src/ReallyLongFileNameThatShouldBeTruncated.tsx">
              <TreeView.LeadingVisual>
                <FileIcon />
              </TreeView.LeadingVisual>
              ReallyLongFileNameThatShouldBeTruncated.tsx
              <TreeView.TrailingVisual label="modified">
                <Octicon icon={DiffModifiedIcon} className={classes.AttentionIcon} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
        <TreeView.Item id="public" defaultExpanded>
          <TreeView.LeadingVisual>
            <TreeView.DirectoryIcon />
          </TreeView.LeadingVisual>
          public
          <TreeView.SubTree>
            <TreeView.Item id="public/index.html">
              <TreeView.LeadingVisual>
                <FileIcon />
              </TreeView.LeadingVisual>
              index.html
              <TreeView.TrailingVisual label="renamed">
                <Octicon icon={DiffRenamedIcon} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
            <TreeView.Item id="public/favicon.ico">
              <TreeView.LeadingVisual>
                <FileIcon />
              </TreeView.LeadingVisual>
              favicon.ico
              <TreeView.TrailingVisual label="removed">
                <Octicon icon={DiffRemovedIcon} className={classes.DangerIcon} />
              </TreeView.TrailingVisual>
            </TreeView.Item>
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
    </nav>
  )
}

export default meta
