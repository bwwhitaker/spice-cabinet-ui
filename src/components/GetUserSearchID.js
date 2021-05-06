function GetUserSearchID() {
  //Uncomment Next Line to Run with Real User ID
  const queery_email = sessionStorage.getItem('email');
  //Uncomment Next Line to Test Register User with a Unregistered email
  //const queery_email = 'unregisteredemail@gmail.com';
  //Uncomment Next Line to Test Register User with Incomplete Registration email
  //const queery_email = 'newemail@gmail.com';

  fetch(`http://localhost:4002/recipes/userdata?username=${queery_email}`)
    .then((resp) => resp.json())
    .then((data) => {
      var cleanedID = data.data[0].spice_id;
      //console.log(cleanedID);
      sessionStorage.setItem('spice_search_id', cleanedID);
      console.log(sessionStorage.getItem('spice_search_id'));
    })
    .catch((err) => console.error(err));

  return null;
}

export default GetUserSearchID;
