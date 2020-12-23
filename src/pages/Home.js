import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import LoggedOutHome from "./LoggedOutHome";
import LoggedInHome from "./LoggedInHome";

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
      }
  
    return isAuthenticated ? 
        <div>
            <p>
                <LoggedInHome />
            </p>
        </div>
        :
        <div>
            <p>
                <LoggedOutHome />
            </p>
        </div>;
  };
  
  export default Home;


