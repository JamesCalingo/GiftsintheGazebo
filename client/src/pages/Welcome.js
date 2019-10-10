import React from "react";
import { NavLink } from 'react-router-dom';
// import { url } from "inspector";

function Welcome() {
  return (
    <div>
      <div className="jumbotron" style={{ backgroundImage:  "url('client/src/components/IMG_3307.JPG')"}}>
        <h1 className="logo">Gifts in the Gazebo</h1>
        A place for wishlists, registries, and more!</div>
      <div className="container">
       <div className="row justify-content-center">
        <div className="col-12 col-md-9">
        <div className="card text-center">
          <div className="card-body">
            <h2>How can we help you today?</h2>
            <NavLink to="/LogIn" className="btn btn-primary mx-2">Create Registry</NavLink>
            <NavLink to="/UserSearch" className="btn btn-success mx-2">Find/View Registry</NavLink>
          </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Welcome