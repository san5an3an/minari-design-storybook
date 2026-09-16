import { Card } from '@carbon/react/es/components/Card/Card.js';
import { Button } from '@carbon/react';
import { IconButton } from '@carbon/react';
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
import placeholder1x1 from './_story-assets/placeholder-1x1.svg';
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

export const WithHorizontalMedia = () => (
  <Grid withRowGap>
    <Column lg={8} md={4} sm={4}>
      <Card horizontal>
        <Card.Media>
          <img
            src={placeholder1x1}
            alt="Placeholder"
            style={{ width: '100%', height: '100%' }}
          />
        </Card.Media>
        <Card.Header>
          <Card.Title label="Get started">
            Generate synthetic tabular data
          </Card.Title>
        </Card.Header>
        <Card.Body>
          Prepare your data and generate synthetic tabular data using
          AI-assisted tooling.
        </Card.Body>
        <Card.Footer>
          <Button kind="tertiary" size="md" renderIcon={ArrowRight}>
            Start
          </Button>
        </Card.Footer>
      </Card>
    </Column>
    <Column lg={8} md={4} sm={4}>
      <Card horizontal>
        <Card.Media mediaWidth="50%">
          <img
            src={placeholder16x9}
            alt="Placeholder"
            style={{ width: '100%', height: '100%' }}
          />
        </Card.Media>
        <Card.Header>
          <Card.Title>Custom media width</Card.Title>
        </Card.Header>
        <Card.Body>
          Pass mediaWidth="50%" to control the media column width. Accepts any
          valid CSS value.
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md" renderIcon={ArrowRight}>
              Learn more
            </Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
    <Column lg={8} md={4} sm={4}>
      <Card horizontal>
        <Card.Header>
          <Card.Title>Content before media</Card.Title>
        </Card.Header>
        <Card.Body>
          When Card.Media appears after the content children in JSX, it is
          rendered on the right.
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md" renderIcon={ArrowRight}>
              Learn more
            </Button>
          </Card.Action>
        </Card.Footer>
        <Card.Media>
          <img
            src={placeholder1x1}
            alt="Placeholder"
            style={{ width: '100%', height: '100%' }}
          />
        </Card.Media>
      </Card>
    </Column>
    <Column lg={8} md={4} sm={4}>
      <Card horizontal density="expressive">
        <Card.Header>
          <Card.HeaderMedia>
            <DirectionFork size="32" />
          </Card.HeaderMedia>
          <Card.Title label="Prepare your data">
            Generate synthetic tabular data
          </Card.Title>
        </Card.Header>
        <Card.Footer>
          <div className="story-time">
            <Time /> 12:00 PM
          </div>
          <Card.Action>
            <IconButton
              label="Next"
              renderIcon={ArrowRight}
              kind="ghost"
              size="md"
            />
          </Card.Action>
        </Card.Footer>
        <Card.Media>
          <img
            src={placeholder1x1}
            alt="Placeholder"
            style={{ width: '100%', height: '100%' }}
          />
        </Card.Media>
      </Card>
    </Column>
  </Grid>
);

WithHorizontalMedia.argTypes = readonlyArgTypes;
