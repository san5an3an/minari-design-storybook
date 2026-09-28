// @ts-nocheck
import { FormLabel } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import { ActionableNotification } from '@carbon/react';
import { Toggletip, ToggletipButton, ToggletipContent } from '@carbon/react';
import './form-label-stories.scss';
import mdx from './FormLabel.mdx';


export default {
  title: 'Components/FormLabel',
  component: FormLabel,
  args: {
    label: 'Form label',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        category: 'story controls',
      },
    },
    id: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const WithToggletip = ({ align, label, ...formLabelArgs }) => {
  return (
    <>
      <div className="form-wrapper">
        <FormLabel {...formLabelArgs}>{label}</FormLabel>
        <Toggletip align={align}>
          <ToggletipButton label="Show information">
            <Information />
          </ToggletipButton>
          <ToggletipContent>
            This can be used to provide more information about a field.
          </ToggletipContent>
        </Toggletip>
      </div>
      <ActionableNotification
        kind="info"
        hideCloseButton
        lowContrast
        inline
        className="notification"
        aria-label="Accessibility note on form labels"
        actionButtonLabel="Accessibility button note on form labels"
        title="Accessibility note">
        <p>
          <strong>Note:</strong>
          &nbsp; It is not recommended to include interactive items, such as
          links or tooltips, inside a form label for accessibility reasons. For
          this reason, we place the tooltip and toggletip as sibling components
          rather than children. You can read more about this &nbsp;
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#accessibility_concerns">
            here
          </a>
          &nbsp; and &nbsp;
          <a href="https://css-tricks.com/html-inputs-and-labels-a-love-story/#aa-dont-put-interactive-elements-inside-labels">
            here
          </a>
          .
        </p>
      </ActionableNotification>
    </>
  );
};

WithToggletip.args = {
  label: 'Form label with Toggletip',
  align: 'bottom',
};

WithToggletip.argTypes = {
  align: {
    control: { type: 'select' },
    options: [
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
    ],
  },
};
