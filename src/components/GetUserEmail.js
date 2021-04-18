import { useAuth0 } from "@auth0/auth0-react";

const GetUserEmail = () => {
  const { user } = useAuth0();
  console.log(user.email)
  const queery_user = user.email.replace('+','%2B')
  sessionStorage.setItem('email',queery_user)
  console.log(sessionStorage.getItem('email'))
  return(null)
};

export default GetUserEmail;