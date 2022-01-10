import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Header from "./component/header"
import AproposDeCFBANK from './pages/apropos-de-cfbank';
import ContactUs from './pages/company/contact-us';
import PageNotFound from './pages/errors/page-not-found';
import Home from './pages/home';
import InvestisseursFInanciersEtStrategiques from './pages/investissuers-financiers-et-strategiques';
import NosSolutions from './pages/nos-solutions';
import NosDivisions from './pages/nos-divisions';
import NotreEquippe from './pages/notre-equipe';
import SingleDivisisionTemplate from './pages/single-division-template';
import { SponsorsArea } from './component';
import Events from './pages/company/events';
import History from './pages/company/history';
import Blog from './pages/blog';
import Gouvernance from './pages/company/gouvernance';
import PourquoiNousChoisir from './pages/company/pourquoi-nous-choisir';
import BanqueDAffaires from './pages/nos-divisions/banque-d-affaires';
import NosClients from './pages/company/nos-clients';

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
            <Route path="apropos-de-cfbank" element={<AproposDeCFBANK />} />
            <Route path="ce-qui-nous-differencie" element={ <PourquoiNousChoisir />} />
            <Route path="nos-clients" element={ <NosClients />} />
            <Route path="historique" element={<History />} />
            <Route path="events" element={<Events />} />
            {/* <Route path="notre-equippe" element={<NotreEquippe />} /> */}
            <Route path="nos-divisions" element={<SingleDivisisionTemplate />} />
            <Route path="banque-d-affaires" element={<BanqueDAffaires />} />
            <Route path="banque-d-investissement" element={<SingleDivisisionTemplate />} />
            <Route path="notation-financiere" element={<SingleDivisisionTemplate />} />
            <Route path="division-details" element={<SingleDivisisionTemplate />} />
            <Route path="investisseurs-financiers-et-strategiques" element={<InvestisseursFInanciersEtStrategiques/>} />
            <Route path="nos-solutions" element={<NosSolutions />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="gouvernance/:gouvernancePage" element={<Gouvernance />} />
            <Route path="blog" element={<Blog />} />
            <Route path="press-release" element={<Blog />} />
          </Routes>

          <SponsorsArea />
          <Footer/>
        </ScrollToTop>
        
      </BrowserRouter>
  );
}

