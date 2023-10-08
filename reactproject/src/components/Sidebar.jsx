import React from 'react'


function sidebar() {
  return <>
    <ul className="navbar-nav bg-light sidebar sidebar-light accordion" id="accordionSidebar">
    <li className="nav-item active p-4  text-center">
     <h3>Notes App</h3>
      </li>
     <li className="nav-items active  border-radius:10px text-center">
    <h3>  <i className="fa-light fa-memo-pad" style={{ color: "#27282b;" }}></i>Notes </h3>
      </li>
   </ul>

  </>
}

export default sidebar