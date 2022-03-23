import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


const Home = () => {
    return(
        <div>
            <Header/>
            <div>
                <main className="main" id="top">
        <section className="py-0">
          <div className="swiper theme-slider min-vh-100" data-swiper='{"loop":true,"allowTouchMove":false,"autoplay":{"delay":5000},"effect":"fade","speed":800}'>
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div className="bg-holder" style={{backgroundImage: 'url(assets/img/header-6.jpg)'}} />
                {/*/.bg-holder*/}
                <div className="container">
                  <div className="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1 className="fs-4 fs-md-5 lh-1 text-white" data-zanim-xs="{&quot;delay&quot;:0}">Enterprise WebGIS Platform</h1>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs text-white" data-zanim-xs='{"delay":0}'>Full-featured mapping and analytics platform that includes a powerful GIS server.</p>
                      </div>
                      <div className="overflow-hidden">
                        <div data-zanim-xs='{"delay":0.2}'>
                          <Link className="btn btn-primary me-3 mt-3" to="/about">Read more<span className="fas fa-chevron-right ms-2" /></Link>
                          <Link className="btn btn-warning mt-3" to="/contact">Contact us<span className="fas fa-chevron-right ms-2" /></Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div className="bg-holder" style={{backgroundImage: 'url(assets/img/header-5.jpg)'}} />
                {/*/.bg-holder*/}
                <div className="container">
                  <div className="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1 className="fs-4 fs-md-5 lh-1 text-white" data-zanim-xs='{"delay":0}'>WebGIS User  Interface</h1>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs text-white" data-zanim-xs='{"delay":0.1}'>Over 20+ years of experience in helping clients finding WebGIS solutions.</p>
                      </div>
                      <div className="overflow-hidden">
                      <div data-zanim-xs='{"delay":0.2}'>
                          <Link className="btn btn-primary me-3 mt-3" to="/about">Read more<span className="fas fa-chevron-right ms-2" /></Link>
                          <Link className="btn btn-warning mt-3" to="/contact">Contact us<span className="fas fa-chevron-right ms-2" /></Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" data-zanim-timeline="{}">
                <div className="bg-holder" style={{backgroundImage: 'url(assets/img/header-1.jpg)'}} />
                {/*/.bg-holder*/}
                <div className="container">
                  <div className="row min-vh-100 py-8 align-items-center" data-inertia='{"weight":1.5}'>
                    <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                      <div className="overflow-hidden">
                        <h1 className="fs-4 fs-md-5 lh-1 text-white" data-zanim-xs="{&quot;delay&quot;:0}">Web Based Administration Console</h1>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-primary pt-4 mb-5 fs-1 fs-md-2 lh-xs text-white" data-zanim-xs='{"delay":0.1}'>Web browser-based, graphical user interface to manage a WebLogic Server domain.</p>
                      </div>
                      <div className="overflow-hidden">
                      <div data-zanim-xs='{"delay":0.2}'>
                          <Link className="btn btn-primary me-3 mt-3" to="/about">Read more<span className="fas fa-chevron-right ms-2" /></Link>
                          <Link className="btn btn-warning mt-3" to="/contact">Contact us<span className="fas fa-chevron-right ms-2" /></Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-prev"><span className="fas fa-chevron-left" /></div>
              <div className="swiper-button-next"><span className="fas fa-chevron-right" /></div>
            </div>
          </div>
        </section>

        <section className="bg-white text-center bg-orange2">
          <div className="container">
          <div className="row justify-content-center text-center">
          <div className="col-10 col-md-8">
              <h3 className="fs-2 fs-lg-3">Welcome to the SpatialVue</h3>
              <p className="px-lg-4 mt-3" style={{fontSize: '20px', color: '#000 !important'}}>An enterprise Web GIS platform developed using OGC standards such as WMS, WFS, and WPS and is compatible with all OGC compliant commercial and open source web mapping engines .</p>
              <hr className="short" data-zanim-trigger="scroll" />
            </div>
          </div>

          <div className="row mt-4 mt-md-2">
             <div className="col mt-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">
              <div className="ring-icon mx-auto"><span className="fas fa-route" /></div>
              <h5 className="mt-4">Interoperability</h5>
              <p className="mb-3 mt-3 px-3 pb-1" style={{color: '#000 !important'}}>SpatialVue is designed to improve the efficiency and reduce long term.</p>
              <Link className="cursor_pointer mt-3" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop_1"><i className="far fa-plus-square fa-w-14 text-900 fs-3" /></Link>
            </div>
             <div className="col mt-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">
              <div className="ring-icon mx-auto"><span className="fas fa-tools" /></div>
              <h5 className="mt-4">Customization</h5>
              <p className="mb-3 mt-3 px-3 pb-1" style={{color: '#000 !important'}}>SpatialVue provides CSS based out-of-the-box user interface themes. </p>
              <Link className="cursor_pointer" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop_2"><i className="far fa-plus-square fa-w-14 text-900 fs-3" /></Link>
            </div>
             <div className="col mt-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">
              <div className="ring-icon mx-auto"><span className="far fa-chart-bar" /></div>
              <h5 className="mt-4">Reporting</h5>
              <p className="mb-3 mt-3 px-3 pb-4" style={{color: '#000 !important'}}>SpatialVue provides multiple report templates and themes.</p>
              <Link className="cursor_pointer mt-5" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop_3"><i className="far fa-plus-square fa-w-14 text-900 fs-3" /></Link>
             </div>
             <div className="col mt-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">
              <div className="ring-icon mx-auto"><span className="fas fa-user-shield" /></div>
              <h5 className="mt-4">Security</h5>
              <p className="mb-3 mt-3 px-3 pb-4" style={{color: '#000 !important'}}>SpatialVue comes with database driven default authentication. </p>
              <Link className="cursor_pointer" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop_4"><i className="far fa-plus-square fa-w-14 text-900 fs-3" /></Link>
             </div>
             <div className="col mt-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">
              <div className="ring-icon mx-auto"><span className="fas fa-cogs" /></div>
              <h5 className="mt-4">Configurable</h5>
              <p className="mb-3 mt-3 px-3 pb-1" style={{color: '#000 !important'}}>SpatialVue provides rule based access control.</p><br />
              <Link className="cursor_pointer" to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop_5"><i className="far fa-plus-square fa-w-14 text-900 fs-3" /></Link>
             </div>
          </div>


          <div className="modal fade" id="staticBackdrop_1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Interoperability</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-3" style={{color: '#000 !important'}}>
                SpatialVue is designed to improve the efficiency and reduce long term costs by providing interoperability across web mapping servers. Works across OGC compliant mapping servers from COTS based ArcGIS 9/10, Cadcorp, MapGuide, Erdas Apollo to open source GeoServer.
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="staticBackdrop_2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Customization</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-3 " style={{color: '#000 !important'}}>
                SpatialVue provides CSS based out-of-the-box user interface themes. Furthermore, users can also create their own custom themes, without having to do any custom programming.
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop_3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Reporting</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-3" style={{color: '#000 !important'}}>
                SpatialVue provides multiple report templates and themes, to create user defined custom reports. Reports can be exported to HTML or PDF formats.
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="staticBackdrop_4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Security</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-3" style={{color: '#000 !important'}}>
                SpatialVue comes with database driven default authentication. External login and authentication is also supported through LDAP (Active Directory).
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="staticBackdrop_5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Configurable</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body mb-3" style={{color: '#000 !important'}}>
                SpatialVue provides rule based access control. Administrators can manage WMS layers, control users, groups, and passwords, access levels to data layers, layer attributes, and tools through a simple user interface.
              </div>
            </div>
          </div>
        </div>

          </div>
        </section>


        <section className="bg-100">
          <div className="container">
          <div className="text-center mb-6">
            <h3 className="fs-2 fs-md-3">Functionalities</h3>
            <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
          </div>

          <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div className="col-lg-6 py-3 py-lg-0 mb-0 position-relative" style={{minHeight: '400px'}}>
              <div className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0" style={{backgroundImage: 'url(assets/img/SpatialVue2.jpg)'}}></div>
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg_magenda rounded-bs-lg rounded-lg-bs-0 rounded-be-lg rounded-lg-be-0 rounded-lg-te-lg">
              <div className="elixir-caret d-none d-lg-block"></div>
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>SpatialVue Manage Data</h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}' style={{color: '#000 !important'}}>Importing data via data catalogue. Connecting third party data sources using OGC services in geoserver.</p>
                  </div>
                  <div className="overflow-hidden">
                  <div data-zanim-xs='{"delay":0.2}'><Link className="d-flex align-items-center" to="assets/pdf/SpatialVue Flyer_Latest.pdf" target="_blank">Learn More<div className="overflow-hidden ms-2"><span class="d-inline-block" data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'>⟶</span></div></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="row g-0 position-relative mb-4 mb-lg-0">
              <div className="col-lg-6 py-3 py-lg-0 mb-0 position-relative order-lg-2" style={{minHeight: 400}}>
                <div className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0  rounded-lg-ts-0" style={{backgroundImage: 'url(assets/img/SpatialVue3.jpg)'}} />
              </div>
              <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg_magenda rounded-bs-lg rounded-lg-bs-0 rounded-be-lg  rounded-lg-be-0" style={{background: '#ffe267 !important'}}>
                <div className="elixir-caret d-none d-lg-block" />
                <div className="d-flex align-items-center h-100">
                  <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                    <div className="overflow-hidden">
                      <h5>SpatialVue Editing</h5>
                    </div>
                    <div className="overflow-hidden">
                      <p className="mt-3" style={{color: '#000 !important'}}>Editing of data, geometry, business rules, roles and permissions.</p>
                    </div>
                    <div className="overflow-hidden">
                      <div data-zanim-xs='{"delay":0.2}'><Link className="d-flex align-items-center" to="assets/pdf/SpatialVue Flyer_Latest.pdf" target="_blank">Learn More<div className="overflow-hidden ms-2"><span class="d-inline-block" data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'>⟶</span></div></Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row g-0 position-relative mb-4 mb-lg-0">
            <div className="col-lg-6 py-3 py-lg-0 mb-0 position-relative" style={{minHeight: '400px'}}>
              <div className="bg-holder rounded-ts-lg rounded-te-lg rounded-lg-te-0" style={{backgroundImage: 'url(assets/img/SpatialVue4.jpg)'}}></div>
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 bg_magenda rounded-bs-lg rounded-lg-bs-0 rounded-be-lg rounded-lg-be-0 rounded-lg-te-lg">
              <div className="elixir-caret d-none d-lg-block"></div>
              <div className="d-flex align-items-center h-100">
                <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                  <div className="overflow-hidden">
                    <h5 data-zanim-xs='{"delay":0}'>SpatialVue Analytics</h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.1}' style={{color: '#000 !important'}}>Survey based reports, User wise reports, and area wise reports etc. Role based access to application, Technology based security features.</p>
                  </div>
                  <div className="overflow-hidden">
                  <div data-zanim-xs='{"delay":0.2}'><Link className="d-flex align-items-center" to="assets/pdf/SpatialVue Flyer_Latest.pdf" target="_blank">Learn More<div className="overflow-hidden ms-2"><span class="d-inline-block" data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'>⟶</span></div></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          






          </div>

        </section>


        <section>
             <div className="container">
                <div className="text-center mb-7">
                  <h3 className="fs-2 fs-md-3">Benefits</h3>
                  <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
                </div>
                <div className="row">
                  <div className="col-lg-6 pe-lg-3 d-flex"><img className="rounded-3 img-fluid" src="assets/img/gis_benefits.jpg" alt="benefits" /></div>
                  <div className="col-lg-6 px-lg-5 mt-6 mt-lg-0" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                    <div className="overflow-hidden">
                      <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                        <h5 className="fs-0 fs-lg-1">Cost Effective</h5>
                        <p className="mt-3">Offers ready-made platform to development team to jumpstart project execution with an ‘out of the box’ component that can accelerate development and deployment process and reduce overall cost.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                        <h5 className="fs-0 fs-lg-1">Interoperability</h5>
                        <p className="mt-3">Works with all OGC compliant map server and support all popular DBMS.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                        <h5 className="fs-0 fs-lg-1">Quick and Fast</h5>
                        <p className="mt-3">Enable application customization through configuration, graphical design of business workflows, validation rule engine rather than custom coding thereby reducing development effort.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                        <h5 className="fs-0 fs-lg-1">Integration with Open Source</h5>
                        <p className="mt-3">Digital Content Management will augment the capability in storing the digital contents with well defined content model e.g. multimedia, GIS extension files.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                        <h5 className="fs-0 fs-lg-1">Leverage the industry</h5>
                        <p className="mt-3">Standard business process modeling tools that can be aligned to any vertical or industry needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           </section>

           <section className="bg-primary py-6 text-center text-md-start">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md">
                    <h4 className="text-white mb-0">If you have any query regarding SpatialVue... <br className="d-md-none" />Connect with us.</h4>
                  </div>
                  <div className="col-md-auto mt-md-0 mt-4"><Link className="btn btn-light rounded-pill" to="/contact">Contact Us</Link></div>
                </div>
              </div>
            </section>



            <section className="text-center">
                  <div className="container">
                    <div className="text-center">
                      <h3 className="fs-2 fs-md-3">Key Functionalities</h3>
                      <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/security_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Security</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/userRole_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Role Based Access Control</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/target.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Enterprise Integration</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/world-globe.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Search using attribute and Coordinate</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/red_line.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Red Lining</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/thematc_map.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Advanced Thematic Mapping</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/print_layer.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Print</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/Advance_report_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Advanced Report</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/multilingual_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Support for Multiple Languages</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/export_map_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Export Map</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/measure.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs="{&quot;delay&quot;:0.1}">Measure</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/edit_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Web Editor</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/advance_query.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Spatial Query</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/query_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}' /></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>SQL Query Builder</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/attachment_file.png" alt="icon" height={42} data-zanim-xs='{"delay":0}' /></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Attach Document</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/layer_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Google, Bing, Open street Map Overlays</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/geo_processing.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Geoprocessing</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/browser.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Varied Browser Support</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/meta_data.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Metadada Configuration</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/software_icon.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Embed in Application</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/user_interface.png" alt="icon" height={42} data-zanim-xs='{"delay":0}' /></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Customize User Interface</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mt-2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="px-1 py-2 px-lg-3">
                          <div className="overflow-hidden"><img src="assets/img/icons/data-analytics.png" alt="icon" height={42} data-zanim-xs='{"delay":0}'/></div>
                          <div className="overflow-hidden">
                            <h5 className="mt-3" data-zanim-xs='{"delay":0}'>Export Results to XLS, PDF, Word</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* end of .container*/}
                </section>

                </main>



                <Footer/>
            </div>

        </div>
    )
}

export default Home;