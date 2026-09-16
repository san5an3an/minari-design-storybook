import { StaticNotification } from '@carbon/react';
import { CodeSnippet } from '@carbon/react';
import mdx from './StaticNotification.mdx';


export default {
  title: 'Deprecated/preview__StaticNotification',
  component: StaticNotification,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => (
  <>
    <StaticNotification title="StaticNotification has been renamed to Callout" />

    <div style={{ marginLeft: '.5rem', marginTop: '2rem' }}>
      <p style={{ marginBottom: '1rem' }}>
        Run the following codemod to automatically update usages in your
        project:
      </p>
      <CodeSnippet type="single" feedback="Copied to clipboard">
        npx @carbon/upgrade migrate refactor-to-callout --write
      </CodeSnippet>
    </div>
  </>
);
