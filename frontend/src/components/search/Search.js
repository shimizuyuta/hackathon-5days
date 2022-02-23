import React, { useState, useEffect, useRef } from 'react'
import Style from '../../styles/Search.module.scss'
//import { useNavigate } from 'react-router-dom'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Watch from '../watch/Watch';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Search = props => {
  //const navigate = useNavigate();
  const imgUrl = 'https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s800/syachiku.png'
  const imgExample = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl];
  const colorData = ['hsl(0,100%,83%)', '#ffff00', '#ffa500', '#008000', '#7fffd4', '#ff0000', '#ff69b4'];
  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState('');
  const handleOpen = (e) => {
    setSelectId(e);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const colorExample = [
    { h: 0, s: 100, l: 50 },
    { h: 30, s: 100, l: 50 },
    { h: 60, s: 100, l: 50 },
    { h: 120, s: 100, l: 50 },
    { h: 180, s: 100, l: 50 },
    { h: 240, s: 100, l: 50 },
    { h: 270, s: 100, l: 50 },
    { h: 310, s: 100, l: 75 },
    { h: 0, s: 0, l: 100 },
    { h: 0, s: 0, l: 0 }
  ]

  const actions = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 }
  ]


  // const handleClick = (e) => {
  //   navigate('/watch', { state: { id: e } })
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
              // onClick={() => handleClick(`${i}`)}
              onClick={() => handleOpen(`${i}`)}
            />
          )
        })}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Watch id={selectId} />
          </Box>
        </Modal>
      </div>

      <div className={Style.color_map}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={2} className={Style.stack_wrap}>
            {
              colorExample.map((color, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  >
                    <SpeedDial
                      ariaLabel="SpeedDial basic example"
                      direction="down"
                      icon={<Box sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: `hsl(${color.h}, ${color.s}%, ${color.l}%)`,
                      }} />}
                    >
                      {actions.map((action, index) => (
                        <SpeedDialAction
                          key={action.name}
                          tooltipTitle={action.name}
                          onClick={() => console.log(`Clicked -- ${action.name} -- ${color.h}`)}
                          icon={<Box sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            backgroundColor: `hsl(${color.h}, ${color.s}%, ${80 - index * 15}%)`
                          }} />}
                        />
                      ))}
                    </SpeedDial>
                  </Box>
                )
              }
              )}
          </Stack>
        </Grid>

      </div>
      <div>
      </div>
    </>

  )
}

export default Search

{/* <SpeedDial
ariaLabel="SpeedDial basic example"
direction="down"
icon={<SpeedDialIcon />}
>
{actions.map((action) => (
  <SpeedDialAction
    key={action.name}
    
    tooltipTitle={action.name}
  />
))}
</SpeedDial> */}