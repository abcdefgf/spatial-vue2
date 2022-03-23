import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";




const About = () => {
    return(
        <div>
            <Header/>
            <div>
           
            <section>
                <div className="bg-holder overlay" style={{backgroundImage: 'url(assets/img/background-2.jpg)', backgroundPosition: 'center bottom'}} />
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row pt-6" data-inertia='{"weight":1.5}'>
                    <div className="col-md-8 text-white" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="overflow-hidden">
                        <h1 className="text-white fs-4 fs-md-5 mb-0 lh-1" data-zanim-xs='{"delay":0}'>About</h1>
                        <div className="nav" aria-label="breadcrumb" role="navigation" data-zanim-xs='{"delay":0.1}'>
                            <ol className="breadcrumb fs-1 ps-0 fw-bold">
                            <li className="breadcrumb-item"><Link className="text-white" to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>{/* end of .container*/}
                </section>

                <section className="bg-100 pt-3">
                    <div className="container">
                        <div className="row mt-3">
                        <div className="col">
                            <h3 className="text-center fs-2 fs-md-3">Enterprise WebGIS Platform</h3>
                            <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll"/>
                        </div>
                        <div className="col-12">
                            <div className="bg-white px-3 mt-3 px-0 py-5 px-lg-5 rounded-3">
                            <p className="mt-3">SpatialVue is an enterprise Web GIS platform developed using OGC standards such as WMS, WFS, and WPS. It is compatible with all OGC compliant commercial and open source web mapping engines such as ESRI ArcGIS 9/10, GeoServer, Autodesk MapGuide, Erdas Apollo, MapInfo, and Deegree, amongst others</p>
                            <p className="mt-3">SpatialVue provides the requisite out of the box tools to publish spatial data quickly and securely over the web with an authenticated security and role based user access. It enables easy and efficient management, visualization, editing, and maintenance of spatial data. It is easily customizable, depending on the user requirements, without having to reprogram and rewrite codes. It is best suited for clients who want to accelerate their WebGIS development and deployment.</p>
                            <h5>RMSI Cloud SpatialVue GIS Services</h5>
                            <p className="column-lg-2 dropcap">SpatialVueTM is a framework developed by RMSI to accelerate building of enterprise WebGIS applications using open standards. SpatialVue’s out of the box tools provide flexible and powerful way to configure build and maintain WebGIS portals using OGC based standards. SpatialVue consists of set of tools / features to facilitate WebGIS development with many ‘ready to use’ tools / modules like user management, layer management, role management, navigation, printing, search, thematic, export, redlining and many more. For more details visit <a href="http://www.spatialvue.com/feature.html">http://www.spatialvue.com/feature.html</a> <br />
                                SpatialVueTM is based on open standards such as WMS, WFS, WCS from Open Geospatial Consortium and is implemented using GeoServer. The current framework utilizes PostgreSQL/PostGIS database for spatial database. Since it is implemented using JPA over hibernate it can be ported on other RDBMS like Oracle, MS SQL Server and MySQL besides others. It is flexible, reliable and scalable as the underlying architecture is based on stateless protocol using rest based services. <br />
                                The solution utilizes web based n-tier architecture on Java2 Enterprise Edition (J2EE) platform. <br />
                                SpatialVue is integrated with Open source mobile application developed on Liferay portal. The portal provides flexibility to develop and customize the applications. Mobile and Web applications are loosely coupled. Both the applications can be independently deployed. Together mobile and web application work seamlessly to cater to various domains like Utility, Land Management, Surveys, Risk and Insurance etc. 
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>{/* end of .container*/}
                    </section>

                    <section className="mt-0 pt-5 pb-5">
                        <div className="container">
                            <div className="row mb-3">
                            <div className="col">
                                <h3 className="text-center mt-0 mb-3">Service Domains</h3>
                                <hr className="short" data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}' data-zanim-trigger="scroll" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 pe-lg-3"><img className="rounded-3 img-fluid" src="assets/img/our_services.jpg" alt="about" /></div>
                            <div className="col-lg-6 px-lg-5 mt-6 mt-lg-0" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                                <p>This service is provided to support the following types of scenario:</p>
                                <div className="overflow-hidden">
                                <div className="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-database fs-1 me-2" data-fa-transform="flip-h" />Publishing Open Data</h5>
                                    <p className="mt-4">We’re committed to publish open Source digital contents with well defined content model e.g. multimedia, GIS extension files.
                                    </p>
                                </div>
                                </div>
                                <div className="overflow-hidden">
                                <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                                    <h5 className="fs-0 fs-lg-1"><span className="fas fa-download fs-1 me-2" data-fa-transform="shrink-1" />Data catalogue</h5>
                                    <p className="mt-4">Data catalogue e.g. discovery, view, download and federation of geospatial data within or outside the organization.</p>
                                </div>
                                </div>
                                <div className="overflow-hidden">
                                <div className="px-4 px-sm-0 mt-2" data-zanim-xs='{"delay":0}'>
                                    <h5 className="fs-0 fs-lg-1"><span className="far fa-map fs-1 me-2" data-fa-transform="grow-1" />Asset Management</h5>
                                    <p className="mt-4">Delivery of spatially enabled applications e.g. asset management, online complaints, Manage Public Right of Ways, status of assigned tasks etc.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>{/* end of .container*/}
                        </section>



                
                
                
            </div> 
            <Footer/>
        </div>
    )
}

export default About;