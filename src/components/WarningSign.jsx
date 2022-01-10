import { Component } from 'react'
import { Alert, Row } from 'react-bootstrap'

class WarningSign extends Component {
    state = {
        variant: {
            success: 'success',
            danger: 'danger',
            primary: 'primary'
        }

    }

    render() {

        return (
            <Row>
                <Alert className="m-0 w-100" variant={this.state.variant.danger}>
                    {this.props.text}
                </Alert>
            </Row>
        )
    }
}

export default WarningSign