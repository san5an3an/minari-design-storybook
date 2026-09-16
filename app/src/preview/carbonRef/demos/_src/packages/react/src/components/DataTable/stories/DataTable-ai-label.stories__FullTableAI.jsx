import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableSlugRow } from '@carbon/react';
import { dataTableArgs, dataTableArgTypes, rows, headers } from './shared';
import mdx from '../../AILabel/AILabelDataTable.mdx';
import { Button } from '@carbon/react';
import { IconButton } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';
import { AILabel, AILabelContent, AILabelActions } from '@carbon/react';
import './datatable-story.scss';


export default {
  title: 'Components/DataTable/WithAILabel',
  component: DataTable,
  args: { ...dataTableArgs, radio: false },
  argTypes: {
    ...dataTableArgTypes,
    radio: {
      control: 'boolean',
      description: 'Use radio selection instead of multi-selection.',
    },
  },
  subcomponents: {
    TableSelectAll,
    TableSelectRow,
    TableSlugRow,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
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

export const FullTableAI = (args) => (
  <DataTable rows={rows} headers={headers} {...args}>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getTableProps,
      getCellProps,
    }) => (
      <TableContainer
        decorator={aiLabel}
        aiEnabled
        title="DataTable"
        description="AI, full table"
        className="ai-label-column-table">
        <Table {...getTableProps()} aria-label="sample table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader
                  key={header.key}
                  {...getHeaderProps({ header, isSortable: args.isSortable })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell {...getCellProps({ cell })}>
                    {cell.value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

FullTableAI.args = { isSortable: true };
FullTableAI.argTypes = {
  isSortable: { table: { readonly: true } },
  radio: { control: false },
};
