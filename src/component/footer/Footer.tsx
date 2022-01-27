import React, {FunctionComponent} from "react"
import { Link } from "react-router-dom"


function RecentLinkItem(){

}

const Footer : FunctionComponent = () =>{
    const currentYear = new Date().getFullYear()
    return(
        <footer id="footer">
            
            <div className="container">
                <div className="row paddings-mini">
                    <div className="col-sm-6 col-md-3">
                        <div className="border-right txt-right">
                            <h4>Contat</h4>
                            <ul className="contact-footer">
                                <li>
                                    <i className="fa fa-envelope"></i> 
                                    <a href="mailto:info@cfbank.co.uk">info@cfbank.co.uk</a>
                                </li>
                                <li>
                                    <i className="fa fa-headphones"></i> 
                                    <a href="tel:+442045018493">+44 (0) 204 501 8493</a>
                                </li>
                                {/* <li>
                                    <i className="fa fa-globe"></i> 
                                    <Link to="http://www.cfbank.co.uk" target="_blank">cfbank.co.uk</Link>
                                </li> */}
                                <li className="location">
                                    <i className="fa fa-map"></i> 
                                    <a href="#" >CF Bank, 5e Etage; <br/> 167/169 Great Portland street; <br/> London, W1W 5PF United Kingdom</a>
                                </li>
                            </ul>
                            <div className="logo-footer">
                                <Link to="/">
                                    <img src="/img/logo.png" alt="CF-BANK logo" style={{width: 200, height: 80, objectFit : "cover"}} />
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
                                    <Link to="/nos-divisions/banque-d-investissement">Banque d'Investissement</Link>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <Link to="/nos-divisions/banque-d-affaires">Banque d'affaires</Link>
                                </li>
                                <li>
                                    <i className="fa fa-check"></i>
                                    <Link to="/nos-divisions/notation-financiere">Notation financiere</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="border-right txt-right">
                            <h4>Boite au lettre</h4>
                            <p>Veuillez saisir votre e-mail et vous inscrire à notre boite-aux-lettres.</p>
                            <form id="newsletterForm" className="newsletterForm">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <input className="form-control" placeholder="Adresse mail" name="email"  type="email" aria-required={true} />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="submit" name="subscribe" disabled >Go!</button>
                                    </span>
                                </div>
                            </form>
                            <div id="result-newsletter"></div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-2">
                        <div className="border-right-none">
                            <h4>Suivez-nous</h4>
                            <ul className="social">
                                <li className="facebook"><span><i className="fa fa-facebook"></i></span><Link to="#">Facebook</Link></li>
                                <li className="twitter"><span><i className="fa fa-twitter"></i></span><Link to="#">Twitter</Link></li>
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
                            <ul className="nav-footer">
                                <li><Link to="/">Accueil</Link> </li>
                                <li><Link to="apropos-de-cfbank">Company</Link></li>
                                <li><Link to="/nos-divisions/banque-d-investissement">Banque d'investissement</Link></li>
                                <li><Link to="/nos-divisions/banque-d-affaires">Banque d'affaires</Link></li>
                                <li><Link to="/nos-divisions/notation-financiere">Notation financiere</Link></li>
                                {/* <li><Link to="/nos-solutions">Nos Solutions</Link></li> */}
                                <li><Link to="/contact">CONTACT</Link></li>
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
