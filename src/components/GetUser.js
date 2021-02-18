import React from "react";


import { useAuth0 } from "@auth0/auth0-react";

const GetUser = () => {
  const { user } = useAuth0();
  console.log(user.email)
  sessionStorage.setItem('email',user.email)
  console.log(sessionStorage.getItem('email'))

  return(null)
  
};

export default GetUser;