import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext"
import { getUsers } from "../api"
import { useNavigate } from "react-router-dom";

function Login(){
const {user,setUser}=useContext(UserContext)
const navigate = useNavigate();
const [input,setInput]=useState("")
const [allUsers,setAllUsers]=useState([])
const handleClick=(e)=>{
    e.preventDefault()
    getUsers().then((users)=>{
        let username=users.filter((userId)=>{return userId.username===input})
        if(username.length!==0){
            setUser(username[0])
            navigate("/")
        }else{
            alert("Incorrect username/password")
        }
    })
}
const handleChange=(e)=>{
setInput(e.target.value)
}
useEffect(()=>{
    getUsers().then((users)=>{
        setAllUsers(users)
    })
},[])
return (<>
    <div>
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" value={input} onChange={handleChange}/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"/>
            <button onClick={handleClick}>Login</button>
        </form>
    </div>
    <div>
        <p>for tesing these are the usernames, no password</p>
        {allUsers.map((userData)=>{
            return <p key={userData.username}>{userData.username}</p>
        })}
    </div>
</>
)
}


export default Login