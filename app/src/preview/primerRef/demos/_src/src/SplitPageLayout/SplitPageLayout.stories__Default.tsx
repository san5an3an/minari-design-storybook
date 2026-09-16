// @ts-nocheck
import {Placeholder} from '../Placeholder'
import { SplitPageLayout } from '@primer/react';


export default {
  title: 'Components/SplitPageLayout',
  parameters: {
    layout: 'fullscreen',
    controls: {expanded: true},
  },
  argTypes: {
    // Debug controls
    'Render header?': {
      type: 'boolean',
      defaultValue: true,
      table: {category: 'Debug'},
    },
    'Render pane?': {
      type: 'boolean',
      defaultValue: true,
      table: {category: 'Debug'},
    },
    'Render footer?': {
      type: 'boolean',
      defaultValue: true,
      table: {category: 'Debug'},
    },
    'Header placeholder height': {
      type: 'number',
      defaultValue: 64,
      table: {category: 'Debug'},
    },
    'Pane placeholder height': {
      type: 'number',
      defaultValue: 200,
      table: {category: 'Debug'},
    },
    'Content placeholder height': {
      type: 'number',
      defaultValue: 400,
      table: {category: 'Debug'},
    },
    'Footer placeholder height': {
      type: 'number',
      defaultValue: 64,
      table: {category: 'Debug'},
    },

    // Header prop controls
    'Header.divider.regular': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Header props',
      },
    },
    'Header.divider.narrow': {
      type: {
        name: 'enum',
        value: ['none', 'line', 'filled'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Header props',
      },
    },
    'Header.divider.wide': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Header props',
      },
    },
    'Header.padding': {
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal'],
      },
      defaultValue: 'normal',
      control: {type: 'radio'},
      table: {category: 'Header props'},
    },
    'Header.hidden.regular': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Header props'},
    },
    'Header.hidden.narrow': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Header props'},
    },
    'Header.hidden.wide': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Header props'},
    },

    // Content prop controls
    'Content.width': {
      type: {
        name: 'enum',
        value: ['full', 'medium', 'large', 'xlarge'],
      },
      defaultValue: 'xlarge',
      control: {type: 'radio'},
      table: {category: 'Content props'},
    },
    'Content.padding': {
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal'],
      },
      defaultValue: 'normal',
      control: {type: 'radio'},
      table: {category: 'Content props'},
    },
    'Content.hidden.regular': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Content props'},
    },
    'Content.hidden.narrow': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Content props'},
    },
    'Content.hidden.wide': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Content props'},
    },

    // Pane prop controls
    'Pane.position.regular': {
      type: {
        name: 'enum',
        value: ['start', 'end'],
      },
      defaultValue: 'start',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.id': {
      type: 'string',
      defaultValue: 'customId',
      table: {category: 'Pane props'},
    },
    'Pane.position.narrow': {
      type: {
        name: 'enum',
        value: ['start', 'end'],
      },
      defaultValue: 'start',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.position.wide': {
      type: {
        name: 'enum',
        value: ['start', 'end'],
      },
      defaultValue: 'start',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.width': {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.minWidth': {
      type: 'number',
      defaultValue: 256,
      table: {category: 'Pane props'},
    },
    'Pane.sticky': {
      type: 'boolean',
      defaultValue: true,
      table: {category: 'Pane props'},
    },
    'Pane.resizable': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Pane props'},
    },
    'Pane.padding': {
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal'],
      },
      defaultValue: 'normal',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.divider.regular': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.divider.narrow': {
      type: {
        name: 'enum',
        value: ['none', 'line', 'filled'],
      },
      defaultValue: 'line',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },
    'Pane.divider.wide': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {type: 'radio'},
      table: {category: 'Pane props'},
    },

    // Footer prop controls
    'Footer.divider.regular': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Footer props',
      },
    },
    'Footer.divider.narrow': {
      type: {
        name: 'enum',
        value: ['none', 'line', 'filled'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Footer props',
      },
    },
    'Footer.divider.wide': {
      type: {
        name: 'enum',
        value: ['none', 'line'],
      },
      defaultValue: 'line',
      control: {
        type: 'radio',
      },
      table: {
        category: 'Footer props',
      },
    },
    'Footer.padding': {
      type: {
        name: 'enum',
        value: ['none', 'condensed', 'normal'],
      },
      defaultValue: 'normal',
      control: {type: 'radio'},
      table: {category: 'Footer props'},
    },
    'Footer.hidden.regular': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Footer props'},
    },
    'Footer.hidden.narrow': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Footer props'},
    },
    'Footer.hidden.wide': {
      type: 'boolean',
      defaultValue: false,
      table: {category: 'Footer props'},
    },
  },
} as Meta<typeof SplitPageLayout>

export const Default = () => (
  <SplitPageLayout>
    <SplitPageLayout.Header>
      <Placeholder label="Header" height={100} />
    </SplitPageLayout.Header>
    <SplitPageLayout.Pane position="start" aria-label="Pane">
      <Placeholder label="Pane" height={400} />
    </SplitPageLayout.Pane>
    <SplitPageLayout.Content>
      <Placeholder label="Content" height={600} />
    </SplitPageLayout.Content>
    <SplitPageLayout.Footer>
      <Placeholder label="Footer" height={100} />
    </SplitPageLayout.Footer>
  </SplitPageLayout>
)
