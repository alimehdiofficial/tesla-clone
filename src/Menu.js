import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <MenuItem title='existing inventory' />
      <MenuItem title='used inventory' />
      <MenuItem title='trade-in' />
      <MenuItem title='cybertruck' />
      <MenuItem title='roadster' />
      <MenuItem title='semi' />
      <MenuItem title='charging' />
      <MenuItem title='powerwall' />
      <MenuItem title='commercial solar' />
      <MenuItem title='test drive' />
      <MenuItem title='find us' />
      <MenuItem title='support' />
      <MenuItem title='united states' />
    </div>
  )
}

export default Menu
