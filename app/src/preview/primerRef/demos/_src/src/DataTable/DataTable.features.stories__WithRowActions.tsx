// @ts-nocheck
import { action } from '../../../_stub/storybookActions';
import { IconButton, VisuallyHidden } from '@primer/react';
import { PencilIcon, TrashIcon } from '@primer/octicons-react';
import { Button } from '@primer/react';
import { DataTable, Table } from '@primer/react/experimental';
import { Label } from '@primer/react';
import { LabelGroup } from '@primer/react';
import { RelativeTime } from '@primer/react';


export default {
  title: 'Experimental/Components/DataTable/Features',
  component: DataTable,
} as Meta<typeof DataTable>

const now = Date.now()
const Second = 1000
const Minute = 60 * Second
const Hour = 60 * Minute
const Day = 24 * Hour
const Week = 7 * Day
const Month = 4 * Week

const data: Array<Repo> = [
  {
    id: 1,
    name: 'codeql-dca-worker',
    type: 'internal',
    updatedAt: now,
    securityFeatures: {
      dependabot: ['alerts', 'security updates'],
      codeScanning: ['report secrets'],
    },
  },
  {
    id: 2,
    name: 'aegir',
    type: 'public',
    updatedAt: now - 5 * Minute,
    securityFeatures: {
      dependabot: ['alerts'],
      codeScanning: ['report secrets'],
    },
  },
  {
    id: 3,
    name: 'strapi',
    type: 'public',
    updatedAt: now - 1 * Hour,
    securityFeatures: {
      dependabot: [],
      codeScanning: [],
    },
  },
  {
    id: 4,
    name: 'codeql-ci-nightlies',
    type: 'public',
    updatedAt: now - 6 * Hour,
    securityFeatures: {
      dependabot: ['alerts'],
      codeScanning: [],
    },
  },
  {
    id: 5,
    name: 'dependabot-updates',
    type: 'public',
    updatedAt: now - 1 * Day,
    securityFeatures: {
      dependabot: [],
      codeScanning: [],
    },
  },
  {
    id: 6,
    name: 'tsx-create-react-app',
    type: 'public',
    updatedAt: now - 1 * Week,
    securityFeatures: {
      dependabot: [],
      codeScanning: [],
    },
  },
  {
    id: 7,
    name: 'bootstrap',
    type: 'public',
    updatedAt: now - 1 * Month,
    securityFeatures: {
      dependabot: ['alerts'],
      codeScanning: [],
    },
  },
  {
    id: 8,
    name: 'docker-templates',
    type: 'public',
    updatedAt: 1725494400000, // '2024-09-05T00:00:00.000Z'
    securityFeatures: {
      dependabot: ['alerts'],
      codeScanning: [],
    },
  },
]

function uppercase(input: string): string {
  return input[0].toUpperCase() + input.slice(1)
}


export const WithRowActions = () => (
  <Table.Container>
    <Table.Title as="h2" id="repositories">
      Repositories
    </Table.Title>
    <Table.Subtitle as="p" id="repositories-subtitle">
      A subtitle could appear here to give extra context to the data.
    </Table.Subtitle>
    <DataTable
      aria-labelledby="repositories"
      aria-describedby="repositories-subtitle"
      data={data}
      columns={[
        {
          header: 'Repository',
          field: 'name',
          rowHeader: true,
        },
        {
          header: 'Type',
          field: 'type',
          renderCell: (row) => {
            return <Label>{uppercase(row.type)}</Label>
          },
        },
        {
          header: 'Updated',
          field: 'updatedAt',
          renderCell: (row) => {
            return <RelativeTime date={new Date(row.updatedAt)} />
          },
        },
        {
          header: 'Dependabot',
          field: 'securityFeatures.dependabot',
          renderCell: (row) => {
            return row.securityFeatures.dependabot.length > 0 ? (
              <LabelGroup>
                {row.securityFeatures.dependabot.map((feature) => {
                  return <Label key={feature}>{uppercase(feature)}</Label>
                })}
              </LabelGroup>
            ) : null
          },
        },
        {
          header: 'Code scanning',
          field: 'securityFeatures.codeScanning',
          renderCell: (row) => {
            return row.securityFeatures.codeScanning.length > 0 ? (
              <LabelGroup>
                {row.securityFeatures.codeScanning.map((feature) => {
                  return <Label key={feature}>{uppercase(feature)}</Label>
                })}
              </LabelGroup>
            ) : null
          },
        },
        {
          id: 'actions',
          header: () => <VisuallyHidden>Actions</VisuallyHidden>,
          renderCell: (row) => {
            return (
              <>
                <IconButton
                  aria-label={`Edit: ${row.name}`}
                  title={`Edit: ${row.name}`}
                  icon={PencilIcon}
                  variant="invisible"
                  onClick={() => {
                    action('Edit')(row)
                  }}
                />
                <IconButton
                  aria-label={`Delete: ${row.name}`}
                  title={`Delete: ${row.name}`}
                  icon={TrashIcon}
                  variant="invisible"
                  onClick={() => {
                    action('Delete')(row)
                  }}
                />
              </>
            )
          },
        },
      ]}
    />
  </Table.Container>
)
