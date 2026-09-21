// @ts-nocheck
import { Card } from '@carbon/react/es/components/Card/Card.js';
import { Grid, Column } from '@carbon/react';
import {
  Edit,
  TrashCan,
  Analytics,
  Favorite,
  Bee as BeeIcon,
  Share,
  Download,
  Settings,
  Notification,
  View,
  Copy,
  ArrowRight,
  DirectionFork,
  Time,
} from '@carbon/icons-react';
import placeholder16x9 from './_story-assets/placeholder-16x9.svg';
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

export const Clickable = () => (
  <Grid withRowGap>
    {/* Action card — onClick handler */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        onClick={() => alert('Card clicked')}
        aria-labelledby="clickable-title-usage">
        <Card.Media ratio="16x9">
          <img src={placeholder16x9} alt="" width="100%" />
        </Card.Media>
        <Card.Header>
          <Card.Title id="clickable-title-usage" label="Analytics">
            Usage report
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Click anywhere on this card to trigger the action.
        </Card.Body>
      </Card>
    </Column>

    {/* Navigation card — as="a" with href */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        as="a"
        href="https://carbondesignsystem.com"
        target="_blank"
        aria-labelledby="clickable-title-carbon">
        <Card.Media ratio="16x9">
          <img src={placeholder16x9} alt="" width="100%" />
        </Card.Media>
        <Card.Header>
          <Card.Title id="clickable-title-carbon" label="External link">
            Carbon Design System
          </Card.Title>
        </Card.Header>
        <Card.Body>
          This card renders as an <code>&lt;a&gt;</code> element for true
          navigation semantics. Right-click or Cmd+click to open in a new tab.
        </Card.Body>
      </Card>
    </Column>

    {/* Custom icon override */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        onClick={() => alert('Launch clicked')}
        renderFooterIcon={Share}
        aria-labelledby="clickable-title-share">
        <Card.Header>
          <Card.Title id="clickable-title-share" label="Share">
            Share report
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Pass <code>renderFooterIcon</code> to replace the default arrow with
          any icon from <code>@carbon/icons-react</code>.
        </Card.Body>
      </Card>
    </Column>

    {/* Disabled clickable card */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        disabled
        onClick={() => alert('Should not fire')}
        aria-labelledby="clickable-title-disabled">
        <Card.Header>
          <Card.Title id="clickable-title-disabled" label="Status">
            Disabled card
          </Card.Title>
        </Card.Header>
        <Card.Body>
          When <code>disabled</code> is true the card is not interactive and the
          footer affordance is visually muted.
        </Card.Body>
      </Card>
    </Column>

    {/* Expressive density */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        density="expressive"
        onClick={() => alert('Expressive card clicked')}
        aria-labelledby="clickable-title-launch">
        <Card.Media ratio="16x9">
          <img src={placeholder16x9} alt="" width="100%" />
        </Card.Media>
        <Card.Header>
          <Card.Title id="clickable-title-launch" label="Featured">
            Product launch
          </Card.Title>
        </Card.Header>
        <Card.Body>Clickable card in expressive density.</Card.Body>
      </Card>
    </Column>

    {/* Clickable card as anchor with custom density */}
    <Column lg={4} md={4} sm={4}>
      <Card
        clickable
        density="expressive"
        as="a"
        href="#"
        aria-labelledby="clickable-title-quarterly">
        <Card.Header>
          <Card.Title id="clickable-title-quarterly" label="Report">
            Quarterly review
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Use <code>as="a"</code> with <code>density="expressive"</code> for
          navigation cards in an editorial layout.
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

Clickable.argTypes = readonlyArgTypes;
