import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function RegisterUserModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  setTimeout(() => {
    if (sessionStorage.getItem('spice_search_id') === null) {
      setShow(true);
      console.log('Show Modal')
    }
    if (sessionStorage.getItem('spice_search_id') === '') {
      setShow(true);
      console.log('Show Modal')
    }
  }, 400);

  function SubmitCabinetName() {
      var spiceIDstring = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      console.log(spiceIDstring)  
      var email = sessionStorage.getItem('email')
      //var email = 'testaccount4@test.com'
      console.log(email)
      fetch(`http://localhost:4002/recipes/newuserscabinet?Email=${email}&SpiceID=${spiceIDstring}`)
      .catch(err=> console.error(err))
      console.log('submitted')
      sessionStorage.setItem('spice_search_id', spiceIDstring)
      console.log(sessionStorage.getItem('spice_search_id'))
      setShow(false)
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Let's get your cabinet registered.
        </p>
        <Form>
          <Button onClick={SubmitCabinetName} variant="primary" href="\cabinet">
            Proceed
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default RegisterUserModal;
