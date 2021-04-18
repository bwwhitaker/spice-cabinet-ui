import RegisterUserModal from './RegisterUserModal'

function GetUserSearchID() {

  function RetrieveID() {
    //console.log(sessionStorage.getItem('email'))
  const queery_email = sessionStorage.getItem('email')
  //console.log(queery_email)
  fetch(`http://localhost:4002/recipes/userdata?username=${queery_email}`)
  .then(resp => resp.json())
  .then(data => sessionStorage.setItem('spicy', JSON.stringify(data)))
  //.then(console.log(sessionStorage.getItem('spicy')))
  .catch((err) => console.error(err));
  }
  

  function CleanID() {
    var retrievedID = JSON.parse(sessionStorage.getItem('spicy'))
    //console.log(retrievedID)
    if (JSON.stringify(retrievedID) === '{"data":[]}') {
      console.log('ID Not Does Not Exist')
      sessionStorage.setItem('spice_search_id','')
  } else { 
    var cleanedID = retrievedID.data[0].spice_id
    console.log(cleanedID)
    sessionStorage.setItem('spice_search_id', cleanedID)
    console.log(sessionStorage.getItem('spice_search_id')) 
  
    }
}
  

  function RegisterUser() {
    if ( sessionStorage.getItem('spice_search_id') === '') {
      console.log(`Let's get registered!`)
      RegisterUserModal()
    } else {console.log('Ready')}

  }
  RetrieveID()
  setTimeout(CleanID(), 5000)
  setTimeout(RegisterUser(), 1000)
  
  return(null)
};

export default GetUserSearchID;