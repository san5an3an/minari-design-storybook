import { CodeSnippet } from '@carbon/react';
import mdx from './CodeSnippet.mdx';


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

const typeArgType = {
  control: 'radio',
  options: ['single', 'inline', 'multi'],
  table: { defaultValue: { summary: '"single"' } },
};

const variantArgTypes = {
  type: {
    ...typeArgType,
    table: {
      ...typeArgType.table,
      readonly: true,
    },
  },
};

export default {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    align: {
      control: 'select',
      options: alignOptions,
      table: { defaultValue: { summary: '"bottom"' } },
    },
    autoAlign: {
      table: { defaultValue: { summary: false } },
    },
    'aria-label': {
      table: { defaultValue: { summary: '"Copy to clipboard"' } },
    },
    copyButtonDescription: {
      table: { defaultValue: { summary: '"Copy to clipboard"' } },
    },
    disabled: {
      table: { defaultValue: { summary: false } },
    },
    feedback: {
      table: { defaultValue: { summary: '"Copied!"' } },
    },
    feedbackTimeout: {
      table: { defaultValue: { summary: 2000 } },
    },
    hideCopyButton: {
      table: { defaultValue: { summary: false } },
    },
    light: {
      table: {
        disable: true,
      },
    },
    type: typeArgType,
    text: {
      control: 'text',
      description: 'Specify the text that is inside the code snippet',
    },
    maxCollapsedNumberOfRows: {
      table: { defaultValue: { summary: 15 } },
    },
    maxExpandedNumberOfRows: {
      table: { defaultValue: { summary: 0 } },
    },
    minCollapsedNumberOfRows: {
      table: { defaultValue: { summary: 3 } },
    },
    minExpandedNumberOfRows: {
      table: { defaultValue: { summary: 16 } },
    },
    showLessText: {
      table: { defaultValue: { summary: '"Show less"' } },
    },
    showMoreText: {
      table: { defaultValue: { summary: '"Show more"' } },
    },
    wrapText: {
      table: { defaultValue: { summary: false } },
    },
  },
};

const codeSnippetArgs = {
  align: 'bottom',
  autoAlign: false,
  'aria-label': 'Copy to clipboard',
  copyButtonDescription: 'Copy to clipboard',
  copyText: '',
  disabled: false,
  feedback: 'Copied to clipboard',
  feedbackTimeout: 2000,
  hideCopyButton: false,
  maxCollapsedNumberOfRows: 15,
  maxExpandedNumberOfRows: 0,
  minCollapsedNumberOfRows: 3,
  minExpandedNumberOfRows: 16,
  showLessText: 'Show less',
  showMoreText: 'Show more',
  text: 'node -v',
  type: 'single',
  wrapText: false,
};

const codeSnippetParameters = {
  controls: {
    include: Object.keys(codeSnippetArgs),
  },
};

const renderCodeSnippet = ({ text, ...args }) => (
  <CodeSnippet {...args}>{text}</CodeSnippet>
);

export const Inline = {
  args: {
    ...codeSnippetArgs,
    type: 'inline',
  },
  argTypes: variantArgTypes,
  parameters: codeSnippetParameters,
  render: renderCodeSnippet,
};
