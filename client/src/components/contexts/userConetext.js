import React from 'react'
const AuthContext = React.createContext({
    loading: false,
    loggedInUser: null,
    login: ()=>{

    },
    logout: ()=>{

    }
});

export default AuthContext