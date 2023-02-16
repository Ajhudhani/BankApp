import React from 'react'
// import natwestlogo from './src_assets_natwestlogo.svg';
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
// import { useFormik } from 'formik'
import { FaUserCircle } from "react-icons/fa";



export default function Dashboard(props) {

  const navigate = useNavigate();
  var email = localStorage.getItem('email');
  function loanapp() {
    // localStorage.removeItem('token');
    // localStorage.clear()
    navigate("/loanapp")}

  return (
    <div className='dashboard'>
    <div className='container'>
    <div className='row'>
      <div className='col-12-sm-6md-4-lg-4 mt-5 pt-3'>
        <span style={{fontSize:80}}><FaUserCircle /></span><h4>Welcome </h4>        
        <p>{email}</p>
      </div>
      <div className='col-12-sm-6md-4-lg-4'>
        <h5 className='mt-3'> What would you like to do?</h5>
        <button className='btn btn-success' type='submit' onClick={loanapp}>Apply for a loan</button>  
        <div>
          <div className='mt-3'>          
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Check Application Status?
          </button>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Loan Application Status</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Your loan application is under review at the credit officer. We will update you with in 3 working days with the outcome of your application.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                    
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>    
    </div>   
    </div> 
    
)
}
