// @ts-nocheck
import './story.scss';
import { DefinitionTooltip } from '@carbon/react';
import mdx from './DefinitionTooltip.mdx';


const alignOptions = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];

const deprecatedAlignOptions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'left-bottom',
  'left-top',
  'right-bottom',
  'right-top',
];

const defaultArgs = {
  align: 'bottom-start',
  autoAlign: false,
  defaultOpen: false,
  definition:
    'Uniform Resource Locator; the address of a resource (such as a document or website) on the Internet.',
  openOnHover: true,
};

const argTypes = {
  align: {
    options: alignOptions,
    control: 'select',
  },
  alignDeprecated: {
    name: 'align (deprecated)',
    options: deprecatedAlignOptions,
    control: 'select',
    table: {
      category: 'Deprecated',
    },
  },
  autoAlign: {
    control: 'boolean',
  },
  definition: {
    control: 'text',
  },
  defaultOpen: {
    control: 'boolean',
  },
  openOnHover: {
    control: 'boolean',
  },
};

export default {
  title: 'Components/DefinitionTooltip',
  component: DefinitionTooltip,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      include: Object.keys(argTypes),
    },
    docs: {
      page: mdx,
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="sb-tooltip-story sb-definition-tooltip">
        <Story />
      </div>
    ),
  ],
};
export const Default = (args) => {
  const { align, alignDeprecated, ...rest } = args;
  const resolvedAlign = alignDeprecated || align;
  return (
    <p>
      Custom domains direct requests for your apps in this Cloud Foundry
      organization to a{' '}
      <DefinitionTooltip openOnHover align={resolvedAlign} {...rest}>
        URL
      </DefinitionTooltip>{' '}
      that you own. A custom domain can be a shared domain, a shared subdomain,
      or a shared domain and host.
    </p>
  );
};

Default.args = { ...defaultArgs };
Default.argTypes = { ...argTypes };
