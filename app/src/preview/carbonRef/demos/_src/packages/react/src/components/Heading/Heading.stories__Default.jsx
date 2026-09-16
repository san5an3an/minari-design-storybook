import { Section, Heading } from '@carbon/react';
import mdx from './Heading.mdx';


export default {
  title: 'Components/Heading',
  component: Heading,
  subcomponents: {
    Section,
  },
  args: {
    as: 'section',
    level: 2,
  },
  argTypes: {
    as: {
      control: { type: 'text' },
      description:
        'Provide an alternative tag or component to use instead of the default <section> element',
      table: {
        category: 'Section',
      },
    },
    level: {
      control: {
        type: 'select',
      },
      description: 'Overrides the level of the section',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        category: 'Section',
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['children', 'className'],
    },
  },
};

export const Default = (args) => {
  return (
    <>
      <Heading>Project overview</Heading>
      <Section as={args.as} level={args.level}>
        <Heading>Delivery milestones</Heading>
        <Section>
          <Heading>Release readiness</Heading>
        </Section>
      </Section>
    </>
  );
};
