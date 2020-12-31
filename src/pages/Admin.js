import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';
import Container from 'react-bootstrap/Container';

const Admin = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <Container>
        <h2>Admin Page</h2>
      </Container>
    )
  );
};

export default Admin;
