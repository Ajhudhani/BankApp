import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useNavigate } from "react-router-dom";
import './Style.css';
import secgif from './nw-security.gif';
import swal from 'sweetalert';


export default function Login() {
    
    const [error, setError] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:8081/auth/v1/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // if (data.status !== 401) {
                    if (data.token !== null) {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('email', data.email);
                        swal("Welcome!", "You have been successfully loggedin!", "success");
                        navigate("/dashboard");
                    } else {
                        setError(true);
                        setMsg(data.message);
                    }
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });
    return (
        <div>
            <div className=" container py-5 my-5">
                <div className="row my-5">                    
                        <div className='loginimage col-4 mt-5 px-0'>
                            <a href='https://www.natwest.com/fraud-and-security/fraud-guide/email-fraud.html?intcam=OLB-SEC_Banner_4'><img 
                            height='85%'
                            src={secgif} alt="security_image"/></a>
                        </div> 
                        <div className=' col-6 px-2'>
                            <div className="title-box">
                                <h2>Login</h2>
                            </div>
                            <form onSubmit={formik.handleSubmit} className="mb-3">
                                <div className="mt-3">
                                    <input id="email" autoComplete="off" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email" />
                                    {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                                </div>
                                <div className="mt-2">
                                    <input id="password" autoComplete="off" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                                    {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                                </div>
                                <div className="mt-4 mb-3 text-center">
                                    <button id="btnLogin" type="submit" className="btn btn-success px-5">Submit</button>
                                </div>
                                <p className="para-link mt-2 mb-2" ><a href="https://www.onlinebanking.natwest.com/help.aspx?id=CN1" target="_blank" rel="noreferrer" style={{color:"#8B3FB2", textDecoration:"none"}}>
                                    Forgotten you login details?</a></p>
                                <p className="para-link mt-2 mb-5">Not have an account? <a href="/register" style={{color:"#8B3FB2", textDecoration:"none"}}>Register here</a></p>
                            </form>
                            {
                                error ? <div className="alert alert-danger" role="alert">
                                    {msg}
                                </div> : null
                            }
                        </div>
                                           
                </div>
            </div>
        </div>
    )
}