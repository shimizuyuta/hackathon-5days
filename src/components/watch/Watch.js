import React, { useState } from 'react'
import Style from '../../styles/Watch.module.scss'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Watch = props => {

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


  return (
    <>
      <div className={Style.watch_wrap}>
        <div className={Style.watch_img}>
          <img
            src={props.cosmeObject.img}
          />
        </div>
        <div className={Style.watch_detail}>
          <h3>
            ブランド_{props.cosmeObject.brand}
          </h3>
          <h3>
            商品名_{props.cosmeObject.name}
          </h3>
          <h3>
            色名_{props.cosmeObject.color_name}
          </h3>
          <h3>
            値段_{props.cosmeObject.price}円
          </h3>
        </div>
      </div>

      <div className={Style.box_wrap}>
        <div className={Style.box_colors}>
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`
          }} />
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`
          }} />
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`
          }} />
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`
          }} />
          <Box sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: `hsl(${props.cosmeObject.H}, ${props.cosmeObject.S}%, ${props.cosmeObject.L}%)`
          }} />
        </div>
        <div className={Style.box_list}>
          {cosmeExsample.map((cosme, i) => {
            return (
              <img
                key={i}
                src={cosme.img}
                alt={`${i}`}
              // onClick={() => handleClick(`${i}`)}
              //onClick={() => handleOpen(cosme)}
              />
            )
          })}
        </div>
      </div>
    </>

  )
}

export default Watch