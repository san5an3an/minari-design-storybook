// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { action } from '../../../../../_doc-stubs/storybook-actions.js';
import { ErrorBoundary, ErrorBoundaryContext } from '@carbon/react';
import { Button } from '@carbon/react';
import mdx from './ErrorBoundary.mdx';


const defaultArgs = {
  buttonLabel: 'Toggle throwing error',
  children: 'Successfully rendered',
  errorMessage: 'Component threw error',
  fallback: 'Whoops',
  shouldThrowError: false,
};

const argTypes = {
  buttonLabel: { control: 'text' },
  children: { control: 'text' },
  errorMessage: { control: 'text' },
  fallback: { control: 'text' },
  onLog: { action: 'log' },
  shouldThrowError: { control: 'boolean' },
};

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: { include: Object.keys(argTypes) },
  },
};

function DemoComponent({
  buttonLabel,
  children,
  errorMessage,
  fallback,
  shouldThrowError: shouldThrowErrorArg,
}) {
  const [shouldThrowError, setShouldThrowError] = useState(shouldThrowErrorArg);

  useEffect(() => {
    setShouldThrowError(shouldThrowErrorArg);
  }, [shouldThrowErrorArg]);

  function onClick() {
    setShouldThrowError(!shouldThrowError);
  }

  return (
    <>
      <Button onClick={onClick}>{buttonLabel}</Button>
      <div>
        <ErrorBoundary fallback={fallback}>
          <ThrowError
            shouldThrowError={shouldThrowError}
            errorMessage={errorMessage}>
            {children}
          </ThrowError>
        </ErrorBoundary>
      </div>
    </>
  );
}

function ThrowError({ children, errorMessage, shouldThrowError }) {
  if (shouldThrowError) {
    throw new Error(errorMessage);
  }

  return children;
}

export const WithCustomContext = ({ onLog = action('log'), ...args }) => {
  return (
    <ErrorBoundaryContext.Provider value={{ log: onLog }}>
      <DemoComponent {...args} />
    </ErrorBoundaryContext.Provider>
  );
};

WithCustomContext.storyName = 'with custom context';
WithCustomContext.args = { ...defaultArgs };
WithCustomContext.argTypes = { ...argTypes };
