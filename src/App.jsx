import { HttpErrors } from './context'
import { Route, Switch } from 'react-router-dom'
import { AppRoutes, PrivateRoute } from './pages'
import { Navigation } from './components'

function App() {
  return (
    <HttpErrors>
      <Navigation />
      <Switch>
        {AppRoutes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          ),
        )}
      </Switch>
    </HttpErrors>
  )
}

export default App
