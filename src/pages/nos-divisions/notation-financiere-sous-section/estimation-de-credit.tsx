import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function EstimationDeCredit() {

    return(
        <div>
            <HeroBreadcrumb title='Estimations de crédit' />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Cotes de crédit en monaie internationnale et otes de crédit en monaie locale</h3>
                                <p>
                                    Exprimé en lettres minuscules en utilisant nos symboles de notation de crédit traditionnels. Aucun rapport de justification n'est fourni.
                                </p>
                                <p>
                                    <strong>Les estimations de crédit</strong> sont une indication confidentielle, fournie à la demande d'un tiers, de notre cote de crédit probable sur une entité non notée. Ils n'incluent pas tous les aspects d'une notation de crédit. Ces estimations n'impliquent pas de contact direct avec la direction du débiteur et bien qu'il s'agisse d'une analyse ponctuelle, elles peuvent être mises à jour à votre demande.
                                </p>
                                <p>
                                    <strong>Les estimations de crédit</strong> sont formulées à partir d'une analyse abrégée qui s'appuie sur l'expérience analytique et l'expertise de nos analystes.
                                </p>
                                <p>
                                    <strong>Les estimations de crédit</strong> sont les suivantes :
                                </p>
                                <ul className="list-styles">
                                    <li>
                                        <i className="fa fa-check" />
                                        Généralement fourni dans un contexte de portefeuille
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />
                                        Généralement utilisé pour soutenir les notations des titres de créance garantis (CDO)
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />
                                        Fait partie intégrante du processus de notation de CFB Ratings pour les CDO
                                    </li>
                                    
                                </ul>
                                <p>
                                    Pour évaluer les transactions CDO faisant référence à des garanties non notées, les gestionnaires de garanties CDO demandent une estimation de crédit, qui est mise à jour périodiquement tout au long de la durée de la transaction.
                                </p>
                                <p>
                                    <strong>Une estimation de crédit</strong> n'est pas une cote de crédit. Il s'agit d'une indication confidentielle, fournie uniquement à la demande d'un tiers autre que la société ou l'émetteur des obligations en cause, de la notation de crédit probable de CFB Ratings d'une société non notée ou d'une obligation principalement dans le contexte des CDO.
                                </p>
                                <p>
                                    <strong>Les estimations de crédit</strong> sont généralement créées dans le but d'inclure des garanties non notées par nous dans un CDO ou une autre obligation de financement structuré que nous évaluons. Ils sont formulés à partir d'une analyse abrégée et n'incluent pas tous les aspects d'une analyse de notation standard. Pour ces raisons, une estimation de crédit n'est pas destinée à remplacer une notation de crédit.
                                </p>
                                <p>
                                    <strong>Les estimations de crédit</strong> n'impliquent généralement pas la participation directe du débiteur et sont généralement basées sur des informations fournies par la partie requérante ainsi que des informations provenant de sources tierces que nous considérons fiables. Les estimations sont de nature confidentielle et ne sont pas publiées par CFB Ratings.
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
