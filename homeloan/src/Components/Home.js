import homeimage from './home_image.JPG';
import './Style.css';

import { FaInfoCircle } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

import React, { useState } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {

    const [loanAmount, setloanAmount] = useState(100000);
    const [interest, setinterest] = useState(10);
    const [loanTenure, setloanTenure] = useState(60);
    const [emi, setEmi] = useState(2125);
    const [totalAmount, settotalAmount] = useState(127500);
    const [totalAmountofInterest, settotalAmountofInterest] = useState(27500);

    function handleCalculate() {
        const intrRate = interest / 1200;
        const emi = loanTenure ? Math.round(loanAmount * intrRate / (1 - (Math.pow(1 / (1 + intrRate), loanTenure)))) : 0;
        setEmi(emi);
        const totalAmount = emi * loanTenure;
        settotalAmount(totalAmount);
        const totalAmountofInterest = totalAmount - loanAmount;
        settotalAmountofInterest(totalAmountofInterest);
    }

    // window.history.pushState(null, document.title, window.location.href);
    // window.addEventListener('popstate', function (event) {
    // window.history.pushState(null, document.title, window.location.href);
    // });

    return (


        <div className='homepage'>
            <br></br>
            <div className="carousel slide mt-5 mx-2">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={homeimage} className="cimage d-block w-100" alt="home_image" />
                    </div>
                </div>
            </div>
            <section>
                <div className="loan-calculator">
                    <div className="left">
                        <h2>EMI calculator</h2>
                        <div className="left-side">
                            <div className="group">
                                <div className="title">Loan Amount</div>
                                <input className="loan-amount" placeholder='In £' type="text" value={loanAmount} onChange={e => setloanAmount(e.target.value)}  ></input>
                            </div>
                            <div className="group">
                                <div className="title">Interest Rate</div>
                                <input className="interest-rate" placeholder='%' type="text" value={interest} onChange={e => setinterest(e.target.value)}  ></input>
                            </div>
                            <div className="group">
                                <div className="title">Tenure (in months)</div>
                                <input className="loan-tenure" placeholder='term (in months)' type="number" value={loanTenure} onChange={e => setloanTenure(e.target.value)}  ></input>
                            </div>
                            <div className="group">
                                <button className="calculate-btn" onClick={handleCalculate}>Calculate</button>
                            </div>
                        </div>
                    </div>
                    <div className="center  ">
                        <h2>Output Details</h2>
                        <div className="loan-emi">
                            <h5>Loan EMI</h5>
                            <div className="value" title="emi">{emi}</div>
                        </div>
                        <div className="principal-amount">
                            <h5>Principal Amount</h5>
                            <div className="value" >{loanAmount}</div>
                        </div>
                        <div className="total-interest">
                            <h5>Total Interest Payable</h5>
                            <div className="value">{totalAmountofInterest}</div>
                        </div>
                        <div className="total-amount">
                            <h5>Total Amount Payable</h5>
                            <div className="value">{totalAmount}</div>
                        </div>
                    </div>
                    <div className="right  ">
                        <h2>Graphical Details</h2>
                        <div className="pie-chart">
                            <Pie data={{
                                labels: ['Total Interest', 'Total Amount'],
                                datasets: [{
                                    data: [totalAmountofInterest, totalAmount],
                                    backgroundColor: ['#5A2870', '#8B3FB2'],
                                    borderWidth: 5,
                                }]
                            }}
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='mainproductpage'>
                        <div className='products'>
                            <div id='product' >
                                <span>What are you looking to do?</span>
                            </div>


                            <div className='row'>
                                <div className='col' >
                                    <a href='/login' id='anchor' title='Get an Agreement in Principle'>
                                        <span className='span'>Get an Agreement in Principle</span>
                                    </a>
                                </div>
                                <div className='col'>
                                    <a href='/comingsoon' id='anchor' title='Move Home'><span className='span'>Move Home</span></a>
                                </div>
                                <div className='col' >
                                    <a href='/comingsoon' id='anchor' title='Buy my first home'>
                                        <span className='span'>Buy my first home</span>
                                    </a>
                                </div>
                            </div>



                            <div className='row'>
                                <div className='col' >
                                    <a href='/comingsoon' id='anchor' title='Remortgage to NatWest'>
                                        <span className='span'>Remortgage to NatWest</span>
                                    </a>
                                </div>
                                <div className='col'>
                                    <a href='/comingsoon' id='anchor' title='Apply for a mortgage'><span className='span'>Apply for a mortgage</span></a>
                                </div>
                                <div className='col' >
                                    <a href='/comingsoon' id='anchor' title='Log in to Manage my Mortgage'>
                                        <span className='span'>Log in to Manage my Mortgage</span>
                                    </a>
                                </div>
                            </div>

                            <div className='row'>

                                <div className='col'>
                                    <a href='/comingsoon' id='anchor' title='Buy a property to let'><span className='span'>Buy a property to let</span></a>
                                </div>
                            </div>
                            <div className='mt-4 px-2'>
                                <span className='iconhome'><FaInfoCircle /></span>

                                <p>
                                    NatWest mortgages are available to over 18s. Your home or property may be repossessed if you do not keep up repayments on your mortgage.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='loan'>
                        <div className='row'>
                            <div className='col'>
                                <span className='iconhome'><MdDescription /></span>
                                <h3>You could buy your new home with just a 5% deposit</h3>
                            </div>
                            <div className='col mt-5'>
                                <p className='para1'>
                                    With our range of 95% mortgages, you could be moving into your new home sooner than  you imagined.
                                    <a href='/home'><span><BsBoxArrowUpRight /></span></a>
                                </p>
                                <p className='para2 ' >
                                    <a href='/home' id='bold'>
                                        <b>Find out more about 95% mortgages </b>
                                        <span><BsBoxArrowUpRight /></span>
                                    </a>
                                </p>
                                <p>
                                    Exclusions & eligibility criteria apply.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}