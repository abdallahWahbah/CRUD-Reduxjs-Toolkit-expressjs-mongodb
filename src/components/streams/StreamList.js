import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams } from "../../store/streamActions";

const StreamList = () =>
{
    const dispatch = useDispatch();
    const streams = useSelector(value => Object.values(value.streams.streams))
    const auth = useSelector(value => value.auth)
    
    useEffect(()=>
    {
        dispatch(fetchStreams());
    }, [dispatch])

    const renderAdmin = (stream) => // render edit and delete buttons
    {
        return (
            <div className="right floated content">
                <Link to={`/streams/edit/${stream._id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/streams/delete/${stream._id}`}className="ui button negative">
                    Delete
                </Link>
            </div>
        )
    }

    const renderList = () =>
    {
        if(Object.keys(streams).length === 0) return;

        return(
            streams.map(stream =>
            {
                return(
                    <div className="item" key={stream._id}>
                        {renderAdmin(stream)}
                        <i className="large middle aligned icon camera"/>
                        <div className="content">
                            <Link to={`/streams/show/${stream._id}`} className="header">{stream.title}</Link>
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>      
                )
            })
        )
    }

    const renderCreateStreamButton = () =>
    {
        if(auth.isSignedIn)
        {
            return(
                <div  style={{textAlign: "right"}}>
                    <Link to="/streams/new"  className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }
      return(
            <div>
                Streams
                <div className="ui celled list">
                    {renderList()}
                </div>
                {renderCreateStreamButton()}
            </div>
        )
    
}

export default StreamList;