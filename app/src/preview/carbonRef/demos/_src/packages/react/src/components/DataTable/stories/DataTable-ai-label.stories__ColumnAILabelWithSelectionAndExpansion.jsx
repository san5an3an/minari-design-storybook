import React from 'react';
import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableSlugRow, TableExpandHeader, TableExpandRow, TableExpandedRow } from '@carbon/react';
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

const columnAILabelHeaders = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'protocol',
    header: 'Protocol',
  },
  {
    key: 'port',
    header: 'Port',
  },
  {
    key: 'rule',
    header: 'Rule',
  },
  {
    key: 'attached_groups',
    header: 'Attached groups',
    decorator: (
      <AILabel
        className="ai-label-container"
        autoAlign={false}
        align="bottom-right">
        <AILabelContent>
          <div>
            <p className="secondary">AI Explained</p>
            <h2 className="ai-label-heading">84%</h2>
            <p className="secondary bold">Confidence score</p>
            <p className="secondary">
              Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut fsil labore et dolore magna
              aliqua.
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
    ),
  },
  {
    key: 'status',
    header: 'Status',
  },
];

export const ColumnAILabelWithSelectionAndExpansion = (args) => (
  <DataTable rows={rows} headers={columnAILabelHeaders} {...args}>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getExpandedRowProps,
      getExpandHeaderProps,
      getSelectionProps,
      getTableProps,
      getTableContainerProps,
      getCellProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With expansion"
        className="ai-label-column-table"
        {...getTableContainerProps()}>
        <Table {...getTableProps()} aria-label="sample table">
          <TableHead>
            <TableRow>
              <TableExpandHeader
                enableToggle={true}
                {...getExpandHeaderProps()}
              />
              <TableSelectAll {...getSelectionProps()} />
              {headers.map((header, i) => (
                <TableHeader
                  key={i}
                  {...getHeaderProps({
                    header,
                  })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => {
                      return (
                        <TableCell {...getCellProps({ cell })}>
                          {cell.value}
                        </TableCell>
                      );
                    })}
                  </TableExpandRow>
                  <TableExpandedRow
                    colSpan={headers.length + 2}
                    className="demo-expanded-td"
                    {...getExpandedRowProps({ row })}>
                    <h6>Expandable row content</h6>
                    <div>Description here</div>
                  </TableExpandedRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);
