import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../routes/index.js'

import { Card, withClickOutside, detectElementInDOM } from 'ui-neumorphism'

class Sidebar extends React.Component {
  get isSmall() {
    const { size } = this.props
    return size === 'sm' || size === 'xs'
  }

  handleClick = (e) => {
    this.handleClickOutside(e)
    this.props.onClick(e)
  }

  handleClickOutside = (e) => {
    const { open } = this.props
    if (open && this.isSmall && !detectElementInDOM(e.path, 'button')) {
      this.props.onOutsideClick()
    }
  }

  componentDidMount() {
    document.getElementById('list-item-1').checked = true
  }

  render() {
    const { dark, open } = this.props
    return (
      <Card
        dark={dark}
        flat={!this.isSmall}
        className={`sidebar ${open ? 'sidebar--open' : ''} ${
          !this.isSmall ? 'sidebar--always' : ''
        }`}
      >
        <div className='sidebar-menu-title'>
          <NavLink
            exact
            to='/'
            onClick={this.handleClick}
            activeClassName='sidebar-link-active'
          >
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
                      onClick={this.handleClick}
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
          <NavLink
            exact
            to='/typography'
            onClick={this.handleClick}
            activeClassName='sidebar-link-active'
          >
            Typography
          </NavLink>
        </div>
        <div className='sidebar-menu-title'>
          <NavLink
            exact
            to='/examples'
            onClick={this.handleClick}
            activeClassName='sidebar-link-active'
          >
            Examples
          </NavLink>
        </div>
      </Card>
    )
  }
}

export default withClickOutside(Sidebar)
