// @ts-nocheck
import { Information } from '@carbon/icons-react';
import { Button } from '@carbon/react';
import { Link } from '@carbon/react';
import { ToggletipLabel, Toggletip, ToggletipButton, ToggletipContent, ToggletipActions } from '@carbon/react';
import mdx from './Toggletip.mdx';


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

export default {
  title: 'Components/Toggletip',
  component: Toggletip,
  subcomponents: {
    ToggletipLabel,
    ToggletipButton,
    ToggletipContent,
    ToggletipActions,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

// Note: autoAlign is used here only to make tooltips visible in StackBlitz,
// autoAlign is in preview and not part of the actual implementation.
export const Default = (args) => {
  const { align, alignDeprecated, ...rest } = args;
  const resolvedAlign = alignDeprecated || align;
  return (
    <>
      <ToggletipLabel>Toggletip label</ToggletipLabel>
      <Toggletip autoAlign align={resolvedAlign} {...rest}>
        <ToggletipButton label="Show information">
          <Information />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <ToggletipActions>
            <Link href="#">Link action</Link>
            <Button size="sm">Button</Button>
          </ToggletipActions>
        </ToggletipContent>
      </Toggletip>
    </>
  );
};

Default.argTypes = {
  align: {
    options: alignOptions,
    control: {
      type: 'select',
    },
  },
  alignDeprecated: {
    name: 'align (deprecated)',
    options: deprecatedAlignOptions,
    control: {
      type: 'select',
    },
    table: {
      category: 'Deprecated',
    },
  },
};

Default.story = {
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {story()}
      </div>
    ),
  ],
};
