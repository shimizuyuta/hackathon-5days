import React, { useState, useEffect, useContext, useRef } from 'react'
import Style from '../../styles/Search.module.scss'
//import { useNavigate } from 'react-router-dom'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Watch from '../watch/Watch';
import Stack from '@mui/material/Stack';
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Store } from '../../store/index';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


Amplify.configure(awsconfig);


const Search = props => {
  const { globalState, setGlobalState } = useContext(Store);
  const [cosme, setCosme] = useState([]);
  //const navigate = useNavigate();
  // const imgUrl = 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg'
  // const imgExample = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl];
  const [open, setOpen] = useState(false);
  const [selectId, setSelectId] = useState({});
  const loading = useRef(false);

  const handleOpen = (e) => {
    setGlobalState({ type: 'SET_COSME', payload: cosme });
    setSelectId(e);
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  

  //商品API
  // const sendApi = async () => {
  //   await API.get('apif0a60b76', '/teamB').then(res => {
  //     setCosme(res);
  //     console.log(cosme);
  //     loading.current = true;
  //   })
  // }

  //axios version
  const sendApi = async() => {
    axios.get('https://x154dlmxsb.execute-api.ap-northeast-1.amazonaws.com/dev/teamB').then(res => {
      setCosme(res.data);
      console.log(cosme);
    })
    loading.current = true;
  }

  //APP起動時の初期ロード
  useEffect(() => {
    loading.current = false;
    sendApi();
  }, [])

  //色選択時API
  // const sendColorApi = async (color, id) => {
  //   await API.get('apif0a60b76', '/teamB').then(res => {
  //     console.log(`${color}`, `${id}`);
  //     setCosme(res);
  //   })
  // }

  //axios version
  const sendColorApi = async (color, id) => {
    await axios.get('https://x154dlmxsb.execute-api.ap-northeast-1.amazonaws.com/dev/teamB').then(res => {
      console.log(`${color}`, `${id}`);
      setCosme(res.data);
    })
  }

  //商品テーブル
  const cosmeExsample = [
    { id: 'abcde001', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde002', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde003', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde004', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde005', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde006', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde007', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde008', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde009', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde0010', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
    { id: 'abcde0011', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 }
  ]

  //色テーブル
  const colorExample = [
    { id: 1, h: 0, s: 100, l: 50 },
    { id: 2, h: 30, s: 100, l: 50 },
    { id: 3, h: 60, s: 100, l: 50 },
    { id: 4, h: 120, s: 100, l: 50 },
    { id: 5, h: 180, s: 100, l: 50 },
    { id: 6, h: 240, s: 100, l: 50 },
    { id: 7, h: 270, s: 100, l: 50 },
    { id: 8, h: 310, s: 100, l: 75 },
    { id: 9, h: 0, s: 0, l: 100 },
    { id: 10, h: 0, s: 0, l: 0 }
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

  if (!loading.current) {

    return (
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          //!loading.current
          open={!loading.current}
        //onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    )

  } else {
    return (
      <div className={Style.serch_wrap}>
        <div className={Style.beside}>
          {cosme.map((cosme, i) => {
            return (
              <img
                key={i}
                src={cosme.img}
                alt={`${i}`}
                // onClick={() => handleClick(`${i}`)}
                onClick={() => handleOpen(cosme)}
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
              <Watch cosmeObject={selectId} cosmeArray={cosme} />
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
                            tooltipOpen = {true}
                            onClick={() => sendColorApi(80 - index * 15, i + 1)}
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
      </div>
    )
  }


}

export default Search
