import React from 'react'
import { Feature, HeroBreadcrumb } from '../../../component'


export default function EvaluateurHypothecaireCommercial() {

    return(
        <div>
            <HeroBreadcrumb title="Évaluateur hypothécaire commercial (Commercial Mortgage Evaluator - CME)" />
            <div className="content_info">
                <div className="paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h3>Évaluateur hypothécaire commercial (Commercial Mortgage Evaluator - CME)</h3>
                                <p>
                                    L'évaluateur d'hypothèques commerciales (CME) est un modèle propriétaire de CFB Ratings utilisé comme outil pour aider à effectuer l'analyse du risque de crédit associé aux garanties des titres hypothécaires commerciaux américains (CMBS). L'évaluateur hypothécaire commercial est un outil qui peut être utilisé pour évaluer le risque de crédit d'un ensemble de prêts immobiliers commerciaux.
                                </p>
                                <p>
                                    <strong>Pourquoi utiliser CME?</strong>
                                    L'évaluateur d'hypothèques commerciales (CME) fournit un cadre unique pour évaluer les transactions CMBS autonomes, gros prêts, conduits / fusion et à taux flottant sur la base des critères de notation CFB. CME est un modèle simple et axé sur les performances qui aide l'utilisateur à créer un accord, à ajouter et à modifier des prêts et à exécuter l'accord pour afficher les résultats.
                                </p>
                                <p>
                                    <strong>Description détaillée</strong>
                                    L'évaluateur d'hypothèques commerciales est un outil qui permet d'évaluer le risque de crédit des prêts immobiliers commerciaux, tant au niveau individuel qu'au niveau du portefeuille, le cas échéant. Ce modèle utilise des mesures de crédit au niveau du prêt individuel pour calculer les niveaux de rehaussement du crédit au niveau du prêt. Ceux-ci sont à leur tour agrégés pour déterminer les niveaux de rehaussement de crédit au niveau du pool, qui reflètent le risque de crédit des prêts au sein d'un pool donné.
                                </p>
                                <p>
                                    CME offre une intégration basée sur Excel et fournit des rapports Excel pour les sorties de modèle, qui comprennent des rapports CE sur les accords et les prêts. Il permet aux utilisateurs de saisir des hypothèses au niveau de la transaction telles que le domicile de l'actif, la création de GSE et les améliorations structurelles. Il offre également une fonctionnalité d'ajout / retrait de prêt et fournit une fonctionnalité de rapport d'erreurs.
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
