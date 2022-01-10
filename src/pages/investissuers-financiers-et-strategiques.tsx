import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";

export default function InvestisseursFInanciersEtStrategiques() {
  return(
    <div>
        <HeroBreadcrumb title="Investisseurs financiers et strategiques"  heroImagePath="custom/assembly.png"/>

        {/* Info Varius*/}
        <div className="content_info">
          {/* Info Resalt=""*/}
          <div className="skin_base color-white paddings">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-6">
                  <p style={{textAlign : "justify"}}>
                    Le Groupe des investisseurs financiers et stratégiques CF Bank fournit des services de conseil et de banque d'investissement à un large éventail d'institutions, notamment des sociétés de capital investissement, des fonds de pension, des fonds souverains et d'autres investisseurs.
                  </p>
                  <p style={{textAlign : "justify"}}>
                    Nous accompagnons nos clients tout au long du cycle de vie de leurs investissements, depuis la génération d'idées, le conseil en acquisition et le financement, jusqu'à la vente finale ou aux offres sur le marché public.
                  </p>
                  <h4>Les Investisseurs</h4>
                  <p style={{textAlign : "justify"}}>
                    Les clients apprécient notre recherche rigoureuse et nos processus d'investissement disciplinés, qui nous donnent les vues les plus éclairées sur la recherche de nouvelles idées et solutions.
                  </p>
                  <h4>Les partenaires</h4>
                  <p style={{textAlign : "justify"}}>
                    Notre objectif est de forger des relations à long terme avec nos clients, basées sur la confiance. Ils nous considèrent comme un partenaire stratégique et une extension de leurs équipes, fournissant un transfert de connaissances continu et un service client sur mesure pour répondre à leurs besoins distincts.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-styles">
                        <li><i className="fa fa-check" /> <Link to="#">Soin de sante</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Industriel</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Finance municipale</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Immobilier (Action immobilières et credit immobilier)</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-styles">
                        <li><i className="fa fa-check" /> <Link to="#">Technologie, media et telecommunications</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Infrastructures</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Credit</Link></li>
                        <li><i className="fa fa-check" /> <Link to="#">Prêts senior</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2>INVESTISSEURS FINANCIER ET STRATEGIQUE</h2>  
                  <img src="/img/custom/assembly.png" alt="" className="img-responsive" style={{height : 400, borderRadius : 5, marginTop : 20, marginBottom : 20, objectFit : "cover"}} />
                  <p style={{textAlign : "justify"}}>
                    Le Groupe des investisseurs financiers et stratégiques CF Bank fournit des services de conseil et de banque d'investissement à un large éventail d'institutions, notamment des sociétés de capital investissement, des fonds de pension, des fonds souverains et d'autres investisseurs.
                  </p>
                </div>                    
              </div>
            </div>
          </div>
          {/* End Info Resalt=""*/}
        </div>
        {/* Info Varius*/}
        
        {/* Info Content  - Clients Downloads Area */}
        <div className="parallax-window" data-parallax="scroll" data-image-src="img/parallax-img/parallax-01.jpg">
          {/* Content Parallax*/}
          <div className="opacy_bg_02 paddings">
            <div className="container">
              <div className="row">
                {/* title-downloads */}             
                <h1 className="title-downloads">
                  <span className="logo-clients">CoopBank</span> Has more than
                  <span className="responsive-numbers">
                    <span>2</span>
                    ,
                    <span>3</span>
                    <span>8</span>
                    <span>9</span>
                    ,
                    <span>5</span>
                    <span>1</span>
                    <span>8</span>
                  </span>
                  Clients.
                </h1>  
                {/* End title-downloads */}     
                {/* subtitle-downloads */} 
                <div className="subtitle-downloads">
                  <h4>The best service with the <i className="fa fa-heart" /></h4>
                </div> 
                {/* End subtitle-downloads */}
              </div>
            </div> 
          </div>  
          {/* End Content Parallax*/} 
        </div>
        {/* End Info Content  - Clients Downloads Area */}

        
    </div>

)
}