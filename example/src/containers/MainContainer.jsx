import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Card, Divider, withWindowResize } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import Topbar from '../containers/Topbar.jsx'
import Sidebar from '../containers/Sidebar.jsx'

import routes from '../routes/index.js'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: false,
      open: false
    }
  }

  toggleTheme() {
    this.setState({ dark: !this.state.dark })
  }

  toggleSidebar() {
    this.setState({ open: !this.state.open })
  }

  render() {
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
              onClick={this.toggleTheme.bind(this)}
              onMenuClick={this.toggleSidebar.bind(this)}
            />
            <Divider dense dark={dark} />
            <Card flat className='main-content'>
              <Sidebar open={open} />
              <Card flat>
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
            </Card>
          </Card>
        </Card>
      </main>
    )
  }
}

export default withWindowResize(MainContainer)
