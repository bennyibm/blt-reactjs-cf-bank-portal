import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Feature() {
    const navigate = useNavigate()
    return(
        <div>
          <div className="divisor-line" />
            <div className="row boxes-services">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="item-boxed-service" style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <h4>Soumissionner</h4>
                    <span>Bientôt disponible</span>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="item-boxed-service" style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                    <h4>Inscription</h4>
                    <span>Bientôt disponible</span>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="item-boxed-service" style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
                        <h4 style={{cursor : "pointer"}} onClick={() => navigate("/contact") }>
                            Contact
                        </h4>
                        <div>
                            <a href="tel:+442045018493" style={{marginRight : 20}}>+442045018493</a>
                            <a href="mailto:info@cfbank.co.uk">info@cfbank.co.uk</a>
                        </div>
                            
                        {/* <Link to="#"><i className="fa fa-plus-circle" /> contact-us</Link> */}
                    </div>
                </div>
            </div>
        </div>
      )
};
