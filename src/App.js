import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './App.css';
export default () => (
    <Tabs>

      <TabList>
        <div className="container">
          <div className="line-through">
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
          </div>
        </div>
      </TabList>

    <TabPanel>
      <h2>Quest 1</h2>
      <p>asd;iflhasdifhaos;idlhhil;dfas</p>
    </TabPanel>
    <TabPanel>
      <h2>Quest2</h2>
        <p>asd;iflhasdifhil;dfas</p>
    </TabPanel>
    <TabPanel>
      <h2>Quest3</h2>
        <p>asd;iflhasdifhasdfsdfos;idlhhil;dfas</p>
    </TabPanel>
    <TabPanel>
      <h2>Quest4</h2>
        <p>ass;idlhhil;dfas</p>
    </TabPanel>
  </Tabs>

);
