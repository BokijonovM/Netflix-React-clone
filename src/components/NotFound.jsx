import { Component } from 'react'
import { Link } from 'react-router-dom'
import withRouter from '../helper/withRouter'

class NotFound extends Component {
    render() {
        console.log('PROPS OF NOT FOUND', this.props.router)
        return (
            <div className='py-4'>
                <h1 className='pl-4'>404 - Page not found</h1>
                <h3 className='pl-4'>the not found path is: {this.props.router.location.pathname}</h3>
                <h3 className='pl-4'>This is not the page you were looking for :(</h3>
                <h4 className='pl-4'>Click <Link to="/"> here </Link> to go home</h4>
            </div >
        )
    }
}

export default withRouter(NotFound)
// this is how you use your withRouter function!
// and you can use it also on CLASS COMPONENTS :)