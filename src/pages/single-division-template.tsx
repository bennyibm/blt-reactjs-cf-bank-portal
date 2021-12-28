import React from "react";
import { Link } from "react-router-dom";
import { HeroBreadcrumb } from "../component";

export default function SingleDivisisionTemplate(){
    return(
        <>
            <HeroBreadcrumb title="Nos Divisions -- Banque d'Investissement" />
            <div className="content-central">
                
                {/* Info Content */}
                <div className="content_info">
                    <div className="paddings">
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                        <div className="row">
                        <div className="col-md-9 credit-area">
                            <h3>What you need finances / consumer loans</h3>
                            <p className="lead color-skin">You make up your mind to get what you want, because now our different types of loans and just a click, will be closer to making it happen.</p>
                            <p>Meet our broad portfolio of loans made especially for you, and check here the features of each product; once you've found the one you want, click on Apply for your product, or request it through our points of interaction with a counselor, and just like that, on the next business day, we will contact you to close the process.</p>
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <Link to="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">FREE INVESTMENT</Link>
                            </li>
                            <li role="presentation">
                                <Link to="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">AGILE CREDI</Link>
                            </li>
                            <li role="presentation">
                                <Link to="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">WRIT</Link>
                            </li>
                            <li role="presentation">
                                <Link to="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">Credit Simulator</Link>
                            </li>
                            </ul>
                            {/* End Nav tabs */}
                            {/* tab-content*/}
                            <div className="tab-content">
                            {/* tab-Item-1*/}
                            <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                                <h4>FREE INVESTMENT</h4>
                                <p className="lead">Free Investment Credit allows you to finance your needs when you need it agile, timely manner and with great benefits:</p>
                                <h4>Features Credit:</h4>
                                <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#"> You have large financing terms according to your needs.The study credit is free.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> You got a Life Insurance and you can purchase unemployment insurance benefits during the term of the loan.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Paid monthly, through automatic debit from your checking or savings account.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Enjoy an exclusive rate if you receive your payroll through Bancolombia and are part of more benefits.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> If your spouse is a housewife, you can purchase minimum income showing on your bank statement.</Link></li>
                                </ul>
                            </div>
                            {/* tab-Item-1*/}
                            {/* tab-Item-2*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab2">
                                <h4>AGILE CREDI</h4>
                                <p className="lead">Free Investment Credit allows you to finance your needs when you need it agile, timely manner and with great benefits:</p>
                                <h4>Features Credit:</h4>
                                <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#"> You have large financing terms according to your needs.The study credit is free.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> You got a Life Insurance and you can purchase unemployment insurance benefits during the term of the loan.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Paid monthly, through automatic debit from your checking or savings account.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Enjoy an exclusive rate if you receive your payroll through Bancolombia and are part of more benefits.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> If your spouse is a housewife, you can purchase minimum income showing on your bank statement.</Link></li>
                                </ul> 
                            </div>
                            {/* tab-Item-2*/}
                            {/* tab-Item-3*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab3">
                                <h4>WRIT</h4>
                                <p className="lead">Free Investment Credit allows you to finance your needs when you need it agile, timely manner and with great benefits:</p>
                                <h4>Features Credit:</h4>
                                <ul className="list-styles">
                                <li><i className="fa fa-check" /> <Link to="#"> You have large financing terms according to your needs.The study credit is free.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> You got a Life Insurance and you can purchase unemployment insurance benefits during the term of the loan.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Paid monthly, through automatic debit from your checking or savings account.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#">Enjoy an exclusive rate if you receive your payroll through Bancolombia and are part of more benefits.</Link></li>
                                <li><i className="fa fa-check" /> <Link to="#"> If your spouse is a housewife, you can purchase minimum income showing on your bank statement.</Link></li>
                                </ul> 
                            </div>
                            {/* tab-Item-3*/}
                            {/* tab-Item-4*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab4">
                                <form action="template-credit-simulator.html" className="form-theme">
                                <label>Credit type</label>
                                <div className="selector">
                                    <select className="guests-input">
                                    <option>Select</option>
                                    <option>Free Investment</option>
                                    <option>Education</option>
                                    <option>Insurance Vehicle</option>
                                    <option>Healt=""h</option>
                                    <option>new or used vehicle</option>
                                    </select>
                                    <span className="custom-select">Select</span>
                                </div>
                                <label>Value request</label>
                                <input type="number" placeholder="Enter value" className="input" />
                                <label>Term in months</label>
                                <div className="selector">
                                    <select className="guests-input">
                                    <option>6</option>                    
                                    <option>9</option>
                                    <option>12</option>                  
                                    <option>24</option>
                                    <option>36</option>
                                    <option>48</option>
                                    <option>60</option>
                                    <option>72</option>
                                    </select>
                                    <span className="custom-select">Select</span>
                                </div>
                                <input type="submit" className="btn" defaultValue="Consult" />
                                </form>
                            </div>
                            {/* tab-Item-4*/}
                            </div>
                            {/* End tab-content */}
                            <div className="divisor-line" />
                            {/* boxes-services */}
                            <div className="row boxes-services">
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Apply product</h4>
                                <span>Secure Information</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> Apply</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Chat</h4>
                                <span>We offer the lowest rates.</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> Now</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Call</h4>
                                <span>Best Credits</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            </div>
                            {/* End boxes-services */}
                        </div>       
                        {/*Aside - mini and full boxes */}
                        <aside className="col-md-3">
                            {/* contact-list*/}
                            <div className="contact-list-container">
                            <ul className="contact-list">
                                <li>
                                <h4><i className="fa fa-envelope-o" />Email:</h4>
                                <Link to="#">Contact Customer Service</Link>
                                </li>
                                <li>
                                <h4><i className="fa fa-fax" />Phones:</h4>
                                <h5>Miami:</h5>
                                <p>447 50 12</p>
                                <h5>Number Single National</h5>
                                <p>02 4000 4 56234</p>
                                </li>
                                <li>
                                <h4><i className="fa fa-life-ring" />Care centers:</h4>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" /> Offices
                                </Link>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" />Cashiers
                                </Link>
                                <Link to="#"><i className="fa fa-arrow" />
                                    <i className="fa fa-arrow-circle-o-right" /> Point friend
                                </Link>
                                </li>
                            </ul>
                            </div>
                            {/* End contact-list*/}
                            <h4>Interesting links</h4>
                            {/* services-mini-boxes*/}
                            <div className="services-mini-boxes">
                            {/* mini-box Item*/}
                            <div className="mini-box">
                                <h5>Taxes</h5>
                                <div className="number-mini-box">
                                01
                                </div>
                                <div className="icon-mini-box color-bg-1">
                                <i className="fa fa-calculator" />
                                </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item */}
                            <div className="mini-box">
                                <h5>Portfolio</h5>
                                <div className="number-mini-box">
                                02
                                </div>
                                <div className="icon-mini-box color-bg-2">
                                <i className="fa fa-briefcase" />
                                </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item*/}
                            <div className="mini-box">
                                <h5>Security</h5>
                                <div className="number-mini-box">
                                03
                                </div>
                                <div className="icon-mini-box color-bg-3">
                                <i className="fa fa-lock" />
                                </div>
                            </div>
                            {/* End mini-box Item */}
                            {/* mini-box Item */}
                            <div className="mini-box">
                                <h5>Education</h5>
                                <div className="number-mini-box">
                                04
                                </div>
                                <div className="icon-mini-box color-bg-4">
                                <i className="fa fa-graduation-cap" />
                                </div>
                            </div>
                            {/* End mini-box Item */}
                            </div>
                            {/* End services-mini-boxes*/}
                            <h4>Download Our App</h4>
                            {/* services-full-boxes*/}
                            <div className="services-full-boxes">
                            {/* full-box Item*/}
                            <div className="full-box">
                                <div className="info-full-box">
                                <Link to="#">Download Android App</Link>
                                </div>
                                <div className="icon-full-box">
                                <i className="fa fa-android" />
                                </div>
                            </div>
                            {/* End full-box  Item*/}
                            {/* full-box Item*/}
                            <div className="full-box">
                                <div className="info-full-box">
                                <Link to="#">Download Apple App</Link>
                                </div>
                                <div className="icon-full-box">
                                <i className="fa fa-apple" />
                                </div>
                            </div>
                            {/* End full-box  Item*/}
                            {/* full-box Item*/}
                            <div className="full-box no-margin">
                                <div className="info-full-box">
                                <Link to="#">Windows App</Link>
                                </div>
                                <div className="icon-full-box">
                                <i className="fa fa-windows" />
                                </div>
                            </div>
                            {/* End full-box  Item*/}
                            </div>
                            {/* End services-full-boxes*/}
                        </aside>
                        {/* End Aside - mini and full boxes */}           
                        </div>
                    </div>
                    {/* End Container Area - Boxes Services */}
                    </div>
                </div>
                {/* End Info Content*/}
                {/* Info Content - Interest Content*/}
                <div className="content_info">
                    {/* Info Resalt=""*/}
                    <div className="content_resalt">
                    {/* Container Area - Boxes Services */}
                    <div className="container">
                        <div className="row padding-bottom border-top">
                        <div className="col-md-12">
                            {/* title-vertical-line*/}
                            <div className="title-vertical-line padding-bottom">
                            <h2>Credit and <span>interest</span> rates</h2>
                            <p className="lead">We guarantee the proper performance of their money with us no problem.</p>
                            </div>
                            {/* End title-vertical-line*/}
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th className="color-dark-table">Credit Type</th>
                                <th className="color-bg-1">Interest rate</th>
                                <th className="color-bg-2">Rode</th>
                                <th className="color-bg-3">Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th className="color-dark-table-2 title-left-table">
                                    <i className="fa fa-apple" />
                                    free Investment
                                </th>
                                <td>1,39%</td>
                                <td>1.000 To 30.000 usd</td>
                                <td>72 Months</td>                                      
                                </tr>
                                <tr>
                                <th className="color-dark-table title-left-table">
                                    <i className="fa fa-android" />
                                    New or used vehicle
                                </th>
                                <td className="cell-1">0,50%</td>
                                <td className="cell-1">15.000 To 25.000 Usd</td>
                                <td className="cell-1">60 Months</td>                                      
                                </tr>
                                <tr>
                                <th className="color-dark-table-2 title-left-table">
                                    <i className="fa fa-windows" />
                                    Education
                                </th>
                                <td>1,67%</td>
                                <td>5.000 To 15.000 Usd</td>
                                <td>36 Months</td>                                      
                                </tr>
                                <tr>
                                <th className="color-dark-table title-left-table">
                                    <i className="fa fa-cogs" />
                                    Affordable Housing
                                </th>
                                <td className="cell-1">0,85%</td>
                                <td className="cell-1">$7.000 Usd To 20.000 Usd</td>
                                <td className="cell-1">72 Months</td>                                      
                                </tr>
                                <tr>
                                <th className="color-dark-table-2 title-left-table">
                                    <i className="fa fa-calculator" />
                                    Vacation, recreation and tourism
                                </th>
                                <td>0,80%</td>
                                <td>2.500 To 8.000 Usd</td>
                                <td>48 Months</td>                                      
                                </tr>
                                <tr>
                                <th className="color-dark-table title-left-table">
                                    <i className="fa fa-university" />
                                    Home improvement or construction site itself
                                </th>
                                <td className="cell-1">1,00%</td>
                                <td className="cell-1">2,000 To $10,000 Usd</td>
                                <td className="cell-1">60 Months</td>                                      
                                </tr>
                            </tbody>
                            </table>    
                        </div> 
                        </div>
                    </div>
                    {/* End Container Area - Boxes Services */}
                    </div>
                    {/* End Info Resalt=""*/}
                </div>
                {/* Info Content - Interest Content*/}
            </div>
        </>
    )
}