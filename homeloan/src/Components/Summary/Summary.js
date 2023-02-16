import React, { useState, useEffect } from 'react';
import './Summary.css';

// import { useFormik } from 'formik'
// import { useNavigate } from "react-router-dom";

export default function Summary() {
    const [info, setInfo] = useState({});
    var email = localStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:8082/hlpsloaninfoapi/v1/getInfo/${email}`)
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setInfo(resp)
                    })
            })
    }, [])

    return (
        <div className='summary-main'>
        <div className='container'>
            <h2 className='summary'>Summary Loan Application</h2>
            <div className='row'>
                <div className="container text-center">
                    <h3 className='heading'>Personal Details</h3>
                    <div className="row align-items-start">
                        <div className="col">
                            Full Name : {info.title}  {info.firstname}  {info.lastname}
                        </div>
                        <div className="col">
                            Father Name : {info.fathername}
                        </div>
                        <div className="col">
                            Gender : {info.gender}
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            Date of Birth  : {info.dob}
                        </div>
                        <div className="col">
                            Nationality : {info.nationality}
                        </div>
                        <div className="col">
                            Address  : {info.houseno}, {info.streetname},
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            City : {info.city}
                        </div>
                        <div className="col">
                            County : {info.county}
                        </div>
                        <div className="col">
                            Postcode : {info.postcode}
                        </div>
                    </div>
                </div>

                <div className="container text-center">

                    <div className="row align-items-start">
                        <div className="col">
                            Email : {info.email}
                        </div>
                        <div className="col">
                            Contact Number : {info.mobile}
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <h3 className='heading'>Income & Expense Details</h3>
                <div className="row align-items-start">
                    <div className="col">
                        Income from Main Source : £{info.incomemain}
                    </div>
                    <div className="col">
                        Guaranteed Income from Other Sources : £{info.incomeother}
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                        Credit Card Outstanding Expense : £{info.expensemain}
                    </div>
                    <div className="col">
                        Other Financial Committment : £{info.expenseother}
                    </div>
                </div>
            </div>


            <div className="container text-center">
                <h3 className='heading'>Property Details</h3>
                <div className="row align-items-start">
                    <div className="col">
                        Estimated Property Value : £{info.propertyvalue}
                    </div>
                    <div className="col">
                        Contribution from Own Sources : £{info.deposit}
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                        Tenure of the loan (In months) : {info.term}
                    </div>
                    <div className="col">
                        Indicative rate of Interest (per annum) : {info.rate}%
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}
