import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import './Style.css';
import swal from 'sweetalert';


export default function Register() {

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title:'',
            fname:'',
            lname:'',
            dob:'',
            email:'',
            mobile:'',
            password:'',
            confirmpassword: ''
           
        },
        onSubmit: values => {
            fetch('http://localhost:8081/hlpsapi/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {                    
                    if (data.status === 409) {                       
                        alert("User with this email already exists.");
                        navigate("/register");
                    } else {
                        swal("Welcome in our family!", "You have been successfully registered!", "success");
                        // navigate("/dashboard");
                        navigate("/login");
                    }                    
                 })
        },
        onChange: values => {
            
            console.log("Working?")

        },
        validationSchema: yup.object().shape({
            title: yup.string()
                .required('Title cannot be left blank')
                .oneOf(["Mr","Ms","Mrs","Dr"],'Kindly accept the terms and conditions'),
            fname: yup.string()
                .required('First name cannot be left blank'),
            lname: yup.string()
                .required('Last name cannot be left blank'),
            dob: yup.date()
                .max(new Date(),'Kindly enter historic date')
                .required('Data of Birth cannot be left blank'),
                // add date validation for over 18 years
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            mobile: yup.string()
                .min(10,'Mobile no should be not be less than 10 digits')
                .max(10,'Mobile no should be not be less than 10 digits')
                .required('Mobile no cannot be left blank'),
            password: yup.string()
                .min(5)
                .matches(passwordRules, {message: "Create a stronger password which has min 5 char, 1 upper case, 1 lower case, 1 numeric digit"})
                .required('Password cannot be left blank'),
            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .oneOf([yup.ref("password"), null], "Password and confirm password should match")
            
        }),
    });
    return (
        <div className="mt-5 mb-5">
            <div className="row mt-5 mb-5">
                <div className="col-md-4 offset-md-4">
                    <div className="title-box">
                        <h2>Register</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} >
                        <div className="mt-3">
                            <select className="form-select form-select-sm" id="title" value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option selected>Select from dropdown</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                            </select>
                            {formik.errors.title && <p className="text-danger">{formik.errors.title}</p>}
                        </div>
                        <div className="mt-2">
                            <input id="fname" autoComplete="off" name="fname" type="text" value={formik.values.fname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="First Name" />
                            {formik.errors.fname && formik.touched.fname ? <span className="text-danger"STYLE="font-size:150%'">{formik.errors.fname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="lname" autoComplete="off" name="lname" type="text" value={formik.values.lname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Last Name" />
                            {formik.errors.lname && formik.touched.lname ? <span className="text-danger"STYLE="font-size:150%'">{formik.errors.lname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="dob" autoComplete="off" name="dob" type="text" value={formik.values.dob} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Date of Birth (YYYY/MM/DD)" />
                            {formik.errors.dob && formik.touched.dob ? <span className="text-danger">{formik.errors.dob}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" autoComplete="off" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="mobile" autoComplete="off" name="mobile" type="text" value={formik.values.mobile} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Mobile no" />
                            {formik.errors.mobile && formik.touched.mobile ? <span className="text-danger">{formik.errors.mobile}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="password" autoComplete="off" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="confirmpassword" autoComplete="off" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Confirm Password" />
                            {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
                        </div>

                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="tandc" required/>
                            <label className="form-check-label">Agree to the terms and conditions</label>
                        
                        </div>

                        <div className="mt-4 mb-3 text-center">
                            <button type="submit" className="btn btn-success px-5">Submit</button>
                        </div>
                        <p className="para-link mt-2 mb-2">Already have an account? <a style={{color:"#8B3FB2", textDecoration:"none"}} href="/login">Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}