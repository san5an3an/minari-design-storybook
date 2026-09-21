// @ts-nocheck
import mdx from './StructuredList.mdx';
import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListInput, StructuredListCell } from '@carbon/react';
import { CheckmarkFilled } from '@carbon/icons-react';

const prefix = 'cds';

export default {
  title: 'Components/StructuredList',
  component: StructuredListWrapper,
  subcomponents: {
    StructuredListHead,
    StructuredListBody,
    StructuredListRow,
    StructuredListInput,
    StructuredListCell,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
const structuredListBodyRowGenerator = (numRows) => {
  return Array.apply(null, Array(numRows)).map((n, i) => (
    <StructuredListRow key={`row-${i}`} id={`row-${i}`}>
      <StructuredListCell>Row {i}</StructuredListCell>
      <StructuredListCell>Row {i}</StructuredListCell>
      <StructuredListCell>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna,
        finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel
        euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a
        porttitor interdum.
      </StructuredListCell>
      <StructuredListInput
        id={`row-${i}`}
        value={`row-${i}`}
        title={`row-${i}`}
        name="row-0"
        aria-label={`row-${i}`}
      />
      <StructuredListCell>
        <CheckmarkFilled
          className={`${prefix}--structured-list-svg`}
          aria-label="select an option">
          <title>select an option</title>
        </CheckmarkFilled>
      </StructuredListCell>
    </StructuredListRow>
  ));
};

export const Selection = (args) => {
  return (
    <StructuredListWrapper selection {...args}>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>ColumnA</StructuredListCell>
          <StructuredListCell head>ColumnB</StructuredListCell>
          <StructuredListCell head>ColumnC</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {structuredListBodyRowGenerator(4)}
      </StructuredListBody>
    </StructuredListWrapper>
  );
};

const sharedParameters = {
  controls: {
    exclude: ['isFlush', 'selection'],
  },
};

Selection.parameters = { ...sharedParameters };
