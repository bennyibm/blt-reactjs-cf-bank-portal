import React from 'react'
import { Feature, HeroBreadcrumb } from '../../component'


export default function NosClients(){
    return(
        <div>
            <HeroBreadcrumb title="Nos clients" heroImagePath="custom/clients.jpg" />

            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <h3 style={{textAlign : "center"}}>Au centre de notre affaire, nous placons nos clients</h3>
                        <p style={{textAlign : "center", margin : "2rem auto", marginTop : 0}}>
                            Nos clients sont au centre de tout ce que nous faisons. Ils sont mondiaux, avec des défis complexes qui nécessitent une expertise approfondie en investissement et un service client dédié pour les aider à atteindre leurs objectifs d'investissement uniques. Nous servons un large éventail de clients - particuliers, conseillers et institutions - qui comptent sur nous pour les aider à comprendre les marchés, à proposer des solutions d'investissement innovantes et à planifier leur avenir.
                        </p>

                        <section>
                            <div className="boxes-services-custom">
                                {/* item-boxe-services */}
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Répondre aux besoins de nos clients</h4>
                                        <p>
                                            <br/>
                                            <br/>
                                            <br/>
                                            Afin de répondre au mieux aux besoins diversifiés et évolutifs de nos clients, nous avons construit notre entreprise de manière à ce qu'elle soit globale, large et profonde.
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Gestionnaires des risques</h4>
                                        <p>
                                            Aux côtés de nos clients, nous considérons la gestion des risques comme une priorité stratégique et adoptons une approche holistique de la gestion des risques, qui est profondément ancrée dans notre culture et nos processus d'investissement. Tirant parti de nos ressources technologiques et des risques de pointe, nous analysons le spectre des risques pour générer des rendements ajustés au risque et fournir des analyses et des vues complètes.
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Réactivité et créativité</h4>
                                        <p>
                                            Avec notre arsenal diversifié de produits financiers, nous concevons la solution de financement optimale pour offrir la meilleure valeur à toutes les parties. Notre équipe dédiée de professionnels de l'investissement peut utiliser une combinaison d'actions de croissance, de prêts, d'obligations, de financement de projets, d'équité fiscale, de produits dérivés, de baux, de capitaux privés ou publics, pour fournir des solutions réfléchies et créatives.
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Investissement à rendement ajusté au risque</h4>
                                        <p>
                                            Nous évaluons e risque sans nous fier aux conventions du marché et pouvons évaluer les risques sur des marchés de niche qui ne sont pas bien compris. Notre expérience et notre capacité à analyser les risques non conventionnels nous permettent d'offrir des solutions de financement sur mesure que d'autres banques et institutions financières ne sont pas en mesure de fournir.
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Solution unique et complète</h4>
                                        <p>
                                            Nous prenons des positions sur l'ensemble de la structure du capital et visons à fournir un ensemble complet de solutions pour nos sociétés de portefeuille. Nous sommes flexibles, fiscalement efficaces et créatifs dans nos structures de financement, combinant une variété de produits les mieux adaptés pour répondre à tous les besoins de l'entreprise.
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="item-boxed-service">
                                        <h4>Accès au capital pour les sociétés à capital limité</h4>
                                        <p>
                                            Nous excellons dans la fourniture de solutions de financement aux entreprises ayant un accès limité au capital, y compris les entreprises privées, non notées, en croissance ou en phase de démonstration avec des niveaux élevés de valeur intrinsèque par rapport aux actifs matériels ou aux flux de trésorerie.
                                            <br />
                                            <br />

                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End boxes-services */}
                        </section>

                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    )
}