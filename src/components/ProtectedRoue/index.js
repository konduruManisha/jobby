import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'
const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
