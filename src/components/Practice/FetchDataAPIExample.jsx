import react from "react";
import { useState,useEffect,useContext,useRef,useReducer,useCallback,useMemo} from "react";


const gitHubUrl = "https://api.github.com/users/deekshasharma";

const FetchDataAPIExample = () =>{

    const[userData ,setUserData] = useState({});

    useEffect(() =>{
        getGitHubUserWithFetch()
    },[]);
    
    const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
      };
      return(
            <div className="my-app">
                <header className="app-header">
                    <h2>3**Github User Data**</h2>
                </header>
                <div className="user-container">
                
                    <h5 className="item-info">{userData.name}</h5>
                    <h5 className="item-info">{userData.location}</h5>
                    <h5 className="item-info">{userData.blog}</h5>
                    <h5 className="item-info">{userData.avatar_url}</h5>
                    <h5 className="item-info">{userData.company}</h5>
                </div>
            </div>
      )
}
export default FetchDataAPIExample;