import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function CotesDeCredit() {

    return(
        <div>
            <HeroBreadcrumb title='Cotes de crédit' />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Cotes de crédit</h3>
                                <p>
                                    <strong>Les notations de crédit</strong> sont des opinions sur le risque de crédit. Ils peuvent exprimer une opinion prospective sur la capacité et la volonté d'une entité de respecter ses engagements financiers à leur échéance, ainsi que sur la qualité de crédit d'une émission de dette individuelle, telle qu'une obligation d'entreprise ou municipale, et la probabilité relative que le problème peut par défaut.
                                </p>
                                <p>
                                    <strong>Les notations de crédit</strong> favorisent également le développement et le bon fonctionnement des marchés des capitaux en fournissant des informations et des informations transparentes aux acteurs du marché
                                </p>
                            </div>       
                            {/*Aside - mini and full boxes */}
                            <aside className="col-md-3">
                                {/* contact-list*/}
                                <div className="contact-list-container">
                                    <ul className="contact-list">
                                        <li>
                                            <h4>
                                                <i className="fa fa-envelope-o" />
                                                Email:
                                            </h4>
                                            <a href="mailto:info@cfbank.co.uk">info@cfbank.co.uk</a>
                                        </li>
                                        <li>
                                            <h4>
                                                <i className="fa fa-fax" />
                                                Phones:
                                            </h4>
                                            <p>
                                                <a href="tel:+442045018493">+442045018493</a>
                                            </p>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                            </aside>
                            {/* End Aside - mini and full boxes */}           
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    )
};
