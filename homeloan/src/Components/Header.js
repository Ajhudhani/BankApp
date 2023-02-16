import { useNavigate } from "react-router-dom";
import natwestlogo from './src_assets_natwestlogo.svg';
import swal from 'sweetalert';

export default function Header()
{
  const navigate = useNavigate();
   
  const user = (localStorage.getItem('token'))
  console.log(user)

  function login() {
    navigate("/login")
  }
  function logout() {
      localStorage.removeItem('token');
      swal("See you soon!", "You have been successfully loggedout!", "success");      
      
      navigate("/login")
  }

    return(
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor:"#3C1053" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <img alt="NatWest" src={natwestlogo}/>
            </a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                  </li>
                  {
                    localStorage.getItem('token')
                      ?
                      <>
                      <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" href="#action2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dashboard
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                          <li><a className="dropdown-item" href="/loanapp">Apply for a loan</a></li>
                          <li><a className="dropdown-item" href="/summary">Summary</a></li>
                          
                        </ul>
                      </li>
                      </>
                      :
                      <>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#action2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Products
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="/home">Mortgages</a></li>
                          <li><a className="dropdown-item" href="/comingsoon">Savings</a></li>
                          <li><a className="dropdown-item" href="/comingsoon">Credit cards</a></li>
                          <li><a className="dropdown-item" href="/comingsoon">Overdrafts</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/comingsoon">Help & Support</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/comingsoon">Climate</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/comingsoon">Ukraine refugees</a>
                      </li>
                      </>
                      }

                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-success me-4" type="submit">Search</button>
                </form>
                <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                    {localStorage.getItem('token')
                        ?
                        <li className='nav-item me-2'>
                            <button className='btn btn-dark' style={{ backgroundColor:"#8B3FB2" }} type='submit' onClick={logout}>Logout</button>
                        </li>
                        :
                        <li className='nav-item me-2'>
                            <button className='btn btn-dark' style={{ backgroundColor:"#8B3FB2" }} type='submit' onClick={login}>Log in</button>
                        </li>
                      }
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}