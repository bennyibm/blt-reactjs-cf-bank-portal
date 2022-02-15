import React from "react";
import { Feature } from "../../component";
import HeroBreadcrumb from "../../component/hero-breadcrumb";


export default function InvestisseursFInanciersEtStrategiques() {
  return(
    <div>
        <HeroBreadcrumb title="Investisseurs financiers et strategiques"  heroImagePath="custom/brainstorming-4.jpg"/>

        <div className="content_info">
          <div className="paddings">
              <div className="container">
                  <h3 style={{textAlign : "center"}}>Le principal conseiller et financier de confiance de nos clients</h3>
                  <p style={{textAlign : "center", margin : "auto"}}>
                    Le Groupe des investisseurs financiers et stratégiques CFB fournit des services de conseil et de banque d'investissement à un large éventail d'institutions, notamment des sociétés de capital-investissement, des fonds de pension, des fonds souverains, des family offices et d'autres investisseurs.
                  </p>
                  <br/>
                  <br/>
                  <div className="row">
                      <div className="col-md-4">
                          <img className="img-responsive" src="/img/custom/financial-bank.jpg" style={{borderRadius : 10, height : 280, objectFit : "cover"}} alt="" />
                      </div>
                      <div className="col-md-8">
                          <h4>Les Investisseurs</h4>
                          <p>
                            Les clients apprécient notre recherche rigoureuse et nos processus d'investissement disciplinés, qui nous donnent les vues les plus éclairées sur la recherche de nouvelles idées et solutions. Au nom de nos clients, nous nous efforçons de rassembler nos meilleurs esprits, en tirant des enseignements de nos équipes d'investissement et des forums quotidiens des directeurs des investissements, qui comprennent des professionnels expérimentés avec des décennies d'expérience en investissement.
                          </p>
                      </div>
                  </div>
                                
                  <p>
                      <hr style={{margin : "30px 100px", width : "80%"}} />
                  </p>
                  <div className="row">
                      <div className="col-md-8">
                          <h4>Les partenaires</h4>
                          <p>
                            Notre objectif est de forger des relations à long terme avec nos clients, basées sur la confiance. Ils nous considèrent comme un partenaire stratégique et une extension de leurs équipes, fournissant un transfert de connaissances continu et un service client sur mesure pour répondre à leurs besoins distincts. Nous sommes le premier appel à clients souhaitant obtenir des informations et des conseils sur un large éventail de sujets, car nous offrons un accès aux vastes ressources de CFBA, Capital Financial Bank et d'un réseau mondial d'experts de l'industrie.
                          </p>
                      </div>
                      <div className="col-md-4">                       
                          <img className="img-responsive" src="/img/custom/why-choose-us-2.jpg" style={{borderRadius : 10, height : 260, objectFit : "cover"}} alt="" />
                      </div>
                  </div>
                  
                  <Feature />
              </div>
          </div>
        </div>
    </div>

)
}