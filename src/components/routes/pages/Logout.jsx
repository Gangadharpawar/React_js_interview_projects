import { useLocation } from "react-router-dom"
const Logout = () => {
    let location = useLocation();
  return (
    <>
      <h1>Logout Page</h1>
      <h2>{location.state.name} Logeed Out !!</h2>
    </>
  )
}

export default Logout
