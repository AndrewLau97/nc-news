import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/UserContext"
import { useContext, useEffect, useState } from "react"


function Profile(){
    const{user,setUser}=useContext(UserContext)
    const [comments,setComments]=useState([])
    const navigate=useNavigate()
    const handleLogOut=()=>{
        setUser({})
        navigate("/")
    }
    useEffect(()=>{
    },[])
    return (<>
    <div className="ProfileInfo">
        <h2>{user.username}</h2>
        <img src={user.avatar_url}/>
        <p>{user.name}</p>
    <button onClick={handleLogOut}>Log Out</button>
    </div>
    <div className="UserComments">
            {/**
             functionality incomplete, need to work on back end to be able to get all comments from a certain user - to be implemented
             */}
    </div>
    </>)
}

export default Profile