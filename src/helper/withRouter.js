import { useLocation, useNavigate, useParams } from 'react-router-dom'

const withRouter = (Component) => (props) => {
  let location = useLocation()
  let navigate = useNavigate()
  let params = useParams()
  return <Component {...props} router={{ location, navigate, params }} />
}

export default withRouter

// withRouter creates HOCs
// Higher Order Components
// withRouter is a function that takes a React Component (functional or class based) and returns you
// a NEW COMPONENT!! :)
// this new component has MORE PROPS than the one we started from...
// in addition to its old ones, will have also location, navigate and params
