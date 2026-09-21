// @ts-nocheck
import './story.scss';
import { Accordion, AccordionItem, AccordionSkeleton } from '@carbon/react';
import mdx from './Accordion.mdx';


export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionSkeleton,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Skeleton = (args) => (
  <AccordionSkeleton open count={4} {...args} />
);

Skeleton.decorators = [
  (story) => <div style={{ width: '500px' }}>{story()}</div>,
];

Skeleton.args = {
  align: 'end',
  isFlush: false,
  ordered: false,
};
Skeleton.parameters = {
  controls: {
    exclude: ['disabled', 'size'],
  },
};

Skeleton.argTypes = {
  align: {
    options: ['start', 'end'],
    control: { type: 'select' },
  },
  children: {
    control: false,
  },
  className: {
    control: false,
  },
  isFlush: {
    control: {
      type: 'boolean',
    },
  },
};
