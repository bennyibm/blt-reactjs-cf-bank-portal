import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function CotesDeCreditEnMonaie() {

    return(
        <div>
            <HeroBreadcrumb title='Cotes de crédit en monaie internationnale et Cotes de crédit en monaie locale' />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Cotes de crédit en monaie internationnale et otes de crédit en monaie locale</h3>
                                <p>
                                    Les notations de crédit des émetteurs de CFB Ratings font une distinction entre les notations en devises étrangères et les notations en devises locales. La notation de crédit en devises d'un émetteur diffère de la notation en devises locales de celui-ci lorsque le débiteur a une capacité différente à respecter ses obligations libellées dans sa monnaie locale, par rapport aux obligations libellées en devises.  
                                </p>
                                <p>
                                        Il peut prendre la forme d'un émetteur ou émettre une note de crédit. Cotes de crédit en devises étrangères sont généralement fournies qu'à l'échelle mondiale de CFB Ratings, mais également à l'échelle nationale dans les économies fortement dollarisées. 
                                </p>
                                <p>
                                    Pour les deux cotes de crédit en monnaie locale et évaluations des devises étrangères crédit, l'opinion à l'échelle mondiale Ratings CFB est basé sur les caractéristiques individuelles de crédit du débiteur, y compris l'influence des facteurs de risque pays ou économique. 

                                </p>
                                <p>
                                    Les notations de crédit en devises locales et étrangères diffèrent en ce qu'une notation de crédit en devises comprend les transferts et autres risques liés aux actions souveraines qui peuvent affecter directement l'accès aux devises nécessaires au service en temps opportun de l'obligation notée. Les risques de transfert et les autres risques souverains directs abordés dans ces notations comprennent la probabilité de contrôles des changes et l'imposition d'autres restrictions sur le remboursement de la dette extérieure. 
                                    Dans le cas des notations à l'échelle nationale, les avis de crédit en devises sont identiques aux notations en monnaie locale, reflétant l'exclusion à l'échelle nationale des émissions de devises. 
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
