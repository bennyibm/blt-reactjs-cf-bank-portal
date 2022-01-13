import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

export default function PourquoiNousChoisir() {
    return(
        <div>
            <HeroBreadcrumb title="Qu'est ce qui fait notre différence" heroImagePath="custom/business-man.jpg" heroImagePosition="left"/>
            
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <h4>Notre équipe d'experts en investissement.</h4>
                        <p>
                            Le Groupe d'investissement dans les énergies alternatives dispose de professionnels hautement qualifiés et expérimentés possédant une vaste connaissance de l'industrie ainsi qu'une expertise des produits, ce qui nous permet d'élaborer des solutions créatives adaptées aux besoins des sociétés du portefeuille.
                        </p>
                        <div className="row" style={ { display : "flex" } }>
                            <div className="col-md-4">
                                <img className="img-responsive" src="img/custom/meeting.jpg" alt="" />
                            </div>
                            <div className="col-md-8" style={ { display : "flex", flexDirection : "column", justifyContent : "center"} }>
                                <h4>Large orientation sectorielle</h4>
                                <p>
                                    Notre équipe possède une vaste expérience allant des sources d'énergie renouvelables (par exemple l'énergie solaire, éolienne, la biomasse, le biogaz, la géothermie, les biocarburants) et d'autres industries liées à l'énergie (par exemple les batteries, l'efficacité énergétique, les LED, la logistique du carburant et les terminaux) aux fossiles traditionnels. Combustibles (par exemple pétrole, gaz) et leurs produits connexes (par exemple liquides de gaz naturel, gaz naturel liquéfié). Au sein de chaque industrie, nous nous concentrons sur le développement et la possession d'actifs producteurs d'énergie, la possession et l'exploitation d'actifs intermédiaires et le négoce de crédits d'énergie renouvelable / verts régionaux. Ce ne sont que quelques exemples de sous-secteurs liés à l'énergie couverts par notre équipe.
                                </p>
                            </div>
                        </div>               
                        <p>
                            {/* Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus */}
                        </p>
                        <div className="row"  style={ { display : "flex" } }>
                            <div className="col-md-8"  style={ { display : "flex", flexDirection : "column", justifyContent : "center"} }>
                                <h4>Expertise dans tous les produits</h4>
                                <p>
                                    Qu'il s'agisse de capitaux propres de croissance, de capitaux propres fiscaux, de prêts, d'obligations, de mezzanine, de financements de projets, de produits dérivés, de baux, de capitaux privés ou publics, l'Alternative Energy Investing Group, avec son arsenal diversifié de produits financiers, est en mesure de fournir la structure optimale pour chaque possibilité de financement.
                                </p>
                            </div>
                            <div className="col-md-4">                       
                                <img className="img-responsive" src="/img/custom/business-thinking-session.jpg" alt="" />
                            </div>
                        </div> 
                        <div className="row" style={{display : "flex"}}>
                            <div className="col-md-4">                       
                                <img className="img-responsive" src="/img/custom/black-meeting.jpg" alt="" />
                            </div>
                            <div className="col-md-8"   style={ { display : "flex", flexDirection : "column", justifyContent : "center"} }>
                                <h4>Relation privilégiée avec les sponsors, les propriétaires et les équipes de direction. </h4>
                                <p>
                                    Nous nouons des relations solides et durables avec les propriétaires, les gestionnaires et les sociétés de portefeuille. Nous prenons le temps de comprendre les fondamentaux des entreprises avec lesquelles nous travaillons afin de trouver la meilleure solution pour répondre à leurs besoins. Nous construisons la confiance grâce à la qualité de notre exécution en travaillant avec les équipes de direction à chaque étape du processus.
                                </p>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>

    )
}