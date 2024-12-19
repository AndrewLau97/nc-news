import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";
import { getTopics } from "../api";

function NavBar() {
  const { user } = useContext(UserContext);
  const [topics,setTopics]=useState([])
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };
  // console.log(user)

  useEffect(()=>{
    getTopics().then((topics)=>{
        setTopics(topics)
    })
  },[])

  return (
    <nav className="NavBar">
      <ul className="NavBarElement">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <div className="DropDown">
            <button className="dropbtn">Categories
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                {topics.map((topic)=>{
                    return <Link to={`/topic/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
            </div>
            </div>
        </li>
      </ul>
      {Object.keys(user).length === 0 ? (
        <button className="Login" onClick={handleLoginClick}>
          Login
        </button>
      ) : (
        <CardMedia
          sx={{ height: 50, width: 50 }}
          image={user.avatar_url}
          className="Profile"
          onClick={handleProfileClick}
        />
      )}
    </nav>
  );
}

export default NavBar;
