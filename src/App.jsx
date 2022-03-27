import { HttpErrors } from './context'
import { Route, Switch } from 'react-router-dom'
import { AppRoutes, PrivateRoute } from './pages'

function App() {
  return (
    <HttpErrors>
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
