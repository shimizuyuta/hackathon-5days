import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from '../components/search/Search';

const Top = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/search', { state: { message: e } })
  }
  return (
    <Layout>
      <div>
        <h1>化粧品カテゴリを選んでね</h1>
        <div>
          {/* <Button
            variant="outlined"
            onClick={() => handleClick('口紅')}
          >
            口紅
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleClick('チーク')}
          >
            チーク
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleClick('アイシャドウ')}
          >
            アイシャドウ
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleClick('ネイル')}
          >
            ネイル
          </Button> */}
        </div>
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