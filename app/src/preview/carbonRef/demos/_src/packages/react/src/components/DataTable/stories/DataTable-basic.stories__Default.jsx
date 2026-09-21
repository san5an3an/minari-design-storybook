// @ts-nocheck
import { DataTable } from '@carbon/react';
import mdx from '../DataTable.mdx';
import './datatable-story.scss';


const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} = DataTable;

export default {
  title: 'Components/DataTable/Basic',
  component: DataTable,
  subcomponents: {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sharedArgTypes = {
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Change the row height of table',
  },
  stickyHeader: {
    control: 'boolean',
    description:
      'Specify whether the header should be sticky. Still in preview: may not work with every combination of table props',
  },
  useStaticWidth: {
    control: 'boolean',
    description: 'If true, will use a width of "auto" instead of 100%',
  },
  useZebraStyles: {
    control: 'boolean',
    description: 'Add zebra striping to rows',
  },
};

const sharedArgs = {
  size: 'lg',
  stickyHeader: false,
  useStaticWidth: false,
  useZebraStyles: false,
};

export const Default = (args) => {
  const rows = [
    {
      id: 'load-balancer-1',
      name: 'Load Balancer 1',
      rule: 'Round robin',
      Status: 'Starting',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-2',
      name: 'Load Balancer 2',
      rule: 'DNS delegation',
      status: 'Active',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-3',
      name: 'Load Balancer 3',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-4',
      name: 'Load Balancer 4',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-5',
      name: 'Load Balancer 5',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-6',
      name: 'Load Balancer 6',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-7',
      name: 'Load Balancer 7',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
  ];
  const headers = ['Name', 'Rule', 'Status', 'Other', 'Example'];

  return (
    <Table {...args} aria-label="sample table">
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader id={header.key} key={header}>
              {header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {Object.keys(row)
              .filter((key) => key !== 'id')
              .map((key) => {
                return <TableCell key={key}>{row[key]}</TableCell>;
              })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

Default.args = sharedArgs;
Default.argTypes = sharedArgTypes;
