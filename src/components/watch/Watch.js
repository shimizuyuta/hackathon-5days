import React, { useState, useEffect, useContext } from 'react'
import Style from '../../styles/Watch.module.scss'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Store } from '../../store/index';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import axios from 'axios';

Amplify.configure(awsconfig);

const Watch = props => {
  const { globalState, setGlobalState } = useContext(Store);

  const [similarData, setSimilarData] = useState(props.cosmeArray);
  const [pickCosme, setPickCosme] = useState(props.cosmeObject);

  const [choiceColor , setChoiceColor] = useState(props.cosmeColor);

  useEffect(() => {
    console.log(similarData);
  }, [similarData])

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

  //色選択時API
  // const sendColorApi = async (color, id) => {
  //   await API.get('apif0a60b76', '/teamB').then(res => {
  //     console.log(`${color}`, `${id}`);
  //     setCosme(res);
  //   })
  // }

  // const sendColApi = async (color, id) => {
  //   await axios.get(`https://x154dlmxsb.execute-api.ap-northeast-1.amazonaws.com/dev/teamB`).then(res => {
  //     console.log(`${color}`, `${id}`);
  //     setSimilarData(res.data);
  //   })
  // }

  //色選択時API
  const sendColApi = (color) => {
    setChoiceColor(color);
  }

  const imgClick = (e) => {
    console.log(e)
    setPickCosme(similarData[e]);
    //console.log(pickCosme)
  }

  return (
    <>
      <div className={Style.watch_wrap}>
        <div className={Style.watch_img}>
          <img
            src={pickCosme.img}
          />
        </div>
        <div className={Style.watch_detail}>
          <h3>
            ブランド_{pickCosme.brand}
          </h3>
          <h3>
            商品名_{pickCosme.name}
          </h3>
          <h3>
            色名_{pickCosme.color_name}
          </h3>
          <h3>
            値段_{pickCosme.price}円
          </h3>
        </div>
      </div>

      <div className={Style.box_wrap}>
        <div className={Style.box_colors}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            direction="right"
            icon={<Box sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`,
            }} />}
          >
            {actions.map((action, index) => (
              <SpeedDialAction
                key={action.name}
                tooltipTitle={action.name}
                tooltipPlacement="top"
                onClick={() => sendColApi(80 - index * 15)}
                icon={<Box sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${80 - index * 15}%)`
                }} />}
              />
            ))}
          </SpeedDial>
        </div>
        <div className={Style.box_list}>
          {similarData.map((cosme, i) => {
            if(cosme.category === props.cosmeObject.category && cosme.color === props.cosmeObject.color && choiceColor - 10 <= cosme.L && cosme.L <= choiceColor + 10 ) {
              return (
                <img
                  key={i}
                  src={cosme.img}
                  alt={`${i}`}
                  onClick={() => imgClick(i)}
                />
              )
            }
          })}
        </div>
      </div>
    </>

  )
}

export default Watch