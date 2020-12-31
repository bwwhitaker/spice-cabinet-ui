import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import Container from 'react-bootstrap/Container';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <Container>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p></p>
        <p>
          <a href="/admin"> Admin</a>
        </p>
      </Container>
    )
  );
};

export default Profile;
