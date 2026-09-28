// @ts-nocheck
import {
  BookIcon,
  DownloadIcon,
  KebabHorizontalIcon,
  PencilIcon,
  PlusIcon,
  RepoIcon,
  TrashIcon,
} from '@primer/octicons-react'
import { Blankslate } from '@primer/react/experimental';
import { DataTable, Table } from '@primer/react/experimental';
import { Label } from '@primer/react';
import { LabelGroup } from '@primer/react';
import { RelativeTime } from '@primer/react';


export default {
  title: 'Experimental/Components/DataTable/Features',
  component: DataTable,
} as Meta<typeof DataTable>

function uppercase(input: string): string {
  return input[0].toUpperCase() + input.slice(1)
}

export const WithNoContent = () => {
  const exampleEmptyData: Array<Repo> = []
  return exampleEmptyData.length === 0 ? (
    <Blankslate border>
      <Blankslate.Visual>
        <BookIcon size="medium" />
      </Blankslate.Visual>
      <Blankslate.Heading>Blankslate heading</Blankslate.Heading>
      <Blankslate.Description>Use it to provide information when no dynamic content exists.</Blankslate.Description>
      <Blankslate.PrimaryAction href="#">Primary action</Blankslate.PrimaryAction>
      <Blankslate.SecondaryAction href="#">Secondary action link</Blankslate.SecondaryAction>
    </Blankslate>
  ) : (
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
        data={exampleEmptyData}
        columns={[
          {
            header: 'Repository',
            field: 'name',
            rowHeader: true,
          },
          {
            header: 'Type',
            field: 'type',
            renderCell: row => {
              return <Label>{uppercase(row.type)}</Label>
            },
          },
          {
            header: 'Updated',
            field: 'updatedAt',
            renderCell: row => {
              return <RelativeTime date={new Date(row.updatedAt)} />
            },
          },
          {
            header: 'Dependabot',
            field: 'securityFeatures.dependabot',
            renderCell: row => {
              return row.securityFeatures.dependabot.length > 0 ? (
                <LabelGroup>
                  {row.securityFeatures.dependabot.map(feature => {
                    return <Label key={feature}>{uppercase(feature)}</Label>
                  })}
                </LabelGroup>
              ) : null
            },
          },
          {
            header: 'Code scanning',
            field: 'securityFeatures.codeScanning',
            renderCell: row => {
              return row.securityFeatures.codeScanning.length > 0 ? (
                <LabelGroup>
                  {row.securityFeatures.codeScanning.map(feature => {
                    return <Label key={feature}>{uppercase(feature)}</Label>
                  })}
                </LabelGroup>
              ) : null
            },
          },
        ]}
      />
    </Table.Container>
  )
}
