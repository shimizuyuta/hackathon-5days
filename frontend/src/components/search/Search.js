import React, { useState } from 'react'
import Style from '../../styles/Search.module.scss'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Search = props => {
  const navigate = useNavigate();
  const imgUrl = 'https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s800/syachiku.png'
  const imgExample = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl];
  const colorData = ['hsl(0,100%,83%)', '#ffff00', '#ffa500', '#008000', '#7fffd4'];

  const handleClick = (e) => {
    navigate('/watch', { state: { id: e } })
  }

  return (
    <>
      {props.message}
      <div className={Style.beside}>
        {imgExample.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt={`${i}`}
              onClick={() => handleClick(`${i}`)}
            />
          )
        })}
      </div>
      <div className={Style.color_map}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {
            colorData.map((color, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: color,
                    '&:hover': {
                      backgroundColor: color,
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                </Box>
              )
            }
            )}
        </Grid>
      </div>
    </>

  )
}

export default Search