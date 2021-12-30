import React, {FunctionComponent} from "react"
import { Link } from "react-router-dom"


function RecentLinkItem(){

}

const Footer : FunctionComponent = () =>{
    const currentYear = new Date().getFullYear()
    return(
        <footer id="footer">
            {/* Services-lines Items Container */}
            <div className="container">
                <div className="row">
                    {/* Services-lines Items */}
                    <div className="col-md-12 services-lines-container">
                    <ul className="services-lines">
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-credit-card" />
                            <h5>Your Payments</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-industry" />
                            <h5>District Tax Payment</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-university" />
                            <h5>Paying Taxes - CoopBank</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                    </ul>
                    <ul className="services-lines no-margin">
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-balance-scale" />
                            <h5>Payment of contributions</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-cc" />
                            <h5>Settlement and severance pay.</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                        <li>
                        <div className="item-service-line">
                            <i className="fa fa-line-chart" />
                            <h5>Workers pay contributions</h5>
                            <Link to="#">Go To</Link>
                        </div>
                        </li>
                    </ul>
                    </div> 
                    {/* End Services-lines Items */} 
                </div>
            </div>
            {/* Services-lines Items Container */}


            <div className="container">
                <div className="row paddings-mini">
                    <div className="col-sm-6 col-md-3">
                        <div className="border-right txt-right">
                            <h4>Contat</h4>
                            <ul className="contact-footer">
                                <li>
                                    <i className="fa fa-envelope"></i> 
                                    <Link to="mailto:hello@reallygreatsite.com">hello@reallygreatsite.com</Link>
                                </li>
                                <li>
                                    <i className="fa fa-headphones"></i> 
                                    <Link to="tel:123-456-7890">123-456-7890</Link>
                                </li>
                                <li>
                                    <i className="fa fa-globe"></i> 
                                    <Link to="http://www.reallygreatsite.com/" target="_blank">1http://www.reallygreatsite.com/</Link>
                                </li>
                                <li className="location">
                                    <i className="fa fa-map"></i> 
                                    <Link to="#" >23 Anywhere St., Any City, ST 12345</Link>
                                </li>
                            </ul>
                            <div className="logo-footer">
                                <Link to="/">
                                    <img src="img/cf-bank-logo.png" alt="CF-BANK logo" style={{width: 200, height: 80, objectFit : "cover"}} />
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="border-right border-right-none">
                            <h4>Nos divisions</h4>
                            <ul className="list-styles">
                                <li>
                                    <i className="fa fa-check"></i> 
                                    <Link to="bank-d-investissement">Banque d'Investissement</Link>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <Link to="banque-d-affaire">Banque d'affaires</Link>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <Link to="notation-financiere">Notation financiere</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="border-right txt-right">
                            <h4>Newsletter</h4>
                            <p>Please enter your e-mail and subscribe to our newsletter.</p>
                            <form id="newsletterForm" className="newsletterForm" action="php/mailchip/newsletter-subscribe.php">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <input className="form-control" placeholder="Email Address" name="email"  type="email" aria-required={true} />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="submit" name="subscribe" >Go!</button>
                                    </span>
                                </div>
                            </form>
                            <div id="result-newsletter"></div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-2">
                        <div className="border-right-none">
                            <h4>Follow To CF BANK</h4>
                            <ul className="social">
                                <li className="facebook"><span><i className="fa fa-facebook"></i></span><Link to="#">Facebook</Link></li>
                                <li className="twitter"><span><i className="fa fa-twitter"></i></span><Link to="#">Twitter</Link></li>
                                <li className="github"><span><i className="fa fa-github"></i></span><Link to="#">Github</Link></li>
                                <li className="linkedin"><span><i className="fa fa-linkedin"></i></span><Link to="#">Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-down">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            {/* <!-- Nav Footer--> */}
                            <ul className="nav-footer">
                                <li><Link to="/">Accueil</Link> </li>
                                <li><Link to="apropos-de-cfbank">CF-BANK</Link></li>
                                <li><Link to="nos-divisions">Nos Divisions</Link></li>
                                <li><Link to="nos-solutions">Nos Solutions</Link></li>
                                <li><Link to="contact">CONTACT</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <p>&copy; { currentYear } CF BANK. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
