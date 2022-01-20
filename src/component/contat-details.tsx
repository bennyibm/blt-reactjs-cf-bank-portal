import { Link } from "react-router-dom";

export default function ContatDetails(){
    return(
        <ul className="contact-list">
        <li>
        <h4><i className="fa fa-envelope-o" />Email:</h4>
            <a href="mailto:info@cfbank.co.uk">info@cfbank.co.uk</a>
        </li>
        <li>
            <h4><i className="fa fa-fax" />Phones:</h4>
            <a href="tel:+442045018493">+44 (0) 204 501 8493</a>
        </li>
        <li>
            <h4><i className="fa fa-map" />Adresse</h4>
            <Link to="#" >CF Bank, 5e Etage <br/>
                167/169 Great Portland street; <br/>
                London, W1W 5PF
                United Kingdom
            </Link>
        </li>
    </ul>
    )
}
