import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const Header = () => {
  
  


    return(

        <>
        <div className="bg-primary py-1 d-none d-sm-block text-white fw-bold">
          <div className="container">
            <div className="row align-items-center gx-4">
              <div className="col-xs-12 col-sm-6">
                <div>
                  <span className="far fa-envelope text-warning" data-fa-transform="shrink-3" />
                  <Link className="ms-2 fs--1 d-inline text-white fw-bold" to="mailto:info@rmsi.com">info@rmsi.com</Link>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-6" style={{'textAlign': 'right'}}>
              <Link className="d-inline-block mt-0 text-white" to="https://twitter.com/RMSI_Global" target="_blank"><span className="fab fa-twitter-square fs-2 mx-0" /></Link>
              <Link className="d-inline-block mt-0 text-white" to="https://business.facebook.com/RMSI.Global/?business_id=1239096586184049" target="_blank"><span className="fab fa-facebook-square fs-2 mx-2" /></Link>
              <Link className="d-inline-block mt-0 text-white" to="https://www.linkedin.com/company/rmsi/" target="_blank"><span className="fab fa-linkedin fs-2 me-2" /></Link>
              <Link className="d-inline-block mt-0 text-white" to="https://www.instagram.com/rmsi_global/" target="_blank"><span className="fab fa-instagram-square fs-2 me-2" /></Link>
              <Link className="d-inline-block mt-0 text-white" to="https://www.youtube.com/channel/UCPWAhT3yDOewQ_5eBuICiSA" target="_blank"><span className="fab fa-youtube-square fs-2 me-2" /></Link>
              <Link className="d-inline-block mt-0 text-white" to="https://www.slideshare.net/MarketingCommunicati/rmsicorporate-presentation" target="_blank"><span className="fas fa-rss-square fs-2 me-2" /></Link>

              </div>
              
            </div>
          </div>
        </div>
        <div className="sticky-top navbar-elixir">
          <div className="container">
            <nav className="navbar navbar-expand-lg"> <Link className="navbar-brand" to="/home"><img src="assets/img/logo-dark.png" alt="logo" /></Link><button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNavbarCollapse" aria-controls="primaryNavbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="hamburger hamburger--emphatic"><span className="hamburger-box"><span className="hamburger-inner" /></span></span></button>
              <div className="collapse navbar-collapse" id="primaryNavbarCollapse">

              





              <ul className="navbar-nav py-3 py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1" id="myListItems">
                <li className="nav-item">
                  <NavLink to="/home" activeClassName="active padding_right_4">Home</NavLink>
               </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active">About the Product</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/features" activeClassName="active">Features</NavLink>
                </li>
                <li className="nav-item">
                   <NavLink to="/contact" activeClassName="active">Contact</NavLink>
               </li>
              </ul><Link className="btn btn-outline-primary rounded-pill btn-sm border-2 d-block d-lg-inline-block ms-auto my-3 my-lg-0" to="/contact">Request a Demo</Link>
              </div>
            </nav>
          </div>
        </div>
        
        </>
    )
}

export default Header;