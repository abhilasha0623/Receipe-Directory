import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
   <div className="navbar">
    <nav>
    <Link to="/" className="brand">
   <h1 >Cooking Ninja</h1>
   </Link>
   <Link to="/create">Create Receipe </Link>
    </nav>
   
        </div>
    )
}

export default Navbar;