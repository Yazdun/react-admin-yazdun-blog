import { Container, Button } from './elements'
import { MdOutlineDrafts } from 'react-icons/md'
import { Route, Switch } from 'react-router-dom'
import { AppRoutes, PrivateRoute } from './pages'

function App() {
  return (
    <>
      <Switch>
        {AppRoutes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          ),
        )}
      </Switch>
    </>
  )
}

export default App
