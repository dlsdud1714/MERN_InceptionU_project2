import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
    const children = props.children;
    
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState();
    console.log("loggedInUser is", loggedInUser);
    // const [loading, setLoading] = useState();
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("/auth/loggedInUser");
            const userData = await response.json();
            setLoggedInUser(()=>userData);
            setLoading(false);
            // console.log("loggedInUser is", loggedInUser);
        
      };
      getUser();
    }, []);
  
    const login =(user)=>{
        setLoggedInUser(user)
    }
    const logout =()=>{
        setLoggedInUser(null);
        
        console.log("jsut after loggedout", loggedInUser)
    }
    const values = {login, logout, loggedInUser, loading};
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;