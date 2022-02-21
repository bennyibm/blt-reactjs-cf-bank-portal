import React from "react";
import { Link} from "react-router-dom";
import { Feature } from "../../component";
// import { SlideItemProps } from "../../component/custom-slider";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

export default function NotationFinanciere() {
    // const slides : SlideItemProps[] = [
    //     {
    //         image : "/img/custom/black-business-man.jpg",
    //         imagePosition : "top",
    //         subTitle : "Votre succès est notre",
    //         principalTitle : "Es-tu prêt?",
    //         description : "Trouvez une gamme des services avec notre banque"
    //     },
    // ]

    function renderHome(){
        return (
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <p style={{textAlign : "center", margin : "auto"}}>
                            Notre offre intégrée de notations de crédit, de recherche sur les risques et de perspectives critiques est essentielle pour traduire la complexité en clarté afin que vous puissiez prendre des décisions avec conviction. Découvrez notre suite de produits et services ci-dessous.
                        </p>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4" >
                                <img className="img-responsive" src="/img/custom/puzzle.jpg" style={{borderRadius : 10, height : 280, objectFit : "cover"}} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h4>Fusions et acquisitions</h4>
                                <p>
                                    Les réserves obligatoires en capital pour les classes d'actifs à haut rendement peuvent limiter les pratiques de gestion des investissements des assureurs. 
                                </p>
                                <p>
                                    Avec les services d'analyse avancée de Capital Financial Bank Ratings, les assureurs notés peuvent examiner les frais par rapport à des catégories d'actifs spécifiques telles que les infrastructures, les fonds spéculatifs / les investissements en capital-investissement, les lignes de mortalité à long terme ou d'autres qui attirent des frais de capital élevés. Les commentaires sont fournis dans le contexte du modèle de capital d'assurance de CFB Ratings et de l'analyse des cotes de CFB Ratings concernant l'assureur. Dans ce contexte, il peut être utile pour répondre aux exigences globales de conservation du capital d'un assureur à son niveau de notation actuel. Bien que les services d'analyse avancée de S&P Global Ratings ne soient pas des conseils ou une recommandation, ils peuvent fournir aux clients une autre pièce du puzzle dans leur analyse de décision.
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    Pour les compagnies d'assurance, le résultat de nos services d'analyse avancée peut vous permettre de:
                                    <ul className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Recalculez vos charges de capital afin de pouvoir affecter plus efficacement votre capital 
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Redéployer le produit pour parvenir à une diversification accrue
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Accentuez la mise en œuvre de vos objectifs économiques
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Fournissez une explication plus complète des domaines d'investissement à vos parties prenantes et investisseurs 
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>               
                        <p >
                            <hr style={{margin : "30px 100px", width : "80%"}} />
                        </p>
                        <div className="row" style={{display : "flex", flexWrap : "wrap-reverse"}}>
                            <div className="col-md-8"  style={{display : "flex", alignItems : "center"}}>
                                <div className="row">
                                    <h4 style={{marginLeft : 10}}>Nos services</h4>
                                    <div className="col-md-6">
                                        <ul className="list-styles">
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="evaluateur-hypothecaire-commercial">
                                                    Évaluateur hypothécaire commercial (Commercial Mortgage Evaluator - CME)
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="une-opinion-prospective-de-la-solvabilite-d-un-emetteur">
                                                    Une opinion prospective de la solvabilité d'un émetteur
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="evaluations-de-credit">
                                                    Évaluations de crédit
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="estimations-de-credit">
                                                    Estimations de crédit
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-styles">
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="cote-de-credit-en-monaie-etrangere-et-cote-de-credit-en-monnaie-locale">
                                                    Cote de crédit en monnaie étrangère et cote de crédit en monnaie locale
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="evaluations-de-la-gestion-des-risques-d-entreprise">
                                                    Évaluations de la gestion des risques d'entreprise
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="distribution-des-notations">
                                                    Distribution des notations de crédit
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <Link to="cotes-de-credit">
                                                    Cotes de crédit
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">                       
                                <img className="img-responsive" src="/img/custom/business-momy.jpg" style={{borderRadius : 10, height : 260, objectFit : "cover"}} alt="" />
                            </div>
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
        )


    }
    return(
        <div>
            <HeroBreadcrumb title="Notation financiere" heroImagePath="custom/notation-financiere.jpg"/>
            {renderHome()}
        </div>

    )
}