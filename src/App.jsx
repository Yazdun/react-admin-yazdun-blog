import { AppProvider, HttpErrors } from './context'
import { Route, Switch } from 'react-router-dom'
import { AppRoutes, PrivateRoute } from './pages'
import { Navigation, Alert } from './components'

function App() {
  return (
    <HttpErrors>
      <AppProvider>
        <Navigation />
        <Alert />
        <Switch>
          {AppRoutes.map((route, item) =>
            route.private ? (
              <PrivateRoute key={item} {...route} />
            ) : (
              <Route key={item} {...route} />
            ),
          )}
        </Switch>
      </AppProvider>
    </HttpErrors>
  )
}

export default App
