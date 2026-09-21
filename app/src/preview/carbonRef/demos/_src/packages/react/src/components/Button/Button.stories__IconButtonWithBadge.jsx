// @ts-nocheck
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
import { Add, Notification, Filter } from '@carbon/icons-react';
import { Button, ButtonSkeleton } from '@carbon/react';
import mdx from './Button.mdx';
import './button-story.scss';


// Note: we explicitly define the defaultValue here, as the Button component takes `props` and forwards them
// to the underlying `button` or `a` element, as a result storybook cannot infer the default values from the component.

// Helper function to get icon component based on string option
const getIconFromString = (iconName) => {
  const icons = {
    Add: (props) => <Add {...props} />,
    Notification: (props) => <Notification {...props} />,
    Filter: (props) => <Filter {...props} />,
  };
  return icons[iconName];
};

const sharedArgTypes = {
  disabled: {
    table: { defaultValue: { summary: false } },
  },
  dangerDescription: {
    table: { defaultValue: { summary: '"danger"' } },
  },
  autoAlign: {
    table: { defaultValue: { summary: false } },
  },
  hasIconOnly: {
    table: { defaultValue: { summary: false } },
  },
  kind: {
    options: [
      'primary',
      'secondary',
      'tertiary',
      'ghost',
      'danger',
      'danger--tertiary',
      'danger--ghost',
    ],
    description:
      'Specify the kind of Button you want to create. `primary`, `secondary`,`tertiary`, `ghost`, `danger`, `danger--tertiary`, `danger--ghost`',
    control: { type: 'select' },
    type: { name: 'union' },
    table: { defaultValue: { summary: '"primary"' } },
  },
  type: {
    type: { name: 'string' },
    table: { defaultValue: { summary: '"button"' } },
  },
  size: {
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    type: {
      name: 'union',
    },
    description:
      'Specify the size of the button, from the following list of sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`',
    control: { type: 'select' },
    table: { defaultValue: { summary: '"lg"' } },
  },
  tooltipAlignment: {
    options: ['start', 'center', 'end'],
    control: { type: 'radio' },
    type: { name: 'union' },
    table: { defaultValue: { summary: '"center"' } },
  },
  tooltipDropShadow: {
    table: { defaultValue: { summary: false } },
  },
  tooltipHighContrast: {
    table: { defaultValue: { summary: true } },
  },
  tooltipPosition: {
    type: { name: 'union' },
    control: { type: 'radio' },
    options: ['top', 'right', 'bottom', 'left'],
    table: { defaultValue: { summary: '"top"' } },
  },
  isExpressive: {
    // TODO: doesn't work on icon buttons, but works for web-components icon buttons, need to investigate
    table: { defaultValue: { summary: false } },
  },
  isSelected: {
    table: { defaultValue: { summary: false } },
  },
  iconDescription: {
    control: 'text',
    type: { name: 'string' },
  },
  badgeCount: {
    description:
      'Optional badge count shown on icon-only buttons. This prop is supported only when `hasIconOnly=true`, `kind="ghost"`, and `size="lg"`.',
    type: { name: 'number' },
    control: { type: 'number', min: 0 },
  },

  renderIcon: {
    control: { type: 'select' },
    options: ['Add', 'None'],
  },
};

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonSkeleton },
  argTypes: sharedArgTypes,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const IconButtonWithBadge = (args) => {
  const { renderIcon, ...rest } = args;
  return (
    <Button
      {...rest}
      renderIcon={
        renderIcon !== 'None' ? getIconFromString(renderIcon) : undefined
      }
      onClick={action('onClick')}>
      Button
    </Button>
  );
};

IconButtonWithBadge.argTypes = {
  ...sharedArgTypes,
  hasIconOnly: {
    description:
      'Specify if the button is an icon-only button. this control must be set to `true` if using the `badgeCount` prop.',
    table: { readonly: true },
  },
  kind: {
    description:
      'Specify the kind of Button you want to create. this control must be set to `ghost` if using the `badgeCount` prop.',
    table: { readonly: true },
  },
  size: {
    description:
      'Specify the size of the button, from the following list of sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`. this control must be set to `lg` if using the `badgeCount` prop',
    table: { readonly: true },
  },
  renderIcon: {
    options: ['Notification'],
  },
};
IconButtonWithBadge.parameters = {
  controls: {
    exclude: ['dangerDescription'],
  },
};

IconButtonWithBadge.args = {
  hasIconOnly: true,
  renderIcon: 'Notification',
  iconDescription: 'Notification',
  badgeCount: 4,
  kind: 'ghost',
  size: 'lg',
};
