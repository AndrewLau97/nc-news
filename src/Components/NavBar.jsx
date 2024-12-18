import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";

function NavBar(){
    const {user}=useContext(UserContext)
    const navigate = useNavigate();
    const handleLoginClick=()=>{
        navigate("/login")
    }
    const handleProfileClick=()=>{
        console.log("to go to profile page - to be added")
    }
    // console.log(user)
    return <nav className="NavBar">
        <ul className="NavBarElement"><li><Link to="/">Home</Link></li><li><a>Categories</a></li></ul>
        {Object.keys(user).length===0?<button className="Login" onClick={handleLoginClick}>Login</button>:<CardMedia
        sx={{ height: 50,
            width:50
         }}
        image={user.avatar_url}
        className="Profile"
        onClick={handleProfileClick}
        />}
        
    </nav>
}

export default NavBar