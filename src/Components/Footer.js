import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
    return(
        <div>
          <footer className="footer bg-primary py-4">
            <div className="container">
              <div className="row align-items-center opacity-85 text-white">
                <div className="col-sm-6 mt-3 mt-sm-0">
                  <p className="lh-lg mb-0 fw-semi-bold">© Copyright 2022 SpatialVue.</p>
                </div>
                <div className="col text-sm-end mt-3 mt-sm-0"><span className="fw-semi-bold">Developed by </span><Link className="text-white" to="https://www.rmsi.com/" target="_blank">RMSI</Link></div>
              </div>
            </div>
          </footer>

        
      </div>
    )
}

export default Footer;