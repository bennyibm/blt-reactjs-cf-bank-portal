import { Link } from "react-router-dom";

export default function ContatDetails(){
    return(
        <ul className="contact-list">
        <li>
        <h4><i className="fa fa-envelope-o" />Email:</h4>
            <Link to="mailto:hello@reallygreatsite.com">hello@reallygreatsite.com</Link>
        </li>
        <li>
            <h4><i className="fa fa-fax" />Phones:</h4>
            <Link to="tel:123-456-7890">123-456-7890</Link>
        </li>
        <li>
            <h4><i className="fa fa-globe" />Site web</h4>
            <Link to="http://www.reallygreatsite.com/" target="_blank">http://www.reallygreatsite.com/</Link>
        </li>
        <li>
            <h4><i className="fa fa-map" />Site web</h4>
            <Link to="#" >23 Anywhere St., Any City, ST 12345</Link>
        </li>
    </ul>
    )
}
