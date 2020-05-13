import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

// import Topbar from '../containers/Topbar.jsx'
import Sidebar from '../containers/Sidebar.jsx'

import routes from '../routes/index.js'

export default function MainContainer() {
  const dark = false
  return (
    <main className={`theme--${dark ? 'dark' : 'light'}`}>
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
          <Card dark={dark}>
            <div style={{ padding: '32px' }}>
              <div
                style={{
                  display: 'flex'
                }}
              >
                <Sidebar />
                <div
                  style={{
                    width: 'calc(100% - 200px)'
                  }}
                >
                  <Switch>
                    {routes.map((route) => (
                      <Route
                        exact
                        key={route.id}
                        path={route.path}
                        component={route.component}
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
