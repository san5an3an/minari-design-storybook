// @ts-nocheck
import React, { useState } from 'react';
import { action } from 'storybook/actions';
import './story.scss';
import { Accordion, AccordionItem, AccordionSkeleton } from '@carbon/react';
import { Button } from '@carbon/react';
import { ButtonSet } from '@carbon/react';
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

export const Controlled = (args) => {
  const { onHeadingClick, ...restArgs } = args;
  const accordionItemIds = ['plan', 'members', 'payment', 'review'] as const;
  type AccordionItemId = (typeof accordionItemIds)[number];

  const [openItems, setOpenItems] = useState(() => new Set<AccordionItemId>());

  const handleHeadingClick =
    (id: AccordionItemId) =>
    ({ isOpen, event }: OnHeadingClickPayload) => {
      setOpenItems((prev) => {
        const nextOpenItems = new Set(prev);

        if (isOpen) {
          nextOpenItems.add(id);
        } else {
          nextOpenItems.delete(id);
        }

        return nextOpenItems;
      });

      if (onHeadingClick) {
        onHeadingClick({ isOpen, event });
      }
    };

  return (
    <>
      <ButtonSet className={'controlled-accordion-btnset'}>
        <Button
          className={'controlled-accordion-btn'}
          onClick={() => {
            setOpenItems(new Set(accordionItemIds));
          }}>
          Open all
        </Button>
        <Button
          className={'controlled-accordion-btn'}
          onClick={() => {
            setOpenItems(new Set());
          }}>
          Close all
        </Button>
      </ButtonSet>

      <Accordion {...restArgs}>
        <AccordionItem
          title="Choose your plan"
          open={openItems.has('plan')}
          onHeadingClick={handleHeadingClick('plan')}>
          <p>
            Compare plan features and select the option that best matches your
            team&apos;s expected usage.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Add team members"
          open={openItems.has('members')}
          onHeadingClick={handleHeadingClick('members')}>
          <p>
            Invite collaborators by email and assign their workspace roles
            before launch.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Set payment details"
          open={openItems.has('payment')}
          onHeadingClick={handleHeadingClick('payment')}>
          <p>
            Add billing information and choose whether to receive invoices by
            email.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Review and confirm"
          open={openItems.has('review')}
          onHeadingClick={handleHeadingClick('review')}>
          <p>
            Check your setup summary, then confirm to create the workspace for
            your team.
          </p>
        </AccordionItem>
      </Accordion>
    </>
  );
};

Controlled.args = { ...sharedArgs };

Controlled.argTypes = { ...sharedArgTypes };
