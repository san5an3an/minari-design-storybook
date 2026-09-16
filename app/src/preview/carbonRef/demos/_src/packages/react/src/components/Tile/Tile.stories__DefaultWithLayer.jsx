import './tile-story.scss';
import '../AILabel/ailabel-story.scss';
import { WithLayer } from '../../../.storybook/templates/WithLayer';
import { Link } from '@carbon/react';
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

export const Default = (args) => {
  return (
    <Tile id="tile-1" {...args}>
      Default tile
      <br />
      <br />
      <Link href="https://www.carbondesignsystem.com">Link</Link>
    </Tile>
  );
};

Default.args = {
  light: false,
  clicked: false,
  disabled: false,
  hasRoundedCorners: false,
  href: '',
  selected: false,
  title: '',
};

export const DefaultWithLayer = (args) => (
  <WithLayer>
    {(layer) => (
      <Tile id={`tile-${layer}`} {...args}>
        Default tile
        <br />
        <br />
        <Link href="https://www.carbondesignsystem.com">Link</Link>
      </Tile>
    )}
  </WithLayer>
);

DefaultWithLayer.args = {
  ...Default.args,
};
