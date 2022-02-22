import React, { useState } from 'react'
import Style from '../../styles/Search.module.scss'
//import { useNavigate } from 'react-router-dom'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Watch from '../watch/Watch';
import { BsFillSquareFill } from 'react-icons/bs';


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

  const actions = [
    { col: '#ff0000', name: 'red1'  },
    { col: '#ff0000', name: 'red2'  },
    { col: '#ff0000', name: 'red3'  },
    { col: '#ff0000', name: 'red4'  }
  ]

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
                  <SpeedDial
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
                  </SpeedDial>
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