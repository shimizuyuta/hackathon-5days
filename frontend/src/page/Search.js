import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { useLocation } from 'react-router-dom'
import Style from '../styles/Search.module.scss'

const Search = () => {
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message);
  const imgUrl = 'https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s800/syachiku.png'
  const imgExample = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl];

  

  return (
    <Layout>
      {message}
      <div className={Style.beside}>
        {imgExample.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt={`${i}`}
              
            />
          )
        })}
      </div>
      <div>
        {

        }
      </div>
    </Layout>
  )
}

export default Search