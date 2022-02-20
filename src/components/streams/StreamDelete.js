import React, {useEffect, useState} from "react";
import Modal from "../Modal";
import history from '../../history';
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams, deleteStream } from "../../store/streamActions";

const StreamDelete = () =>
{
    const [stream, setStream] = useState(null)
    const {id} = useParams();
    const dispatch = useDispatch();
    const streams = useSelector(value => value.streams.streams);

    useEffect(()=>
    {
        dispatch(fetchStreams())
    }, [])

    useEffect(()=> 
    {
        setStream(streams[id]); 
    }, [streams])

    const renderActions = () =>
    {
        return(
            <React.Fragment>
                <button className='ui button negative '
                        onClick={() => dispatch(deleteStream(id))}
                >
                    Delete
                    </button>
                <Link to="/" className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }

    const renderContent = () => 
    {
        console.log(stream?.title)
        if(!stream)
        return 'Are you sure you want to delete the stream?';
        else return `Are you sure you want to delete the stream with title: "${stream?.title}"`
    }

    return (
        <Modal 
            title="Delete a Stream"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={ ()=>history.push("/")}
        />
    )

}

export default StreamDelete