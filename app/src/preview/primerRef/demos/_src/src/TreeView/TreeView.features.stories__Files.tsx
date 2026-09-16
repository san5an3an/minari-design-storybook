// @ts-nocheck
import {
  DiffAddedIcon,
  DiffModifiedIcon,
  DiffRemovedIcon,
  DiffRenamedIcon,
  FileIcon,
  KebabHorizontalIcon,
} from '@primer/octicons-react'
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

export const Files: StoryFn = () => (
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
          </TreeView.Item>
          <TreeView.Item id="src/Button" current>
            <TreeView.LeadingVisual>
              <TreeView.DirectoryIcon />
            </TreeView.LeadingVisual>
            Button
            <TreeView.SubTree>
              <TreeView.Item id="src/Button/Button.tsx">
                <TreeView.LeadingVisual>
                  <FileIcon />
                </TreeView.LeadingVisual>
                Button.tsx
              </TreeView.Item>
              <TreeView.Item id="src/Button/Button.test.tsx">
                <TreeView.LeadingVisual>
                  <FileIcon />
                </TreeView.LeadingVisual>
                Button.test.tsx
              </TreeView.Item>
            </TreeView.SubTree>
          </TreeView.Item>
          <TreeView.Item id="src/ReallyLongFileNameThatShouldBeTruncated.tsx">
            <TreeView.LeadingVisual>
              <FileIcon />
            </TreeView.LeadingVisual>
            ReallyLongFileNameThatShouldBeTruncated.tsx
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item
        id="public"
        // eslint-disable-next-line no-console
        onExpandedChange={isExpanded => console.log(`${isExpanded ? 'Expanded' : 'Collapsed'} "public" folder `)}
      >
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
          </TreeView.Item>
          <TreeView.Item id="public/favicon.ico">
            <TreeView.LeadingVisual>
              <FileIcon />
            </TreeView.LeadingVisual>
            favicon.ico
          </TreeView.Item>
        </TreeView.SubTree>
      </TreeView.Item>
      <TreeView.Item id="package.json">
        <TreeView.LeadingVisual>
          <FileIcon />
        </TreeView.LeadingVisual>
        package.json
      </TreeView.Item>
    </TreeView>
  </nav>
)

export default meta
