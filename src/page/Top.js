import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from '../components/search/Search';
import { Store } from '../store/index'

const Top = () => {
  return (
    <Layout>
      <div>
        <h1>化粧品カテゴリを選んでね</h1>
        <div>
          <Tabs>

            <TabList>
              <Tab>口紅</Tab>
              <Tab>チーク</Tab>
              <Tab>アイシャドウ</Tab>
              <Tab>ネイル</Tab>
            </TabList>

            <TabPanel>
              <Search message={`口紅`} />
            </TabPanel>
            <TabPanel>
              <Search message={`チーク`} />
            </TabPanel>
            <TabPanel>
              <Search message={`アイシャドウ`} />
            </TabPanel>
            <TabPanel>
              <Search message={`ネイル`} />
            </TabPanel>

          </Tabs>
        </div>
      </div>
    </Layout>
  )

}

export default Top