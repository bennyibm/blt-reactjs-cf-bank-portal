import React from 'react'
import { HeroBreadcrumb, Feature } from '../../component'

export default function ProfileInvestissement() {
    return(
        <div>
            <HeroBreadcrumb title="Investissement / Immobilier"  heroImagePath="custom/assembly.png"/>

            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <h4 style={{textAlign : "center"}}>Profile d'investissement</h4>
                        <p style={{textAlign : "center", marginLeft : 100, marginRight : 100}}>
                            Nous poursuivons des investissements avec les caractéristiques suivantes
                        </p>
                
                        <div className="row"  style={{display : "flex", flexWrap : "wrap"}}>
                            <div className="col-md-4">
                                <img className="img-responsive" src="/img/custom/business-men-circle.jpg" style={{borderRadius : 10, height : 280, objectFit : "cover"}} alt="" />
                            </div>
                            <div className="col-md-8" style={{display : "flex", flexDirection : "column", justifyContent: "center"}}>
                                <h4>TYPE DE TRANSACTION / STRUCTURES D'INVESTISSEMENT</h4>
                                <p className="text-black">
                                    Nous investissons dans des titres de créance ou des capitaux propres, dans toute la structure du capital, dans des sociétés privées et cotées en bourse. Quelques exemples supplémentaires de types de transactions sont fournis ci-dessous. Le Groupe d'investissement dans l'énergie alternative utiliserait un ou une combinaison de produits pour structurer la solution optimale afin de réaliser de la valeur pour toutes les parties.
                                </p>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                    <ul className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Actions de croissance
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Financement de projets
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Équité fiscale
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Dette des entreprises
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul  className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Financement HoldCo
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Financement mezzanine
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Dérivés
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Baux
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                        
                                     
                        <p>
                            <hr style={{margin : "30px 100px", width : "80%"}} />
                        </p>
                        <div className="row"  style={{display : "flex", flexWrap : "wrap"}}>
                            <div className="col-md-8" style={{display : "flex", flexDirection : "column", justifyContent: "center"}}>
                                <h4>DOMAINES D'INTERVENTION</h4>
                                <p className="text-black">
                                    Nous sommes profondément impliqués dans tous les domaines et marchés liés à l'énergie, y compris la production d'énergie, les services auxiliaires du réseau électrique, la logistique et la distribution d'énergie / carburant, les crédits d'impôt et les crédits d'attributs verts / d'énergie renouvelable. Voici quelques exemples de secteurs que nous voyons fréquemment.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                    <ul className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Solaire (PV, film mince, concentré, etc.)
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Éolien (fabricants d'éoliennes et développeurs éoliens)
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Piles
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Services de réseau 
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Biomasse et biogaz
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul  className="list-styles">
                                        <li>
                                            <i className="fa fa-check" />
                                            Géothermie
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Carburants et véhicules alternatifs
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Efficacité énergétique
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Pétrole et gaz non conventionnels et produits connexes
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                            <div className="col-md-4">
                                <img className="img-responsive" src="/img/custom/business-men-meeting.jpg" style={{borderRadius : 10, height : 280, objectFit : "cover"}} alt="" />
                            </div>
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
                
        </div>
    )
};
