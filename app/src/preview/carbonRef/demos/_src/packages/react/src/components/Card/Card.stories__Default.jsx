import { Card } from '@carbon/react/es/components/Card/Card.js';
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

const ACTION_ICONS = [
  { icon: Edit, label: 'Edit' },
  { icon: Download, label: 'Download' },
  { icon: Settings, label: 'Settings' },
  { icon: TrashCan, label: 'Delete' },
  { icon: Share, label: 'Share' },
  { icon: Favorite, label: 'Favorite' },
  { icon: Copy, label: 'Copy' },
  { icon: View, label: 'View' },
];

export const Default = {
  render: ({
    label,
    title,
    description,
    bodyText,
    titleTruncate,
    actionCount,
    ...cardArgs
  }) => (
    <Grid>
      <Column lg={4} md={4} sm={4}>
        <Card {...cardArgs}>
          <Card.Media ratio="16x9">
            <img src={placeholder16x9} alt="" width="100%" />
          </Card.Media>
          <Card.Header>
            <Card.Title
              label={label || undefined}
              description={description || undefined}
              titleTruncate={titleTruncate}>
              {title}
            </Card.Title>
            {actionCount > 0 && (
              <Card.Actions>
                {ACTION_ICONS.slice(0, actionCount).map(
                  ({ icon: Icon, label: iconLabel }) => (
                    <Card.Action key={iconLabel}>
                      <IconButton label={iconLabel} kind="ghost" size="sm">
                        <Icon />
                      </IconButton>
                    </Card.Action>
                  )
                )}
              </Card.Actions>
            )}
          </Card.Header>
          <Card.Body>{bodyText}</Card.Body>
        </Card>
      </Column>
    </Grid>
  ),
};
