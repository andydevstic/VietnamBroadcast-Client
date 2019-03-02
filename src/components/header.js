import React from 'react'

import Logo from './etc/logo'
import MenuDesktop from './main-menu'
import BurgerMenu from '../components/etc/burger'

export default function Header (props) {
  const {isMobile} = props
  return (
    <div className='header'>
      <div className='flex flex_row flex--space-between --full-height'>
        <div className='logo-container'>
          <Logo />
        </div>
        {
          isMobile ? (
            <div className='menu-container_mobile flex flex_col flex--justify-center flex--items-center'>
              <BurgerMenu />
            </div>
          ) : (
            <div className='menu-container_desktop'>
              <MenuDesktop />
            </div>
          )
        }
      </div>
    </div>
  )
}