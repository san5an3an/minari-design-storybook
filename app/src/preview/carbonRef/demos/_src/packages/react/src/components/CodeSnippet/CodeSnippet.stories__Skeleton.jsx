import { CodeSnippet, CodeSnippetSkeleton } from '@carbon/react';
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

export const Skeleton = {
  args: {
    type: 'single',
  },
  argTypes: {
    type: {
      control: 'radio',
      description: 'Specify the type of Code Snippet skeleton.',
      options: ['single', 'multi'],
      table: { defaultValue: { summary: '"single"' } },
    },
  },
  parameters: {
    controls: {
      include: ['type'],
    },
  },
  render: (args) => <CodeSnippetSkeleton {...args} />,
};
