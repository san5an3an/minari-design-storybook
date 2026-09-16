import { RadioButton } from '@carbon/react';
import { RadioButtonGroup } from '@carbon/react';
import { RadioButtonSkeleton } from '@carbon/react';
import { Button } from '@carbon/react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';
import mdx from './RadioButton.mdx';


export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  subcomponents: {
    RadioButtonGroup,
    RadioButtonSkeleton,
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const withAILabel = () => {
  const AILabelFunc = (kind) => (
    <AILabel className="ai-label-container" kind={kind}>
      <AILabelContent>
        <div>
          <p className="secondary">AI Explained</p>
          <h2 className="ai-label-heading">84%</h2>
          <p className="secondary bold">Confidence score</p>
          <p className="secondary">
            Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
          </p>
          <hr />
          <p className="secondary">Model type</p>
          <p className="bold">Foundation model</p>
        </div>
        <AILabelActions>
          <IconButton kind="ghost" label="View">
            <View />
          </IconButton>
          <IconButton kind="ghost" label="Open Folder">
            <FolderOpen />
          </IconButton>
          <IconButton kind="ghost" label="Folders">
            <Folders />
          </IconButton>
          <Button>View details</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  );

  return (
    <div className="ai-label-check-radio-container">
      <RadioButtonGroup
        decorator={AILabelFunc('default')}
        orientation="vertical"
        legendText="Group label"
        name="radio-button-group"
        defaultSelected="radio-1">
        <RadioButton
          labelText="Radio button label"
          value="radio-1"
          id="radio-1"
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-2"
          id="radio-2"
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-3"
          id="radio-3"
        />
      </RadioButtonGroup>

      <RadioButtonGroup
        orientation="vertical"
        legendText="Group label"
        name="radio-button-group-2"
        defaultSelected="radio-4">
        <RadioButton
          labelText="Radio button label"
          value="radio-4"
          id="radio-4"
          decorator={AILabelFunc()}
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-5"
          id="radio-5"
          decorator={AILabelFunc()}
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-6"
          id="radio-6"
        />
      </RadioButtonGroup>

      <RadioButtonGroup
        orientation="vertical"
        legendText="Group label"
        name="radio-button-group-3"
        defaultSelected="radio-7">
        <RadioButton
          labelText="Radio button label"
          value="radio-7"
          id="radio-7"
          decorator={AILabelFunc('inline')}
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-8"
          id="radio-8"
          decorator={AILabelFunc('inline')}
        />
        <RadioButton
          labelText="Radio button label"
          value="radio-9"
          id="radio-9"
        />
      </RadioButtonGroup>
    </div>
  );
};
