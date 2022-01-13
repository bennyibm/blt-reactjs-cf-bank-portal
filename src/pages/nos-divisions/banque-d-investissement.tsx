import React from 'react'
import { Link } from 'react-router-dom'
import { CollapsableElement, HeroBreadcrumb } from '../../component'

export default function BanqueDInvestissement() {
    
    return(
        <div>
            <HeroBreadcrumb title="Banque d'investissement"/>
            
            
            <div className="content_info">
                <div className="paddings">
                {/* Container Area - Boxes Services */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>Banque d'investissement</h4>
                            <p style={{textAlign : "justify", wordBreak : "break-word"}}>
                                Nous aspirons à être le principal conseiller et financier de confiance de nos clients, qui comprennent des sociétés, des institutions financières, des sponsors financiers, des gouvernements et des autorités publiques ainsi que des conseils d'administration et des comités spéciaux. La Division des services bancaires d'investissement est à l'avant-garde de la franchise client de Capital Financial Bank.
                                <br/>
                                Nous nous efforçons de fournir les meilleurs conseils et l'excellence en matière d'exécution sur les transactions les plus complexes entre les produits afin d'aider nos clients à croître.
                                <br/>
                                Nous nous concentrons sur le fait d'être un important financier et fournisseur de services de mobilisation de capitaux, ce qui, à son tour, permet à nos clients d'atteindre leurs objectifs stratégiques. 
                                Nous restons attachés à une stratégie de co-investissement avec les clients.

                            </p>
                        </div>
                        <div className="col-md-4">                       
                            <img className="img-responsive" src="/img/custom/launch-business.jpg" style={{borderRadius : 10, height : 300, objectFit : "cover"}} alt="" />
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col credit-area">
                            <h4 style={{marginBottom : -30}}>Nos services</h4>
                            {/* <p className="lead color-skin">You make up your mind to get what you want, because now our different types of loans and just a click, will be closer to making it happen.</p>
                            <p>Meet our broad portfolio of loans made especially for you, and check here the features of each product; once you've found the one you want, click on Apply for your product, or request it through our points of interaction with a counselor, and just like that, on the next business day, we will contact you to close the process.</p> */}
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Finanement</a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">Leveraged Finance Capital Markets CFB</a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Gestion des responsabilités</a>
                                </li>
                                <li role="presentation">
                                    <a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">Strats</a>
                                </li>
                            </ul>
                            {/* End Nav tabs */}
                            {/* tab-content*/}
                            <div className="tab-content">
                            {/* tab-Item-1*/}
                            <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                                {/* <h4>FREE INVESTMENT</h4> */}
                                <ul className="list-styles">
                                    <CollapsableElement label="Dérivés d'entreprise">
                                        <p>
                                            L'équipe Corporate Dérivatives CFB travaille avec les entreprises pour développer des stratégies de gestion des risques personnalisées.
                                        </p>
                                    </CollapsableElement>
                                    <CollapsableElement label="Solutions de financement d'entreprise">
                                        <p>
                                            L'équipe Corporate Finance Solutions CFB aide les entreprises à structurer des transactions complexes.
                                        </p>
                                    </CollapsableElement>
                                    <CollapsableElement label="Marchés de capitaux propres">
                                        <p>
                                            L'équipe Equity Capital Markets CFB travaille en étroite collaboration avec des sociétés ouvertes et fermées, des gouvernements et des sponsors financiers pour créer, structurer et exécuter des financements en actions et liés à des actions tels que les offres publiques initiales, les offres de suivi, les convertibles et les dérivés.
                                        </p>
                                    </CollapsableElement>
                                    
                                    <CollapsableElement label="Marchés de capitaux de première qualité">
                                        <p>
                                            L'équipe Investment Markets Capital Markets CFB fournit des conseils sur la structure du capital pour les produits liés à la dette, aux produits hybrides, aux dérivés et aux actions pour les organisations dont la cote de crédit est élevée. Le bureau du syndicat de l'équipe est responsable du marketing, des prix et de la distribution des nouvelles émissions d'obligations de sociétés, hybrides et d'actions privilégiées en dollars américains pour les entreprises du monde entier.
                                        </p>
                                    </CollapsableElement>
                                    <CollapsableElement label="Groupe de financement">
                                        <p>
                                            Le Groupe de financement est composé de professionnels situés dans les bureaux régionaux à travers l'Afrique  ainsi que en Europe. L'équipe est chargée de couvrir les souverains, les institutions financières et un large éventail de clients entreprises. Les transactions dans lesquelles l'équipe est impliquée varient des prêts à effet de levier et des financements structurés, y compris l'émission directe de titres de créance sur les marchés des capitaux, aux émissions d'actions et d'émissions liées aux actions. La diversité des clients et des produits que nous couvrons crée un environnement hautement entrepreneurial et créatif.
                                        </p>
                                    </CollapsableElement>
                                    <CollapsableElement label="Finance structurée">
                                        <p>
                                            L'équipe de financement structuré aide les clients à titriser les actifs, les activités et les risques associés au financement d'acquisitions et à la gestion du bilan. La gamme de produits de l'équipe comprend des obligations en cas de catastrophe, du financement de films, de divertissements, ainsi que la titrisation de redevances de franchise, de propriété intellectuelle.
                                        </p>
                                    </CollapsableElement>
                                </ul>
                            </div>
                            {/* tab-Item-1*/}
                            {/* tab-Item-2*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab2">
                                <div className="row" style={{display : "flex"}}>
                                    <div className="col-md-3">
                                        <img className="img-responsive" src="/img/custom/why-choose-us.jpg" style={{borderRadius : 10, width : "100%", height : 200, objectFit : "cover"}} alt="" />
                                    </div>
                                    <div className="col-md-9" style={{display : "flex", flexDirection : "column", justifyContent : "center"}}>
                                        <p>
                                            L'équipe Leveraged Finance Capital Markets crée, structure et exécute des prêts bancaires et des financements obligataires à haut rendement pour les entreprises et les sponsors financiers via nos partenaire financier et bailleur de fonds. Certaines transactions comprennent des rachats à effet de levier, des refinancements et des restructurations. Le bureau des syndicats de l'équipe est responsable de la souscription et de la syndication des prêts bancaires et des obligations à haut rendement.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* tab-Item-2*/}
                            {/* tab-Item-3*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab3">
                                <div className="row" style={{display : "flex"}}>
                                    <div className="col-md-3">
                                        <img className="img-responsive" src="/img/custom/assembly.png" style={{borderRadius : 10, width : "100%", height : 200, objectFit : "cover"}} alt="" />
                                    </div>
                                    <div className="col-md-9" style={{display : "flex", flexDirection : "column", justifyContent : "center"}}>
                                        <p>
                                            L'équipe de gestion du passif conseille et exécute les transactions de dette publique et privée, y compris les appels d'offres, les offres d'échange et les consentements. Ces transactions sont souvent exécutées dans le cadre de restructurations d'entreprise plus larges, de ventes d'actifs et de refinancements.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* tab-Item-3*/}
                            {/* tab-Item-4*/}
                            <div role="tabpanel" className="tab-pane fade in" id="tab4">
                                <div className="row" style={{display : "flex"}}>
                                    <div className="col-md-3">
                                        <img className="img-responsive" src="/img/custom/assembly.png" style={{borderRadius : 10, width : "100%", height : 200, objectFit : "cover"}} alt="" />
                                    </div>
                                    <div className="col-md-9" style={{display : "flex", flexDirection : "column", justifyContent : "center"}}>
                                        <p>
                                            Les professionnels du groupe développent des solutions quantitatives et techniques pour les clients d'CFB en partenariat avec les équipes du Groupe Financement, d'CFB Classic et de la Division Valeurs Mobilières.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            {/* tab-Item-4*/}
                            </div>
                            {/* End tab-content */}
                            <div className="divisor-line" />
                            {/* boxes-services */}
                            <div className="row boxes-services">
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Apply product</h4>
                                <span>Secure Information</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> Apply</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Chat</h4>
                                <span>We offer the lowest rates.</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> Now</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            {/* item-boxe-services */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="item-boxed-service no-margin">
                                <h4>Call</h4>
                                <span>Best Credits</span>
                                <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                                </div>
                            </div>
                            {/* End item-boxe-services */}
                            </div>
                            {/* End boxes-services */}
                        </div>      
                    </div>
                </div>
                {/* End Container Area - Boxes Services */}
                </div>
            </div>
        </div>
    )
};
