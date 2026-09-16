import { Tabs, TabsVertical, TabList, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';
import { TextInput } from '@carbon/react';
import { Checkbox } from '@carbon/react';
import { Button } from '@carbon/react';
import { Grid, Column } from '@carbon/react';
import { Layer } from '@carbon/react';
import mdx from './Tabs.mdx';


const tabsSizeArgType = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
    description: 'Specify the size of the tabs',
  },
};

const containedTabsSizeArgs = {
  size: 'lg',
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    TabsVertical,
    TabList,
    TabListVertical,
    Tab,
    TabPanels,
    TabPanel,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    light: {
      table: {
        disable: true,
      },
    },
  },
};

export const ContainedFullWidth = (args) => {
  return (
    <Grid condensed>
      <Column lg={16} md={8} sm={4}>
        <Tabs>
          <TabList contained fullWidth size={args.size}>
            <Tab>TLS</Tab>
            <Tab>Origin</Tab>
            <Tab disabled>Rate limiting</Tab>
            <Tab>WAF</Tab>
            <Tab>IP Firewall</Tab>
            <Tab>Firewall rules</Tab>
            <Tab>Range</Tab>
            <Tab>Mutual TLS</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Tab Panel 1</TabPanel>
            <TabPanel>
              <Layer>
                <form style={{ margin: '2em' }}>
                  <legend className={`cds--label`}>Validation example</legend>
                  <Checkbox id="cb" labelText="Accept privacy policy" />
                  <Button
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    type="submit">
                    Submit
                  </Button>
                  <TextInput
                    type="text"
                    labelText="Text input label"
                    helperText="Optional help text"
                  />
                </form>
              </Layer>
            </TabPanel>
            <TabPanel>Tab Panel 3</TabPanel>
            <TabPanel>Tab Panel 4</TabPanel>
            <TabPanel>Tab Panel 5</TabPanel>
            <TabPanel>Tab Panel 6</TabPanel>
            <TabPanel>Tab Panel 7</TabPanel>
            <TabPanel>Tab Panel 8</TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
};

ContainedFullWidth.argTypes = tabsSizeArgType;
ContainedFullWidth.args = containedTabsSizeArgs;
