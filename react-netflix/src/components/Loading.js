import { Spinner } from 'react-bootstrap'

function Loading() {
    return (
        <Spinner className="loader" animation="grow" variant="danger" style={{ maxWidth: "64px", height: "64px" }} />
    )
}

export default Loading