import React from "react";
import { Feature, HeroBreadcrumb } from "../../../component";

export default function UneOpinionProspective() {
    return (
        <div>
            <HeroBreadcrumb title="Une opinion prospective de la solvabilité d'un émetteur" />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Une opinion prospective de la solvabilité d'un émetteur</h3>
                                <p>
                                    Une notation CFB{" "}
                                    <strong>Rating Counterparty Instrument Rating</strong> (
                                    <strong>CIR</strong>) est une opinion prospective sur la
                                    solvabilité d'un émetteur dans une structure de titrisation
                                    par rapport à une obligation financière spécifique envers une
                                    contrepartie (y compris des swaps de taux d'intérêt, des swaps
                                    de devises et des facilités de liquidité) sur une base de
                                    paiement ultime. Il prend en considération la solvabilité des
                                    garants, des assureurs ou d'autres formes de rehaussement de
                                    crédit sur l'obligation financière envers une contrepartie et
                                    tient compte de la devise dans laquelle l'obligation
                                    financière est libellée.
                                </p>
                                <p>
                                    L'opinion reflète l'opinion de CFB Ratings sur la capacité de
                                    l'émetteur et sa volonté de respecter ses engagements
                                    financiers à mesure que les fonds deviennent disponibles, et
                                    peut évaluer des conditions, telles que la garantie et la
                                    subordination, qui pourraient affecter le paiement final en
                                    cas de défaut.
                                </p>
                                <p>
                                    Un <strong>CIR</strong> est spécifique aux obligations
                                    financières que les entités ad hoc de titrisation contractent
                                    avec des banques ou toute autre entité assumant le risque de
                                    crédit de l'émetteur dans le cadre d'un contrat tel qu'un swap
                                    ou une facilité de liquidité (une «contrepartie»).
                                </p>
                                <p>
                                    Les réserves obligatoires en capital pour les classes d'actifs
                                    à haut rendement peuvent limiter les pratiques de gestion des
                                    investissements des assureurs.
                                </p>
                                <p>
                                    Le <strong>CIR</strong> traite de la capacité d'un émetteur à
                                    s'acquitter de ses obligations financières envers une
                                    contrepartie dans une opération de titrisation sur une base de
                                    paiement ultime au fur et à mesure que les fonds deviennent
                                    disponibles, indépendamment de toute date de remboursement
                                    spécifique qui peut être indiquée dans les termes du contrat.
                                </p>
                                <h4>Livrables</h4>
                                <ul className="list-styles">
                                    <li>
                                        <i className="fa fa-check" />
                                        <span>
                                            Chaque <strong>CIR</strong> est spécifique à l'obligation
                                            financière d'un émetteur particulier en vertu d'un contrat
                                            de contrepartie spécifique en relation avec une opération
                                            de titrisation. Par exemple, nous pourrions attribuer un{" "}
                                            <strong>CIR</strong> de «AAcir» aux obligations de
                                            l'émetteur ABC en vertu du swap de taux d'intérêt avec la
                                            banque XYZ.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />
                                        <span>
                                            Le <strong>CIR</strong> peut être une notation publique,
                                            privée ou confidentielle. Le <strong>CIR</strong> peut
                                            être affecté avec surveillance ou peut être ponctuel sans
                                            surveillance. En outre, le <strong>CIR</strong> peut être
                                            une notation en devise locale ou étrangère, selon la
                                            structure sous-jacente.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />
                                        <span>
                                            Cette opinion ne tient pas compte de la rapidité de
                                            paiement. À ce titre, les <strong>CIR</strong> ne sont que
                                            des notations à long terme.
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check" />
                                        <span>
                                            Le <strong>CIR</strong> est un nouveau type de notation
                                            avec ses propres définitions de notation. Les{" "}
                                            <strong>CIR</strong> sont identifiés par le suffixe «cir»
                                            pour distinguer le <strong>CIR</strong> d'une émission de
                                            notation CFB ou d'une notation de crédit d'émetteur. Nous
                                            attribuerons l'identifiant 'sf' si nécessaire.
                                        </span>
                                    </li>
                                </ul>
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
