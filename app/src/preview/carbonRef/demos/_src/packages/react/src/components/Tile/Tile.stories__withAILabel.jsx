import './tile-story.scss';
import '../AILabel/ailabel-story.scss';
import { Button } from '@carbon/react';
import { RadioTile } from '@carbon/react';
import { ClickableTile, ExpandableTile, SelectableTile, Tile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';
import { TileGroup } from '@carbon/react';
import {
  Launch,
  ArrowRight,
  View,
  FolderOpen,
  Folders,
  Information,
} from '@carbon/icons-react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import { IconButton } from '@carbon/react';
import mdx from './Tile.mdx';


export default {
  title: 'Components/Tile',
  component: Tile,
  subcomponents: {
    ClickableTile,
    SelectableTile,
    ExpandableTile,
    RadioTile,
    TileGroup,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent,
  },
  argTypes: {
    light: {
      control: {
        type: 'boolean',
      },
      description: 'Light variant',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    slug: {
      table: {
        disable: true,
      },
    },
    decorator: {
      table: {
        disable: true,
      },
    },
    href: {
      control: { type: 'text' },
    },
    clicked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const aiLabel = (
  <AILabel className="ai-label-container">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h2 className="ai-label-heading">84%</h2>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
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

export const withAILabel = {
  argTypes: {
    hasRoundedCorners: {
      control: {
        type: 'boolean',
      },
    },
    decorator: {
      description:
        '**Experimental**: Provide a `decorator` component to be rendered inside the component',
    },
  },
  render: (args) => (
    <>
      <div className="ai-label-tile-container">
        <Tile decorator={aiLabel} id="tile-1" {...args}>
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
            at consectetur turpis mauris gravida penatibus.
          </p>
          <div className="ai-data">
            <div className="data-container">
              <p>Data Quality</p>
              <h3>85%</h3>
            </div>
            <div className="data-container">
              <p>Label text</p>
              <h3>16%</h3>
            </div>
          </div>
        </Tile>
        <ClickableTile
          href="https://www.carbondesignsystem.com/"
          decorator
          id="tile-click"
          renderIcon={ArrowRight}
          {...args}>
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
            at consectetur turpis mauris gravida penatibus.
          </p>
          <div className="ai-data">
            <div className="data-container">
              <p>Data Quality</p>
              <h3>85%</h3>
            </div>
            <div className="data-container">
              <p>Label text</p>
              <h3>16%</h3>
            </div>
          </div>
        </ClickableTile>

        <ExpandableTile
          id="expandable-tile-1"
          tileCollapsedIconText="Interact to Expand tile"
          tileExpandedIconText="Interact to Collapse tile"
          decorator={aiLabel}
          {...args}>
          <TileAboveTheFoldContent>
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris gravida penatibus.
            </p>
            <div className="ai-data">
              <div className="data-container">
                <p>Data Quality</p>
                <h3>85%</h3>
              </div>
              <div className="data-container">
                <p>Label text</p>
                <h3>16%</h3>
              </div>
            </div>
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            <h6>Expanded Section</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere duis fermentum sit
              at consectetur turpis mauris.
            </p>
          </TileBelowTheFoldContent>
        </ExpandableTile>
      </div>

      <div className="ai-label-selectable-tile-container">
        <TileGroup
          defaultSelected="default-selected"
          legend="Selectable Tile Group"
          name="selectable tile group"
          {...args}>
          <div>
            <SelectableTile
              className="ai-label-selectable-tile"
              id="selectable-tile-1"
              decorator={aiLabel}
              {...args}>
              Option 1
            </SelectableTile>
          </div>
          <div>
            <SelectableTile
              className="ai-label-selectable-tile"
              decorator={aiLabel}
              id="selectable-tile-2"
              {...args}>
              Option 2
            </SelectableTile>
          </div>
          <div>
            <SelectableTile
              className="ai-label-selectable-tile"
              decorator={aiLabel}
              id="selectable-tile-3"
              {...args}>
              Option 3
            </SelectableTile>
          </div>
        </TileGroup>
      </div>
      <br />
      <br />
      <div className="ai-label-selectable-tile-container">
        <TileGroup
          defaultSelected="default-selected"
          legend="Radio Tile Group"
          name="radio tile group"
          {...args}>
          <RadioTile
            className="ai-label-radio-tile"
            id="radio-tile-1"
            value="standard"
            decorator={aiLabel}
            {...args}>
            Option 1
          </RadioTile>
          <RadioTile
            className="ai-label-radio-tile"
            id="radio-tile-2"
            value="default-selected"
            decorator={aiLabel}
            {...args}>
            Option 2
          </RadioTile>
          <RadioTile
            className="ai-label-radio-tile"
            id="radio-tile-3"
            value="selected"
            decorator={aiLabel}
            {...args}>
            Option 3
          </RadioTile>
        </TileGroup>
        <br />
      </div>
    </>
  ),
};
