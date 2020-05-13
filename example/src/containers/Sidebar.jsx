import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../routes/index.js'

export default function Sidebar() {
  useEffect(() => {
    document.getElementById('list-item-1').checked = true
  })
  return (
    <div className='sidebar'>
      <div className='sidebar-menu-title'>
        <NavLink exact to='/' activeClassName='sidebar-link-active'>
          Home
        </NavLink>
      </div>
      <div className='sidebar-menu'>
        <input type='checkbox' id='list-item-1'></input>
        <label htmlFor='list-item-1' className='sidebar-menu-title'>
          Components
        </label>
        <ul>
          {routes.map((route, i) => {
            const { name, path } = route
            if (name && path !== '/home') {
              return (
                <li title={name} key={i}>
                  <NavLink
                    to={path}
                    exact
                    activeClassName='sidebar-link-active'
                  >
                    {name}
                  </NavLink>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
      <div className='sidebar-menu-title'>
        <NavLink to='/typography' exact activeClassName='sidebar-link-active'>
          Typography
        </NavLink>
      </div>
      <div className='sidebar-menu-title'>
        <NavLink to='/examples' exact activeClassName='sidebar-link-active'>
          Examples
        </NavLink>
      </div>
    </div>
  )
}
