import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './Loanapp.css'
import { useFormik } from 'formik'
import swal from 'sweetalert';

export default function Loanapp(props) {

    const [info, setInfo]=useState({}); 
    console.log(info.name);
    const navigate = useNavigate();
    
    function backtodashboard() {
    navigate("/dashboard")
    }
    
    const formik = useFormik({

    initialValues: {
      title: '',
      firstname: '',
      lastname: '',
      fathername: '',
      gender: '',
      dob: '',
      nationality: '',
      houseno: '',
      streetname: '',
      city: '',
      county: '',
      postcode: '',
      email: '',
      mobile: '',
      incomemain: '',
      incomeother: '',
      expensemain: '',
      expenseother: '',
      propertyvalue: '',
      deposit: '',
      term: '',
      rate:'',

    },
   
    onSubmit: values => {        

      const mainincome = parseInt(values.incomemain); 
      const otherincome = parseInt(values.incomeother);
      const mainexpense = parseInt(values.expensemain);
      const otherexpense = parseInt(values.expenseother);
      const pprice = parseInt(values.propertyvalue);
      const deposit = parseInt(values.deposit);
      const tenure = parseInt(values.term);
      const intrRate = parseFloat((values.rate) / 1200);
      // console.log(intrRate);
      const loanAmount = pprice - deposit;
      // console.log(loanAmount);
      const cashflow = (((mainincome + otherincome) * 0.5) - (mainexpense + otherexpense));
      // console.log(cashflow);      
      const emi = tenure ? Math.round(loanAmount * intrRate / (1 - (Math.pow(1/(1 + intrRate), tenure)))): 0;
      console.log(emi);      
      const eligibility = (cashflow / emi) * 100000;
      const elgy = parseInt(eligibility)
      console.log(elgy);      

    //   const abc = function () {
    //     if(loanAmount < eligibility){
    //     return "your are eligible"
    //   }else{         
    //   }       
    //   }
    //  console.log({abc});
      

      fetch('http://localhost:8082/hlpsloaninfoapi/v1/loanapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(data => {
          if (data.status === 201) {    
            if(loanAmount < eligibility){        
            swal({title: "Your loan application has been submitted successfully.",
                  text: "As per the data submitted, you are eligibile for loan upto £" + elgy + ". Our relationship manager will contact you for further document to verify your credit worthiness and proceed with application. You will now redirect to summary page of your application.",                 
                  icon: "success",
                  button: "close", 
                  
              })
              .then (() => {
              navigate("/summary")}) 
            } else{
              swal({title: "Your loan application has been submitted successfully.",
                  text: "As per the data submitted, you are not eligible. However, our relationship manager will contact you and check if we can support you based on additional information. You will now redirect to summary page of your application.",                 
                  icon: "warning",
                  button: "close", 
              })
              .then (() => {
                navigate("/summary")})
            }           
            // navigate("/dashboard");
            
          } else {
            alert("Something went wrong. Retry!");
            navigate("/loanapp");
          }
        })
    }    
  });

  useEffect(()=>{
    fetch(` http://localhost:8081/hlpsapi/v1/userDetails/arun@gmail.com`)
    .then((result) => {result.json()
    .then((resp) => {setInfo(resp)
    })
})
},[])
  
  return (
    <div className='loanapp'>
      <div className='row mt-5'>
        <span className='laf'>Loan Application Form</span>
      </div>
      <div className='container'>
        <form className="row mb-2" onSubmit={formik.handleSubmit}>
          <div className='personaldetails'>
            <div className="accordion" >
              <div className="accordion-item"  >
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo" >
                  <button className="accordion-button" style={{ fontWeight:700, fontSize:25, color:'#5A2870' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Personal Details
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className='formdetails'>
                    <div className="col-12-sm-6md-4-lg-4">

                        <label className="form-label">Title*</label>
                        <p>{info.firstname}</p> 
                        <select className='form-control' id="title" value={formik.values.title} onChange={formik.handleChange}>
                         
                            <option value='select'>Select from dropdown</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                        </select>                     

                        <label className="form-label">First Name*</label>
                        <input type="text" className="form-control" autoComplete='off' required id="firstname" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} />
                        <label className="form-label">Last Name*</label>
                        <input type="text" className="form-control" autoComplete='off' required id="lastname" placeholder= "Last Name" value={formik.values.lastname} onChange={formik.handleChange}  />
                    
                        <label className="form-label">Father Name*</label>
                        <input type="text" className="form-control" id="fathername" autoComplete='off' required placeholder='father name' value={formik.values.fathername} onChange={formik.handleChange} />
                        
                        <label className="form-label" id='gender'>Gender*</label>
                        <select className='form-control' value={formik.values.gender} onChange={formik.handleChange} id='gender'>
                            <option value='select'>Select from dropdown</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    
                        <label className="form-label">Date of Birth*</label>
                        <input className='form-control' id='dob' type='text' autoComplete='off' required placeholder="dd-mm-yyyy" value={formik.values.dob} onChange={formik.handleChange}></input>
                 
                        <label className="form-label">Nationality*</label>
                        <select className='form-control' id='nationality' value={formik.values.nationality} onChange={formik.handleChange}>
                            <option value='select'>Select from dropdown</option>
                            <option value="Resident">Resident</option>
                            <option value="Non-resident">Non-resident</option>
                        </select>
                    
                        <label className="form-label">House Name/Number*</label>
                        <input type="text" className="form-control" id="houseno" autoComplete='off' required placeholder="house name/no" value={formik.values.houseno} onChange={formik.handleChange} />
                        
                        <label className="form-label">Street Name/Number*</label>
                        <input type="text" className="form-control" id="streetname" autoComplete='off' required placeholder="Street name/no" value={formik.values.streetname} onChange={formik.handleChange} />
                        
                        <label className="form-label">City*</label>
                        <input type="text" className="form-control" id="city" autoComplete='off' required placeholder="city" value={formik.values.city} onChange={formik.handleChange}/>
                        
                        <label className="form-label">County*</label>
                        <input type="text" className="form-control" id="county" autoComplete='off' required placeholder="county" value={formik.values.county} onChange={formik.handleChange}/>
                        
                        <label className="form-label">Postcode*</label>
                        <input type="text" className="form-control" id="postcode" autoComplete='off' required placeholder="postcode" value={formik.values.postcode} onChange={formik.handleChange}/>
                        
                        <label className="form-label">Email address*</label>
                        <input className='form-control' type='email' id='email' autoComplete='off' required placeholder="email address" value={formik.values.email} onChange={formik.handleChange} ></input>
                        
                        <label className="form-label">Contact Number*</label>
                        <input className='form-control mb-2' type='text' id='mobile' autoComplete='off' required placeholder="mobile number" value={formik.values.mobile} onChange={formik.handleChange}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-3'>
            <div className='accordion'>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" style={{ fontWeight:700, fontSize:25, color:'#5A2870' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Income & Expenses details
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className='incomedetails'>
                      <div className="col-12-sm-6md-4-lg-4">
                        <label className="form-label" id='employementtype'>What kind of employment are you in?*</label>
                        <select className='form-control' id='employementselect'>
                            <option value='select'>Select from dropdown</option>
                            <option value="self-employed">Self-employed</option>
                            <option value="full-time/part-time employed">Full-time/Part-time employed</option>
                        </select>
                    
                        <label className="form-label">Your monthly income before tax*</label>                      
                        <input className='form-control' placeholder='In £' id='incomemain' autoComplete='off' value={formik.values.incomemain} onChange={formik.handleChange} type='text'></input>
                    
                        
                            <label className="form-label mb-1">Do you have any other sources of income?</label>
                            <br></br>
                            {/* <p>This is guaranteed income that could include overtime, bonuses and commissions, as well as investments or rental income, state benefits, commission from another job or a pension.</p> */}
                            
                            <label className="form-label mt-1">Type of income*</label>
                            
                            <select className='form-control'>
                                <option value='select'>Select from dropdown</option>
                                <option value="bonus">Bonus</option>
                                <option value="overtime">Overtime</option>
                                <option value="commission">Commission</option>
                                <option value="benefit">Benefit</option>
                                <option value="pension">Pension</option>
                                <option value="rental">Rental Income</option>
                                <option value="other">Any other guaranteed income</option>
                            </select>
                        
                        <label className="form-label">Monthly other income before tax*</label>
                        <input className='form-control' placeholder='In £'  id='incomeother' autoComplete='off' value={formik.values.incomeother} onChange={formik.handleChange} type='text'></input>
                    
                        <label className="form-label mb-1">Do you hold any credit cards?</label>    
                        <br></br>

                        <label className="form-label mt-1">If yes, Outstanding Credit card balance*</label>
                        <input className='form-control' placeholder='In £' type='text' id='expensemain' autoComplete='off'  value={formik.values.expensemain} onChange={formik.handleChange}></input>
                    
                        <label className="form-label mb-1">Do you have any other loan obligation?*</label>
                        <br></br>

                        <label className="form-label mt-1">If yes, these are unsecured loans, for example: loan to buy a car/holiday/etc.</label>
                        <input className='form-control mb-2' placeholder='In £'  type='text' id='expenseother' autoComplete='off'  value={formik.values.expenseother} onChange={formik.handleChange}></input>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-3'>
            <div className='accordion'>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" style={{ fontWeight:700, fontSize:25, color:'#5A2870' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Property details
                    </button>
                    </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className='propertydetails'>
                <div className="col-12-sm-6md-4-lg-4">
                    <label className="form-label mb-0">Borrowing details</label>
                    <p className='my-1'>
                    Let’s work out how much you need. Start by telling us what you expect to pay for the property and how much you’ve saved for a deposit.
                    </p>
                
                    <label className="form-label">Approximate price of property*</label>
                    <input className='form-control' placeholder='In £' id='propertyvalue'autoComplete='off'  value={formik.values.propertyvalue} onChange={formik.handleChange} type='text'></input>
                    

                    <label className="form-label">Customer Contribution*</label> 
                    <input className='form-control' placeholder='In £' id='deposit' autoComplete='off'  value={formik.values.deposit} onChange={formik.handleChange} type='text'></input>
                
                    <h6 className='my-2'>You could save money by helping the planet</h6>
                    <span className='my-2'>Our Green mortgage products are here to reward customers who want to buy an energy efficient home. If the home you’re looking at has a valid Energy Performance Certificate (EPC) rating of A or B,you could be eligible for better mortgage interest rates.</span>
                    
                    {/* <div className='tooltip'>What is an EPC rating?
                    <span className='tooltiptext'>An EPC contains infromation about a property's energy use and typical energy costs.It gives energy rating to a property from A(Most efficient) to G (Lease efficient).</span>
                    </div> */}
                    {/* What is an EPC rating? */}
                    {/* An EPC contains infromation about a property's energy use and typical energy costs.It gives energy rating to a property from A(Most efficient) to G (Lease efficient). */}
                    
                    <br></br>
                  
                    <label className="form-label">Is the property EPC rated A or B?</label>
                    <select className='form-control'>
                        <option value='select'>Select from dropdown</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Unsure">Unsure</option>
                    </select>
                
                    <label className="form-label mb-0">Mortgage term (months)</label>
                    <p className="my-1">Note: We maximum can offer loan term upto 35 years.</p>                    
                    
                    <label className="form-label">Term(months)*</label>
                    <input className='form-control' placeholder='Term in months' id='term' autoComplete='off'  value={formik.values.term} onChange={formik.handleChange} type='text'></input>
                  
                    <label className="form-label mb-0">Indicative Interest Rate</label>
                    <p className="my-1">Note: This is indicative interest rate. Our actual offering would depend on your credit score.</p>                    
                  
                    <label>Interest rate*</label>
                    <input className='form-control mb-2' id='rate' placeholder='%' autoComplete='off'  value={formik.values.rate} onChange={formik.handleChange} type='text'></input>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>  
          <div className="col-12-sm-6md-4-lg-4">
            <button className='btn btn-success' type='submit'>Submit</button>
            </div>        
        <div className="col-12-sm-6md-4-lg-4">  
        <button className='btn btn-primary mt-3' type='submit' onClick={backtodashboard}>Back to Dashboard</button>
        </div>
        </form>
    </div>
    </div>
  )
}
