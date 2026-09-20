// @ts-nocheck
import React, { useRef } from 'react';
import { usePrefix } from '@carbon/react';
import { Menu, MenuItem } from '@carbon/react';
import { useContextMenu } from '@carbon/react';
import mdx from './useContextMenu.mdx';


export default {
  title: 'Hooks/useContextMenu',
  component: useContextMenu,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const SpecificElement = () => {
  const prefix = usePrefix();

  const el = useRef(null);
  const menuProps = useContextMenu(el);

  return (
    <>
      <div
        ref={el}
        style={{
          cursor: 'context-menu',
          display: 'inline',
          padding: '0.5rem 1rem',
          backgroundColor: `var(--${prefix}-layer-01)`,
        }}>
        Right click this element
      </div>
      <Menu {...menuProps}>
        <MenuItem label="Edit" />
        <MenuItem label="Delete" kind="danger" />
      </Menu>
    </>
  );
};
