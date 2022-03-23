import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const Features = () => {
    return(
        
        <div>
            <Header />
            <div>
            <main className="main" id="top">
            <div className="preloader" id="preloader">
                        <div className="loader">
                        <div className="line-scale">
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                        </div>
                    </div>

            <section>
                <div className="bg-holder overlay" style={{backgroundImage: 'url(assets/img/background-2.jpg)', backgroundPosition: 'center bottom'}} />
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row pt-6" data-inertia='{"weight":1.5}'>
                    <div className="col-md-8 text-white" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="overflow-hidden">
                        <h1 className="text-white fs-4 fs-md-5 mb-0 lh-1" data-zanim-xs='{"delay":0}'>Features</h1>
                        <div className="nav" aria-label="breadcrumb" role="navigation" data-zanim-xs='{"delay":0.1}'>
                            <ol className="breadcrumb fs-1 ps-0 fw-bold">
                            <li className="breadcrumb-item"><Link className="text-white" to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Features</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>{/* end of .container*/}
                </section>



                <section className="bg-100 pt-2">
                        <div className="container">
                            <div className="text-center mb-5">
                            <h3 className="fs-2 fs-md-3 mt-5">SpatialVue Functionalities</h3>
                            <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
                            </div>
                            <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_1.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Manage Data</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Importing data via data catalogue. Connecting third party data sources using OGC services in geoserver.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4 mt-sm-0  ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_2.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Editing</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Editing of data, geometry, business rules, roles and permissions.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4  mt-lg-0 ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_3.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Query Builder</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Query spatial data, viewing results in tabular format.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_5.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Maps</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Publishing maps having configurable layer control, layer visibility, layer grouping, Layer settings.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_6.jpg" alt="Map Imgae" />
                                <div className="card-body p2" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Mobile</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Work Allocation, Assigned task status online, Online/Offline mode.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_7.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Questionnaire</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Flexible survey creation, customizable and conditional questionnaire.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_8.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Reports</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Integrated with open source Birt reports.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_9.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Analytics</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Survey based reports, User wise reports, and area wise reports etc.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 mt-4   ">
                                <div className="card h-100 border"><img className="card-img-top" src="assets/img/ft_img_10.jpg" alt="Map Imgae" />
                                <div className="card-body" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                    <div className="overflow-hidden">
                                    <h5 data-zanim-xs='{"delay":0}'>Security</h5>
                                    </div>
                                    <div className="overflow-hidden">
                                    <p className="mb-0" data-zanim-xs='{"delay":0.2}'>Role based access to application, Technology based security features.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>{/* end of .container*/}
                        </section>





               
                </main>
             </div>

            <Footer/>
        </div>
    )
}

export default Features;