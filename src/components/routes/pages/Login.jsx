
import { useLocation } from "react-router-dom"
const Login = () => {
    let location = useLocation();
  return (
    <>
      <h1>Login Page</h1>
      <h2>{location.state.st}</h2>
    </>
  )
}

export default Login
