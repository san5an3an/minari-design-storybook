import './tile-story.scss';
import '../AILabel/ailabel-story.scss';
import { RadioTile } from '@carbon/react';
import { ClickableTile, ExpandableTile, SelectableTile, Tile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';
import { TileGroup } from '@carbon/react';
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

export const Radio = (args) => {
  return (
    <TileGroup
      defaultSelected="default-selected"
      legend="Radio Tile Group"
      name="radio tile group"
      {...args}>
      <RadioTile
        id="radio-tile-1"
        value="standard"
        style={{ marginBottom: '.5rem' }}>
        Option 1
      </RadioTile>
      <RadioTile
        id="radio-tile-2"
        value="default-selected"
        style={{ marginBottom: '.5rem' }}>
        Option 2
      </RadioTile>
      <RadioTile id="radio-tile-3" value="selected">
        Option 3
      </RadioTile>
    </TileGroup>
  );
};

Radio.args = {
  disabled: false,
};

Radio.argTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};
