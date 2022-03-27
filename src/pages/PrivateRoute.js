import { useAuthContext } from '../context/'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = props => {
  const isLoggedIn = useAuthContext()
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/" />
}
