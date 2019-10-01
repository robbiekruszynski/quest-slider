import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './App.css';
export default () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
      <Tab>Title 4</Tab>


    </TabList>

    <TabPanel>
      <h2>Quest 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Quest2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Quest3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Quest4</h2>
    </TabPanel>
  </Tabs>
);
