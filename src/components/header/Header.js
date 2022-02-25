import React from 'react'
import Style from '../../styles/Header.module.scss'
import Icon from '../../icon/icon.png'

const Header = () => {
  return (
    <div className={Style.header}>
      <img src={Icon}/>
      <h1>#cosme</h1>
    </div>
  )
}

export default Header