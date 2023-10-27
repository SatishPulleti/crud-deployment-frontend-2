import {Link} from "react-router-dom";
function Nav(){
    return(
        <nav class="navbar bg-warning container">
            <Link to="/" class="navbar-brand mx-3" style={{fontFamily:"Agbalumo"}}>CRUD Operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link">Create Student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>

            </div>
        </nav>
        
    )
}

export default Nav;