import React from 'react'
const AuthContext = React.createContext({
    loggedInUser: null,
    loading: false,
    login: ()=>{

    },
    logout: ()=>{

    }
});

export default AuthContext