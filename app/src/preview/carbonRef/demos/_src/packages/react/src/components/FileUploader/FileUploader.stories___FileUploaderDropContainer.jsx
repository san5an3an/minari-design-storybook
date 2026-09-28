// @ts-nocheck
import mdx from './FileUploader.mdx';
import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, FileUploaderSkeleton } from '@carbon/react';


const dropContainerArgs = {
  accept: ['image/jpeg', 'image/png'],
  disabled: false,
  labelText: 'Drag and drop files here or click to upload',
  maxFileSize: 1024 * 1024,
  multiple: true,
  name: '',
  size: 'md',
};

const dropContainerArgTypes = {
  accept: { control: 'object' },
  disabled: { control: 'boolean' },
  labelText: { control: 'text' },
  maxFileSize: { control: { type: 'number', min: 0, step: 1 } },
  multiple: { control: 'boolean' },
  name: { control: 'text' },
  onAddFiles: { action: 'onAddFiles' },
  onClick: { action: 'onClick' },
  size: { control: 'select', options: ['sm', 'md', 'lg'] },
};

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
  subcomponents: {
    FileUploaderButton,
    FileUploaderSkeleton,
    FileUploaderItem,
    FileUploaderDropContainer,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const _FileUploaderDropContainer = (args) => {
  return <FileUploaderDropContainer {...args} />;
};

_FileUploaderDropContainer.args = { ...dropContainerArgs };
_FileUploaderDropContainer.argTypes = { ...dropContainerArgTypes };
_FileUploaderDropContainer.parameters = {
  controls: { include: Object.keys(dropContainerArgTypes) },
};
