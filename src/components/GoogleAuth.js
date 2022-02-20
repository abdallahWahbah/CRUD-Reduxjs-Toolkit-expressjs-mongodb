// import React from 'react';

// import {connect} from 'react-redux';
// import {signIn, signOut} from '../actions';

// class GoogleAuth extends React.Component
// {

//     componentDidMount()
//     {
//         window.gapi.load('client:auth2', () => // the second parameter (callback func) will ba called after "client:auth2" library is successfully loaded up into the gapi
//         {
//             window.gapi.client.init({ // initializing authentication client
//                 clientId: '675163007420-v18vj7im7tb0mabf4ndhn9l20dvf184f.apps.googleusercontent.com',
//                 scope: 'email' // scope: what different parts of the user account we want to get access to 
//             }).then(()=>
//             {
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 this.onAuthChange(this.auth.isSignedIn.get()) // we call it here and below.....here to get the auth status when we first initialize the library (redux store)
//                 this.auth.isSignedIn.listen(this.onAuthChange); // when you sign in or out(when isSignedIn changes), call onAuthChange
//             });
//         });
//     }

//     onAuthChange = (isSignedIn) => // isSignedIn = this.auth.isSignedIn.get()
//     {
//         if(isSignedIn) 
//         {
//             this.props.signIn(this.auth.currentUser.get().getId()); // action creator, related to redux (not props coming from parent)
//         }
//         else
//         {
//             this.props.signOut(); // action creator, related to redux (not props coming from parent)
//         }
//     }

//     onSignInClick = () => // an arrow function cause it's a callback
//     {
//         this.auth.signIn();
//     }

//     onSignOutClick = () => // an arrow function cause it's a callback
//     {
//         this.auth.signOut();
//     }

//     renderAuthButton()
//     {
//         if(this.props.isSignedIn === null) return null
//         else if(this.props.isSignedIn)
//         {
//             return (
//                 <button className='ui red google button' onClick={this.onSignOutClick}>
//                     <i className='google icon'/>
//                     Sign Out
//                 </button>
//             )
//         }
//         else
//         {
//             return (
//                 <button className='ui red google button' onClick={this.onSignInClick}> 
//                     <i className='google icon'/>
//                     Sign In with Google
//                 </button>
//             )
//         }
//     }

//     render()
//     {
//         return (
//             <div>{this.renderAuthButton()}</div>
//         )
//     }
// }

// const mapStateToProps = (state) =>
// {
//     // console.log(state.auth)
//     return {isSignedIn: state.auth.isSignedIn}
// }

// export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);


import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authAction } from '../store/authSlice';

const GoogleAuth = () =>
{
    const [auth, setAuth] = useState();
    const dispatch = useDispatch();
    const isSignedIn = useSelector(val => val.auth.isSignedIn)

    useEffect(()=> 
    {
        window.gapi.load('client:auth2', () => // the second parameter (callback func) will ba called after "client:auth2" library is successfully loaded up into the gapi
        {
            window.gapi.client.init({ // initializing authentication client
                clientId: '675163007420-v18vj7im7tb0mabf4ndhn9l20dvf184f.apps.googleusercontent.com',
                scope: 'email' // scope: what different parts of the user account we want to get access to 
            }).then(()=>
            {
                // this.auth = window.gapi.auth2.getAuthInstance();
                setAuth(window.gapi.auth2.getAuthInstance())
                onAuthChange(this.auth.isSignedIn.get()) // we call it here and below.....here to get the auth status when we first initialize the library (redux store)
                auth.isSignedIn.listen(this.onAuthChange); // when you sign in or out(when isSignedIn changes), call onAuthChange
            });
        });
    }, [])

    const onAuthChange = (isSignedIn) => // isSignedIn = this.auth.isSignedIn.get()
    {
        if(isSignedIn) 
        {
            // this.props.signIn(this.auth.currentUser.get().getId()); // action creator, related to redux (not props coming from parent)
            dispatch(authAction.signIn(this.auth.currentUser.get().getId()))
        }
        else
        {
            this.props.signOut(); // action creator, related to redux (not props coming from parent)
            dispatch(authAction.signOut())
        }
    }

    const onSignInClick = () => // an arrow function cause it's a callback
    {
        auth.signIn();
    }

    const onSignOutClick = () => // an arrow function cause it's a callback
    {
        auth.signOut();
    }

    const renderAuthButton = () =>
    {
        if(isSignedIn === null) return null
        else if(isSignedIn)
        {
            return (
                <button className='ui red google button' onClick={onSignOutClick}>
                    <i className='google icon'/>
                    Sign Out
                </button>
            )
        }
        else
        {
            return (
                <button className='ui red google button' onClick={onSignInClick}> 
                    <i className='google icon'/>
                    Sign In with Google
                </button>
            )
        }
    }

    return (
        <div>{renderAuthButton()}</div>
    )

}

export default GoogleAuth;