import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const Contact = () => {
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
                        <h1 className="text-white fs-4 fs-md-5 mb-0 lh-1" data-zanim-xs='{"delay":0}'>Contact Us</h1>
                        <div className="nav" aria-label="breadcrumb" role="navigation" data-zanim-xs='{"delay":0.1}'>
                            <ol className="breadcrumb fs-1 ps-0 fw-bold">
                            <li className="breadcrumb-item"><Link className="text-white" to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>{/* end of .container*/}
                </section>

                <main className="main" id="top">
                    
                        {/* ============================================*/}
                        {/* <section> begin ============================*/}
                        <section className="bg-100">
                            <div className="container">
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body p-5">
                                    <h5 className="mb-3">Write to us</h5>
                                    <form>
                                        <div className="mb-4"><input className="form-control bg-white" type="text" placeholder="Your Name" required="required" /></div>
                                        <div className="mb-4"><input className="form-control bg-white" type="email" placeholder="Email" required="required" /></div>
                                        <div className="mb-4"><textarea className="form-control bg-white" rows={11} placeholder="Enter your descriptions here..." required="required" defaultValue={""} /></div><button className="btn btn-md-lg btn-primary" type="Submit"> <span className="color-white fw-600">Send Now</span></button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="card mb-4 h-100">
                                    <div className="card-body p-2">
                                    <div className="img-map pt-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <img src="assets/img/mapImage.png" alt="location map" className="w-100" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-3">
                                <div className="col-xs-12 col-sm-12">
                                <div className="container">
                                    <h3> OFFICES</h3>
                                    <h5 className="mb-3">RMSI Pvt. Ltd., India</h5>
                                </div>
                                </div>{/*./col-sm-12*/}
                                <hr />
                            </div>
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">Noida</h5>
                                    <p className="mb-0 text-1100"> A-8 Sector 16<br />
                                        Noida 201301 India,<br />Email: <Link  to="mailto:india@rmsi.com"> india@rmsi.com</Link>,<br />
                                        Tel: +91 120 4040500, 2511102</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">Hyderabad</h5>
                                    <p className="mb-0 text-1100"> Vega, The V, 11th Floor, Right Wing,<br />
                                        Plot No.17, Software Units Layout, Madhapur, <br />Hyderabad – 500081, India
                                        <br />Email: <Link  to="mailto:india@rmsi.com"> india@rmsi.com</Link>,<br />
                                        Tel: +91 040-44347100</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">Dehradun</h5>
                                    <p className="mb-0 text-1100"> 1105, Doon Express Business Park,<br />
                                        Opposite Transport Nagar, Subhash Nagar, <br />Dehradun 248002, India
                                        <br />Email: <Link  to="mailto:india@rmsi.com"> india@rmsi.com</Link>,<br />
                                        Tel: +91 135 6671700</p>
                                    </div>
                                </div>
                                </div>
                            </div>{/*./row*/}
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-12 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI Private Limited</h5>
                                    <p className="mb-0 text-1100"> 50/9, 1st Floor, Tolstoy Lane, Janpath, <br />
                                        New Delhi, Delhi – 110001, India <br /></p>
                                    </div>
                                </div>
                                </div>
                            </div>{/*./row*/}
                            <hr />
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI North America Inc.</h5>
                                    <p className="mb-0 text-1100"> 18 East 41st Street Suite 1704 <br /> New York, NY 10017 <br />
                                        Email: <Link  to="mailto:us@rmsi.com">  us@rmsi.com</Link>,<br />
                                        Tel: 212-563-3223</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> 6101 Bollinger Canyon Road,<br />
                                        Suite 352, San Ramon, CA 94583,
                                        <br />Email: <Link  to="mailto:us@rmsi.com"> us@rmsi.com</Link>,<br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0" />
                            </div>{/*./row*/}
                            <hr />
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI Canada Inc.</h5>
                                    <p className="mb-0 text-1100"> 251,Consumers Road, Suite 1200, <br /> North York, Toronto,ON, M2J 4R3, <br />
                                        Email: <Link  to="mailto:canada@rmsi.com">   canada@rmsi.com</Link>,<br />
                                        Tel: +1 416-774-2452</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> 77 Westmorland Street, Suite 300, TD Tower,<br />
                                        Fredericton, New Brunswick,<br />E3B 6Z3
                                        <br />Email: <Link  to="mailto:canada@rmsi.com"> canada@rmsi.com</Link>,<br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100">1881 Steeles Avenue W Suite 203
                                        <br />
                                        Toronto ON, <br />M3H 5Y4
                                        <br />Email: <Link  to="mailto:canada@rmsi.com"> canada@rmsi.com</Link><br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>{/*./row*/}
                            <hr />
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI Ltd., UK.</h5>
                                    <p className="mb-0 text-1100"> 5-7 Abbey Court, Eagle Way <br /> Sowton Industrial Estate <br /> Exeter, EX2 7HY<br />
                                        Email: <Link  to="mailto:uk@rmsi.com">uk@rmsi.com</Link>,<br />
                                        Tel: +44 734-072-0606</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> 9 Greyfriars Road,<br />
                                        Reading, Berkshire,<br />
                                        RG1 1NU,<br />
                                        United Kingdom
                                        <br />Email: <Link  to="mailto:info@rmsi.com">info@rmsi.com</Link>,<br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> Davidson House,<br />Forbury Square, Reading,
                                        <br />
                                        RG1 3EU, <br />United Kingdom
                                        <br />Email: <Link  to="mailto:info@rmsi.com"> info@rmsi.com</Link><br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>{/*./row*/}
                            <hr />
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI Australia Pty Ltd.</h5>
                                    <p className="mb-0 text-1100"> Suite 3A, Level 3 <br /> 1C Grand Ave <br /> Camellia, NSW 2142<br />
                                        Email: <Link  to="mailto:info@rmsi.com">info@rmsi.com</Link></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> 40, Lime Street,<br />
                                        King Street Wharf,<br />
                                        Sydney, NSW, 2000,<br />
                                        Email: <Link  to="mailto:info@rmsi.com">info@rmsi.com</Link>,<br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">&nbsp;</h5>
                                    <p className="mb-0 text-1100"> 8/10,<br />Burnside Road Ormeau,
                                        <br />
                                        QLD, 4208
                                        <br />Email: <Link  to="mailto:info@rmsi.com"> info@rmsi.com</Link><br />
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>{/*./row*/}
                            <hr />
                            <div className="row align-items-stretch justify-content-center mb-4">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card h-100">
                                    <div className="card-body px-5">
                                    <h5 className="mb-3">RMSI Australia Pty Ltd.</h5>
                                    <p className="mb-0 text-1100"> Suite 3A, Level 3 <br /> 1C Grand Ave <br /> Camellia, NSW 2142<br />
                                        Email: <Link  to="mailto:info@rmsi.com">info@rmsi.com</Link></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                </div>
                            </div>{/*./row*/}
                            </div>{/* end of .container*/}
                        </section>{/* <section> close ============================*/}
                        {/* ============================================*/}
                        </main>

          

              </div>
            <Footer/>
        </div>
    )
}

export default Contact;