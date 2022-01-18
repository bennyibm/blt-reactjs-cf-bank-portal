import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function EvaluationDeLaGestionDesRisquesDEntreprise() {

    return(
        <div>
            <HeroBreadcrumb title="Évaluations de la gestion des risques d'entreprise" />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Évaluations de la gestion des risques d'entreprise</h3>
                                <p>
                                    Notre vision des pratiques ERM d'une entreprise, éclairée par des discussions interactives avec la haute direction. Avantages d'une <strong>évaluation ERM</strong> :
                                </p>
                                <p>
                                    <ul className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Fournit une vue prospective du profil de risque potentiel d'un assureur et du changement de la position du capital lié aux mouvements des facteurs de risque.                                                 
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Évalue si un assureur applique des pratiques de gestion des risques dans l'entreprise de manière systématique et cohérente.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Identifier dans quelle mesure ses pratiques limitent efficacement les risques liés à son appétit pour atteindre les buts et objectifs de l'entreprise.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <strong>L’évaluation ERM</strong> n'est pas une cote de crédit. Il s'agit d'un service autonome, sur demande et distinct de nos notations de crédit.<br/>
                                    L'évaluation comprendrait des scores sur la culture du risque, la gestion de l'exposition au risque et l'optimisation du risque, et des scores sur les sous-facteurs qui affectent la gestion de l'exposition au risque, pour arriver à notre évaluation globale de la GRE. 
                                </p>
                                <p>
                                    Nous évaluerions chacune des trois sections, puis combinerions nos évaluations pour obtenir l'<strong>évaluation</strong> globale de la <strong>GRE</strong> d'un assureur. L'<strong>évaluation de la GRE</strong> peut comprendre des comparaisons descriptives des pratiques de GRE d'un assureur avec un large éventail de pairs.
                                </p>
                                <p>
                                    Si l'orientation de votre entreprise passe d'une approche «coûts / avantages» à une approche «risques / récompenses», une évaluation GRE peut être un outil utile pour répondre aux défis actuels et futurs.
                                </p>
                            </div>       
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
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    )
};
