import React from 'react'


function sidebar() {
  return <>
    <ul className="navbar-nav bg-light sidebar sidebar-light accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand  align-items-center justify-content-center" href="javascript(void)">
   <div>medical user </div>
</a>

{/* <!-- Divider --> */}

{/* 
<!-- Nav Item - Dashboard --> */}
<li className="nav-item active ">
    <a className="nav-link" href="javascript(void)">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span className='{}'>Dashboard</span></a>
</li>



{/* <!-- Heading --> */}


{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
       <i class="fa-thin fa-memo-pad"></i>
        <span>Lab Test</span>
    </a>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Appointment</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Medical Order</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Message</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Payment</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Setting</span>
    </a>
</li>

</ul>

  </>
}

export default sidebar