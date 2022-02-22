import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message);

  return (
    <Layout>
      Search
      {message}
    </Layout>
  )
}

export default Search