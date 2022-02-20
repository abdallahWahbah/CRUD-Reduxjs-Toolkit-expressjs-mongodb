// import React from "react";
// import { createStream } from '../../actions';
// import { connect } from 'react-redux';
// import StreamForm from "./StreamForm";

// class StreamCreate extends React.Component
// {
//     onSubmit = (values) => 
//     {
//         console.log(values);
//         this.props.createStream(values); // action creator
//     }

//     render()
//     {
//         return (
//             <div>
//                 <h3>Create a Stream</h3>
//                 <StreamForm onSubmit={this.onSubmit} />
//             </div>
//         )
//     }
// }

// export default connect(null, {createStream})(StreamCreate);


import React from "react";
import {useDispatch} from 'react-redux'

import StreamForm from "./StreamForm";
import { createStream } from "../../store/streamActions";

const StreamCreate = () =>
{
    const dispatch = useDispatch();

    const onSubmit = (values) => 
    {
        // console.log(values);
        dispatch(createStream(values))
    }

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    )

}

export default StreamCreate;