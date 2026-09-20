// @ts-nocheck
import './Theme-story.scss';
import { GlobalTheme, Theme, useTheme } from '@carbon/react';
import mdx from './Theme.mdx';


export default {
  title: 'Components/Theme',
  component: Theme,
  subcomponents: {
    GlobalTheme,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    docs: {
      page: mdx,
    },
  },
  args: {
    theme: 'g10',
  },
};

const ThemeText = ({ children, showIsDark }) => {
  const { theme, isDark } = useTheme();

  return (
    <p>
      {children}
      {showIsDark
        ? ` useTheme reveals... { theme: '${theme}', isDark: '${isDark}'}`
        : theme}
    </p>
  );
};

export const UseTheme = () => {
  return (
    <div>
      <section className="theme-section">
        <ThemeText showIsDark={true} />
      </section>
      <Theme theme="g100">
        <section className="theme-section">
          <ThemeText showIsDark={true} />
        </section>
      </Theme>
    </div>
  );
};

UseTheme.storyName = 'useTheme';
