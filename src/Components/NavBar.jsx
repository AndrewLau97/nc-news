import { Link } from "react-router-dom"

function NavBar(){
    return <nav className="NavBar">
        <ul className="NavBarElement"><li><Link to="/">Home</Link></li><li><a>Categories</a></li></ul>
        <button className="Profile">Profile</button>
    </nav>
}

export default NavBar