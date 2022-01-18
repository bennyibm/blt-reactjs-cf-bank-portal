import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function EvaluationDeCredit() {

    return(
        <div>
            <HeroBreadcrumb title='Evaluations de crédit' />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Evaluations de crédit</h3>
                                <p>
                                    Une évaluation de crédit fournit une indication de la solvabilité d'une entité non notée ou d'une structure de financement proposée. Les évaluations de crédit ne sont pas des notations de crédit.
                                </p>
                                <ul className="list-styles">
                                    <li>
                                        <i className="fa fa-check" /> 
                                        Il s'agit d'un indicateur de notre opinion sur la solvabilité qui peut être exprimé en termes descriptifs, dans une large catégorie de notation ou avec l'ajout d'un signe plus (+) ou moins (-) pour indiquer la force relative au sein de la catégorie.
                                    </li>
                                    <li>
                                        <i className="fa fa-check" /> 
                                        Il reflète notre vision des forces et des faiblesses générales du crédit d'un émetteur, d'un débiteur, d'une structure de financement proposée ou d'éléments de ces structures
                                    </li>
                                    <li>
                                        <i className="fa fa-check" /> 
                                        Il peut également concerner des questions de crédit limitées ou tailler certains éléments qui seraient normalement pris en compte dans une notation de crédit.
                                    </li>
                                    
                                </ul>
                                <p>
                                    Les entreprises qui envisagent une analyse complète et interactive des évaluations peuvent avoir des réserves quant au processus impliqué et si le résultat final répondra à leurs besoins. Certaines entreprises peuvent être préoccupées par le temps de gestion nécessaire à une analyse complète des notations, le coût et la probabilité qu'elles obtiennent une note qu'elles jugent "acceptable". Une évaluation de crédit donne aux entreprises la possibilité d'examiner leurs détails de crédit sans s'engager dans l'analyse de notation complète plus gourmande en ressources. Le processus peut aider la direction à identifier les «problèmes» stratégiques. De plus, si le niveau d’évaluation du crédit est acceptable pour la direction, une analyse plus détaillée des cotes publiques peut être effectuée.
                                </p>
                                <p>
                                    Une évaluation de crédit représente généralement une évaluation ponctuelle (c.-à-d. que nous ne maintenons généralement pas de surveillance continue ou de mise à jour des évaluations de crédit) et est confidentiel. Une évaluation de crédit est généralement demandée par l'entité ou le promoteur d'une obligation à évaluer. Les évaluations de crédit sont exprimées en utilisant nos symboles de notation de crédit traditionnels, mais en minuscules (par exemple, «bbb»).
                                </p>
                            </div>       
                            <aside className="col-md-3">
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
