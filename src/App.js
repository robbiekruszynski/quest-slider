import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './App.css';
export default () => (
    <Tabs>

      <TabList>
        <div className="container">
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
        <Tab>4</Tab>
      </div>
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
