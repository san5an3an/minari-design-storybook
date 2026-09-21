// @ts-nocheck
import './DataTable-expansion-story.scss';
import React from 'react';
import { DataTable, Table, TableBody, TableCell, TableContainer, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow } from '@carbon/react';
import { dataTableArgs, dataTableArgTypes, rows, headers } from '../shared';
import mdx from '../../DataTable.mdx';
import { action } from '../../../../../../../_doc-stubs/storybook-actions.js';


export default {
  title: 'Components/DataTable/Expansion',
  component: DataTable,
  args: dataTableArgs,
  argTypes: dataTableArgTypes,
  subcomponents: {
    TableExpandHeader,
    TableExpandRow,
    TableExpandedRow,
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

export const Default = (args) => (
  <DataTable rows={rows} headers={headers} {...args}>
    {({
      rows,
      headers,
      getHeaderProps,
      getExpandHeaderProps,
      getRowProps,
      getExpandedRowProps,
      getTableProps,
      getTableContainerProps,
      getCellProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With expansion"
        {...getTableContainerProps()}>
        <Table {...getTableProps()} aria-label="sample table">
          <TableHead>
            <TableRow>
              <TableExpandHeader
                aria-label="expand row"
                {...getExpandHeaderProps()}
              />
              {headers.map((header, i) => (
                <TableHeader key={i} {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                <TableExpandRow
                  {...getRowProps({ row })}
                  onClick={action('onClick')}>
                  {row.cells.map((cell) => (
                    <TableCell {...getCellProps({ cell })}>
                      {cell.value}
                    </TableCell>
                  ))}
                </TableExpandRow>
                <TableExpandedRow
                  colSpan={headers.length + 1}
                  className="demo-expanded-td"
                  {...getExpandedRowProps({ row })}>
                  <h6>Expandable row content</h6>
                  <div>Description here</div>
                </TableExpandedRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);
