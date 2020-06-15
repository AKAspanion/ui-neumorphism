import React from 'react'
import { findDOMNode } from 'react-dom'
import { Switch, Route, withRouter } from 'react-router-dom'

import {
  Card,
  Divider,
  withResize,
  overrideThemeVariables
} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import Topbar from '../containers/Topbar.jsx'
import Sidebar from '../containers/Sidebar.jsx'
import RightBar from '../containers/RightBar.jsx'

import routes from '../routes/index.js'

class MainContainer extends React.Component {
  mainView = null

  constructor(props) {
    super(props)
    this.state = {
      dark: false,
      open: false
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.onSidebarClick = this.onSidebarClick.bind(this)
  }

  get isHome() {
    const { pathname: p } = this.props.location
    return (
      p === '/' || p === '/home' || p === '/examples' || p === '/typography'
    )
  }

  toggleTheme() {
    overrideThemeVariables({
      '--light-bg': '#E4EBF5',
      '--light-bg-dark-shadow': '#bec8e4',
      '--light-bg-light-shadow': '#ffffff',
      '--dark-bg': '#444444',
      '--dark-bg-dark-shadow': '#363636',
      '--dark-bg-light-shadow': '#525252',
      '--primary': '#2979ff',
      '--primary-dark': '#2962ff',
      '--primary-light': '#82b1ff'
    })
    this.setState({ dark: !this.state.dark })
  }

  toggleSidebar() {
    this.setState({ open: !this.state.open })
  }

  onSidebarClick() {
    this.mainView.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  render() {
    const { isHome } = this
    const { size } = this.props
    const { dark, open } = this.state
    const isSmall = size === 'sm' || size === 'xs'
    return (
      <main className={`theme--${dark ? 'dark' : 'light'}`}>
        <Card
          flat
          dark={dark}
          className={`main-container ${isSmall ? 'main-container-sm' : ''}`}
        >
          <Card>
            <Topbar
              size={size}
              dark={dark}
              onClick={this.toggleTheme}
              onMenuClick={this.toggleSidebar}
            />
            <Divider dense dark={dark} />
            <Card flat className='main-content'>
              <Sidebar
                dark={dark}
                open={open}
                size={size}
                onClick={this.onSidebarClick}
                onOutsideClick={this.toggleSidebar}
              />
              <Card
                flat
                ref={(ref) => (this.mainView = findDOMNode(ref))}
                className={`main-view main-view--${
                  !isSmall ? 'large' : 'small'
                } ${isHome ? 'main-view--home' : ''} ${
                  open ? 'main-view--open' : ''
                }`}
              >
                <Switch>
                  {routes.map((route) => (
                    <Route
                      exact
                      key={route.id}
                      path={route.path}
                      component={() => <route.component dark={dark} />}
                    />
                  ))}
                </Switch>
              </Card>
              {isSmall || isHome ? null : <RightBar dark={dark} size={size} />}
            </Card>
          </Card>
        </Card>
      </main>
    )
  }
}

export default withRouter(withResize(MainContainer, { onlyWidth: true }))
