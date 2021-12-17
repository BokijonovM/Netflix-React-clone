// import { Spinner } from 'react-bootstrap'

// function Loading() {
//     return (
//         <Spinner className="loader" animation="grow" variant="danger" style={{ maxWidth: "64px", height: "64px" }} />
//     )
// }

// export default Loading

import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <ReactLoading type={"spinningBubbles"} color={"white"} height={667} width={375} />
);

export default Loading