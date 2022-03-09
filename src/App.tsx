import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from "./component/header"
import AproposDeCFBANK from './pages/company/apropos-de-cfbank';
import ContactUs from './pages/company/contact-us';
import PageNotFound from './pages/errors/page-not-found';
import Home from './pages/home';
import InvestisseursFInanciersEtStrategiques from './pages/investissuers-financiers-et-strategiques';
import NosSolutions from './pages/nos-solutions';
import SingleDivisisionTemplate from './pages/single-division-template';
import { SponsorsArea } from './component';
import Events from './pages/company/events';
import History from './pages/company/history';
import Blog from './pages/blog';
import Gouvernance from './pages/company/gouvernance';
import PourquoiNousChoisir from './pages/company/pourquoi-nous-choisir';
import NosClients from './pages/company/nos-clients';
import EvaluationDeCredit from './pages/nos-divisions/notation-financiere-sous-section/evaluation-de-credit';
import EstimationDeCredit from './pages/nos-divisions/notation-financiere-sous-section/estimation-de-credit';
import CotesDeCredit from './pages/nos-divisions/notation-financiere-sous-section/cotes-de-credit';
import CotesDeCreditEnMonaie from './pages/nos-divisions/notation-financiere-sous-section/cotes-de-credit-en-monaies';
import UneOpinionProspective from './pages/nos-divisions/notation-financiere-sous-section/une-opinion-prospective';
import EvaluateurHypothecaireCommercial from './pages/nos-divisions/notation-financiere-sous-section/evaluateur-hypothecaire-commercial';
import DistributionDesNotationsDeCredit from './pages/nos-divisions/notation-financiere-sous-section/distribution-des-notations-de-credit';
import EvaluationDeLaGestionDesRisquesDEntreprise from './pages/nos-divisions/notation-financiere-sous-section/evaluations-de-la-gestion-des-risques-d-entreprise';
import {SoinDeSante, Immobilier, FinanceMunicipale, EnergiesAlternatives, PretsSenior, Credit, Infrasctructure, RessourcesNaturelles, Industriels, TechMediasTelecom } from './pages/investissuers-financiers-et-strategiques/secteurs-financement';
import ProfileInvestissement from './pages/investissuers-financiers-et-strategiques/profile-d-investissement';
import NosDivisions from './pages/nos-divisions';
import Compagnie from './pages/company';

function ScrollToTop({children} : {children : ReactNode}){
  const location = useLocation()

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [location])

  return(
    <>
      {children}
    </>
  )
}

export default function App () {
  
  return (
      
      <BrowserRouter>
        <ScrollToTop>
          <Header />

          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="compagnie/:pageSlug" element={<Compagnie />} />
            {/* <Route path="compagnie/apropos-de-cfbank" element={<AproposDeCFBANK />} />
            <Route path="compagnie/ce-qui-nous-differencie" element={ <PourquoiNousChoisir />} />
            <Route path="compagnie/nos-clients" element={ <NosClients />} />
            <Route path="compagnie/historique" element={<History />} />
            <Route path="compagnie/events" element={<Events />} /> */}

            <Route path="nos-divisions/:divisionPageId" element={<NosDivisions />} />
            
            <Route path="nos-divisions/notation-financiere/evaluateur-hypothecaire-commercial" element={<EvaluateurHypothecaireCommercial />} />
            <Route path="nos-divisions/notation-financiere/evaluations-de-credit" element={<EvaluationDeCredit />} />
            <Route path="nos-divisions/notation-financiere/estimations-de-credit" element={<EstimationDeCredit />} />
            <Route path="nos-divisions/notation-financiere/cotes-de-credit" element={<CotesDeCredit />} />
            <Route path="nos-divisions/notation-financiere/cote-de-credit-en-monaie-etrangere-et-cote-de-credit-en-monnaie-locale" element={<CotesDeCreditEnMonaie />} />
            <Route path="nos-divisions/notation-financiere/une-opinion-prospective-de-la-solvabilite-d-un-emetteur" element={<UneOpinionProspective />} />
            <Route path="nos-divisions/notation-financiere/evaluations-de-la-gestion-des-risques-d-entreprise" element={<EvaluationDeLaGestionDesRisquesDEntreprise />} />
            <Route path="nos-divisions/notation-financiere/distribution-des-notations" element={<DistributionDesNotationsDeCredit />} />

            <Route path="investisseurs-financiers-et-strategiques" element={<InvestisseursFInanciersEtStrategiques/>} />
            <Route path="investisseurs-financiers-et-strategiques/profile-d-investissement" element={<ProfileInvestissement/>} />
            
            <Route path="investisseurs-financiers-et-strategiques/soin-de-sante" element={<SoinDeSante/>} />
            <Route path="investisseurs-financiers-et-strategiques/technologie-media-et-telecomunications" element={<TechMediasTelecom/>} />
            <Route path="investisseurs-financiers-et-strategiques/industriels" element={<Industriels/>} />
            <Route path="investisseurs-financiers-et-strategiques/finance-municipale" element={<FinanceMunicipale/>} />
            <Route path="investisseurs-financiers-et-strategiques/energies-alternatives" element={<EnergiesAlternatives/>} />
            <Route path="investisseurs-financiers-et-strategiques/prets-senior" element={<PretsSenior/>} />
            <Route path="investisseurs-financiers-et-strategiques/credits" element={<Credit/>} />
            <Route path="investisseurs-financiers-et-strategiques/infrastructures" element={<Infrasctructure/>} />
            <Route path="investisseurs-financiers-et-strategiques/ressources-naturelles" element={<RessourcesNaturelles/>} />
            <Route path="investisseurs-financiers-et-strategiques/immobilier" element={<Immobilier/>} />

            <Route path="nos-solutions" element={<NosSolutions />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="media/in-the-news" element={<Blog />} />            
            
            <Route path="gouvernance/:gouvernancePage" element={<Gouvernance />} />
            {/* <Route path="press-release" element={<Blog />} /> */}
          </Routes>
          
          
          <SponsorsArea />
          <Footer/>
        </ScrollToTop>
        
      </BrowserRouter>
  );
}

