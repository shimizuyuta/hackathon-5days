import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Top = () => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    navigate('/search', {state: { message: e }})
  }
  return (
    <Layout>
      <div>
        <h1>化粧品カテゴリを選んでね</h1>
        <div>
          <Button
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
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Top