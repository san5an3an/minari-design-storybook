// @ts-nocheck
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
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

const sharedArgTypes = {
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
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  ordered: {
    control: {
      type: 'boolean',
    },
  },
  isFlush: {
    control: {
      type: 'boolean',
    },
  },
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
  onHeadingClick: {
    action: 'onHeadingClick',
    control: false,
  },
};

const sharedArgs = {
  align: 'end',
  disabled: false,
  isFlush: false,
  ordered: false,
  size: 'md',
  onHeadingClick: ({ isOpen, event }: OnHeadingClickPayload) => {
    action('onHeadingClick')({
      isOpen,
      type: event.type,
    });
  },
};

export const Default = (args) => {
  const { onHeadingClick, ...restArgs } = args;
  return (
    <Accordion {...restArgs}>
      <AccordionItem title="Choose your plan" onHeadingClick={onHeadingClick}>
        <p>
          Compare plan features and select the option that best matches your
          team&apos;s expected usage.
        </p>
      </AccordionItem>
      <AccordionItem title="Add team members" onHeadingClick={onHeadingClick}>
        <p>
          Invite collaborators by email and assign their workspace roles before
          launch.
        </p>
      </AccordionItem>
      <AccordionItem
        title="Set payment details"
        onHeadingClick={onHeadingClick}>
        <p>
          Add billing information and choose whether to receive invoices by
          email.
        </p>
      </AccordionItem>
      <AccordionItem
        onHeadingClick={onHeadingClick}
        title={
          <span>
            Review and confirm (<em>title can be a node</em>)
          </span>
        }>
        <p>
          Check your setup summary, then confirm to create the workspace for
          your team.
        </p>
      </AccordionItem>
    </Accordion>
  );
};

Default.args = { ...sharedArgs };

Default.argTypes = { ...sharedArgTypes };
