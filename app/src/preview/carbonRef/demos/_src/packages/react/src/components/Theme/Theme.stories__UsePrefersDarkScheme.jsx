import './Theme-story.scss';
import { GlobalTheme, Theme, usePrefersDarkScheme, useTheme } from '@carbon/react';
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

export const UsePrefersDarkScheme = () => {
  const prefersDark = usePrefersDarkScheme();

  const theme1 = prefersDark ? 'g100' : 'white';
  const theme2 = prefersDark ? 'white' : 'g100';
  const theme3 = prefersDark ? 'g90' : 'g10';
  const theme4 = prefersDark ? 'g10' : 'g90';

  return (
    <Theme theme={theme1}>
      <section className="theme-section">
        <ThemeText showIsDark={true}>
          usePrefersDarkScheme() is {prefersDark ? '`true`' : '`false`'}. Theme
          set to `{theme1}`.
        </ThemeText>
      </section>
      <Theme theme={theme2}>
        <section className="theme-section">
          <ThemeText showIsDark={true}>
            usePrefersDarkScheme() is {prefersDark ? '`true`' : '`false`'}. An
            alternative theme set of `{theme2}`.
          </ThemeText>
        </section>
      </Theme>
      <Theme theme={theme3}>
        <section className="theme-section">
          <ThemeText showIsDark={true}>
            usePrefersDarkScheme() is {prefersDark ? '`true`' : '`false`'}.
            Theme set to `{theme3}`.
          </ThemeText>
        </section>
      </Theme>
      <Theme theme={theme4}>
        <section className="theme-section">
          <ThemeText showIsDark={true}>
            usePrefersDarkScheme() is {prefersDark ? '`true`' : '`false`'}. An
            alternative theme set of `{theme4}`.
          </ThemeText>
        </section>
      </Theme>
    </Theme>
  );
};
UsePrefersDarkScheme.storyName = 'usePrefersDarkScheme';
