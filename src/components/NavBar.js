import React from 'react';
import Home from "./Home";
import Blogs from "./Blogs";
import CreatePost from "./CreatePost";
import Login from "./Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Navbar (props) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    };
   return (
    <Router>
      <div>
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Blogs</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"> Home </Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Blogs"> Blogs </Link>

        </li>
        {!isAuth ? (
            
          <Link className="nav-link btn btn-info" to="/login"> Login </Link>
        ) : (
          <>
         
            <Link className="nav-link active" aria-current="page" to="/createpost"> Create Posts </Link>
            <button className='btn btn-info' onClick={signUserOut}> Log Out</button>
       
          </>
        )}
         
      </ul>
    
    </div>
  </div>
</nav>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    )

}
