import './Theme-story.scss';
import { GlobalTheme, Theme } from '@carbon/react';
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

export const Default = () => {
  return (
    <>
      <Theme theme="g100">
        <section className="theme-section">g100</section>
      </Theme>
      <Theme theme="g90">
        <section className="theme-section">g90</section>
      </Theme>
      <Theme theme="g10">
        <section className="theme-section">g10</section>
      </Theme>
      <Theme theme="white">
        <section className="theme-section">white</section>
      </Theme>
    </>
  );
};
