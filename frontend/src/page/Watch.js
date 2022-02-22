import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { useLocation } from 'react-router-dom'

const Watch = () => {
  const location = useLocation();
  const [selectId, setSelectId] = useState(location.state?.id);

  return (
    <Layout>
      <h1>{selectId}</h1>
    </Layout>
  )
}

export default Watch