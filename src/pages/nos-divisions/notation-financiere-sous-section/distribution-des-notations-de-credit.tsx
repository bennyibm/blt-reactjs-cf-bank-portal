import React from "react";
import { Feature, HeroBreadcrumb } from "../../../component";

export default function DistributionDesNotationsDeCredit() {
    return (
        <div>
            <HeroBreadcrumb title="Distribution des notations de crédit" />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Distribution des notations de crédit</h3>
                                <p>
                                    Nos notations de crédit sont fournies pour la distribution sur
                                    les marchés publics ou privés ou, le cas échéant, disponibles
                                    uniquement pour la gestion interne (confidentielle).
                                </p>
                                <p>
                                    Il peut prendre la forme d'un émetteur ou émettre une note de
                                    crédit. Cotes de crédit en devises étrangères sont
                                    généralement fournies qu'à l'échelle mondiale de CFB Ratings,
                                    mais également à l'échelle nationale dans les économies
                                    fortement dollarisées.
                                </p>
                                <p>
                                    Ils sont distribués le cas échéant, sur la base suivante:
                                    <ul className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            <span>
                                                <strong>
                                                    Notations publiques (émetteur / émission)
                                                </strong>{" "}
                                                : distribuées via nos sites Web et divers médias
                                                d'information, pour les émetteurs de titres notés
                                                publiquement ou les transactions de prêts privés de
                                                toute taille
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            <span>
                                                <strong>Notations privées (émetteur / émission)</strong>{" "}
                                                : distribuées via un site Web sécurisé pour distribution
                                                à un maximum de 75 tiers nommés.
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            <span>
                                                <strong>
                                                    Notations confidentielles (généralement au niveau de
                                                    l'émetteur)
                                                </strong>{" "}
                                                : non distribuées. Applicable à une utilisation par des
                                                entités à la recherche d'une référence interne.
                                            </span>
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Des notations préliminaires, avec le suffixe «prélim», peuvent
                                    être attribuées à des débiteurs ou à des obligations, y
                                    compris des programmes financiers, dans les circonstances
                                    décrites dans les définitions de notations mondiales CFB.
                                    L'attribution d'une note finale est subordonnée à la réception
                                    par la documentation appropriée de CFB. CFB se réserve le
                                    droit de ne pas émettre de note finale. De plus, si une note
                                    finale est émise, elle peut différer de la note préliminaire.
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
    );
}
