import { useState } from "react";

const UsestateComp = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(userName.trim().length <= 0 || password.trim().length <= 0){
        alert('Username and password is mandetory');
        return false;
    }else{
        alert('You are ok brother')
    }
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit} style={ { width: '15%',  textAlign: 'center',border: '2px solid black',marginLeft:'auto',marginRight:'auto', marginTop:'10px' }}>
        <div>
          <label>UserName </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={userNameHandler}
          />
        </div>

        <div>
          <label>Password </label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default UsestateComp;

/*const UsestateComp = () => {
    let [loginUsers, setLoginUsers] = useState({
        userName : "",
        password : ""
    })

    const {userName,password} = loginUsers;
  

    const handleFormSubmit = (e)=>{
      e.preventDefault();
      if(userName.trim().length <= 0 || password.trim().length <= 0){
          alert('Username and password is mandetory');
          return false;
      }else{
          alert('You are ok brother')
      }
    }

    const inputHandler = (e) =>{
       setLoginUsers({
           ...loginUsers,
           [e.target.name]:e.target.value
       })
    }
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>UserName </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={inputHandler}
            />
          </div>
  
          <div>
            <label>Password </label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={inputHandler}
            />
          </div>
  
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
  export default UsestateComp;*/

// const UsestateComp = () => {
//   let [status, setStatus] = useState("Alive");

//   let changeStatusHandler = () => {
//     if (status === "Alive") {
//       setStatus("Dead");
//     } else {
//       setStatus("Alive");
//     }
//   };

//   return (
//     <div>
//       <button onClick={changeStatusHandler}>{status}</button>
//     </div>
//   );
// };
// export default UsestateComp;
