import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import LoggedOutHome from './LoggedOutHome';
import LoggedInHome from './LoggedInHome';
import GetUserEmail from '../components/GetUserEmail';
import GetUserSearchID from '../components/GetUserSearchID';
import ClearSessionStorage from '../components/ClearSessionStorage';
import RegisterUserModal from '../components/RegisterUserModal';

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    <div>
      <LoggedInHome />
      <GetUserEmail />
      <GetUserSearchID />
      <RegisterUserModal />
    </div>
  ) : (
    <div>
      <LoggedOutHome />
      <ClearSessionStorage />
    </div>
  );
};

export default Home;
