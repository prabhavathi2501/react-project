import React from 'react'
import Table from 'react-bootstrap/Table';



function Dashboard() {
  return <> 
  
  <div className="container-fluid">
    <div className="d-lg-flex align-items-center justify-content-between mb-4">
      <div className='col-7'>
    <input className="form-control" type="text" value= "Search..." aria-label="readonly input example" readonly></input>
        </div>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-light shadow-sm"><i className="fa-light fa-bell"></i> </a>
    </div>
    
    <div className='row my-2 '>
      <h3>sales imformation</h3>
      <div className='row'>
        <div className='col-3 p-2'>
        <h4>custermer:</h4>
        <input placeholder='Enter customer name'></input>
        </div>
        <div className='col-3 p-2'>
        <h4>invoice id:</h4>
           <input placeholder='Enter Invoice Id'></input>
        </div>
        <div className='col-3 p-2'>
        <h4>Start Date:</h4>
        <input placeholder='Start Date'></input>
        </div>
        <div className='col-3 p-2'>
        <h4>End Date:</h4>
        <input placeholder=' End Date'></input>
        </div>
      </div>
    </div>
    <div className='container-fluild'>
  <div className='row'>
  <Table className="table-borderless my-4 p-5" >
       <thead>
        <tr>
          
          <th><i className=" fa-thin fa-stop"></i></th>
          <th>Invoice</th>
          <th>Dtae</th>
          <th>Customer</th>
          <th>Payble amount</th>
          <th>paid amount</th>
        </tr>
      </thead>
      <tbody className=''>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th className='text-muted'>23/09/2022</th>
          <th className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
        <tr>
          <th><i className=" fa-thin fa-stop"></i></th>
          <th style={{color:"blue"}}>#AHGA68</th>
          <th  className='text-muted'>23/09/2022</th>
          <th  className='text-muted'>Jacob Marcus</th>
          <th  className='text-muted'>$100</th>
          <th  className='text-muted'>$00</th>
          
        </tr>
      </tbody>
      </Table>
   </div>
  </div>
   
   
   
   
   
   
    </div>
    
  
</>
}

export default Dashboard