import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Card, Divider } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import Topbar from '../containers/Topbar.jsx'
import Sidebar from '../containers/Sidebar.jsx'

import routes from '../routes/index.js'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: true
    }
  }

  toggleTheme() {
    this.setState({ dark: !this.state.dark })
  }

  render() {
    return (
      <main className={`theme--${this.state.dark ? 'dark' : 'light'}`}>
        <div
          style={{
            padding: '100px'
          }}
        >
          <div
            style={{
              margin: '32px'
            }}
          >
            <Card dark={this.state.dark}>
              <div style={{ padding: '0px 28px' }}>
                <Topbar
                  dark={this.state.dark}
                  onClick={this.toggleTheme.bind(this)}
                />
              </div>
              <div style={{ padding: '16px 24px 8px 28px' }}>
                <Divider dense dark={this.state.dark} />
              </div>
              <div style={{ padding: '16px 32px 32px 32px' }}>
                <div
                  style={{
                    display: 'flex'
                  }}
                >
                  <Sidebar />
                  <div
                    style={{
                      width: 'calc(100% - 300px)'
                    }}
                  >
                    <Switch>
                      {routes.map((route) => (
                        <Route
                          exact
                          key={route.id}
                          path={route.path}
                          component={() => (
                            <route.component dark={this.state.dark} />
                          )}
                        />
                      ))}
                    </Switch>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    )
  }
}

export default MainContainer
