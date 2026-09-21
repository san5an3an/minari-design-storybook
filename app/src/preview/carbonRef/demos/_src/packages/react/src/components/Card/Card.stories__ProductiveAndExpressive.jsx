// @ts-nocheck
import { Card } from '@carbon/react/es/components/Card/Card.js';
import { Button } from '@carbon/react';
import { Grid, Column } from '@carbon/react';
import { preview__IconIndicator as IconIndicator } from '@carbon/react';
import './card-story.scss';
import mdx from './Card.mdx';


export default {
  title: 'Preview/preview__Card',
  component: Card,
  subcomponents: {
    CardHeader: Card.Header,
    CardBody: Card.Body,
    CardFooter: Card.Footer,
    CardHeaderMedia: Card.HeaderMedia,
    CardMedia: Card.Media,
    CardTitle: Card.Title,
    CardTitleMedia: Card.TitleMedia,
    CardActions: Card.Actions,
    CardAction: Card.Action,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    renderFooterIcon: { table: { disable: true } },
    density: {
      control: { type: 'select' },
      options: ['productive', 'expressive'],
      description:
        'Density variant: productive uses heading-compact-02, expressive uses heading-03',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Makes the entire card clickable',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the card and all interactive elements',
    },
    horizontal: {
      control: { type: 'boolean' },
      description:
        'Horizontal layout: media on the left, content stacked on the right',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional label rendered above the title (Card.Title)',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text (Card.Title children)',
    },
    description: {
      control: { type: 'text' },
      description: 'Optional description rendered below the title (Card.Title)',
    },
    bodyText: {
      control: { type: 'text' },
      description: 'Body copy (Card.Body children)',
    },
    titleTruncate: {
      control: { type: 'boolean' },
      description: 'Truncate the title text with an ellipsis when it overflows',
    },
    actionCount: {
      control: { type: 'number', min: 0, max: 8 },
      description:
        'Number of icon actions to show in the header (0–8). Rendered as IconButtons inside Card.Actions; overflow collapses into a menu.',
    },
  },
  args: {
    density: 'productive',
    clickable: false,
    disabled: false,
    horizontal: false,
    label: 'Example',
    title: 'Card title',
    description: '',
    bodyText: 'Use the controls panel to customise this card.',
    titleTruncate: false,
    actionCount: 0,
  },
};

const readonlyArgTypes = {
  density: { control: false },
  clickable: { control: false },
  disabled: { control: false },
  horizontal: { control: false },
  label: { control: false },
  title: { control: false },
  description: { control: false },
  bodyText: { control: false },
  titleTruncate: { control: false },
  actionCount: { control: false },
};

export const ProductiveAndExpressive = () => (
  <Grid withRowGap>
    <Column lg={4} md={4} sm={4}>
      <Card>
        <Card.Header>
          <Card.Title label="Category" description="Uses heading-compact-02">
            Productive Card
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Productive density uses compact headings (heading-compact-02) for a
          more condensed layout.
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              View details
            </Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card density="expressive">
        <Card.Header>
          <Card.Title label="Category" description="Uses heading-03">
            Expressive Card
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Expressive density uses larger headings (heading-03) for a more
          spacious layout.
        </Card.Body>
        <Card.Footer>
          <IconIndicator kind="succeeded" size={16} label="Succeeded" />
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

ProductiveAndExpressive.argTypes = readonlyArgTypes;
