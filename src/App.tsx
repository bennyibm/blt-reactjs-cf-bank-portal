import React, {FunctionComponent} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App () {
  return (
      
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="apropos-de-cfbank" element={<AproposDeCFBANK />} />
          <Route path="notre-equippe" element={<NotreEquippe />} />
          <Route path="nos-divisions" element={<NosDivisions />} />
          <Route path="division-details" element={<SingleDivisisionTemplate />} />
          <Route path="investisseurs-financiers-et-strategiques" element={<InvestisseursFInanciersEtStrategiques/>} />
          <Route path="nos-solutions" element={<NosSolutions />} />
          <Route path="contact" element={<ContactUs />} />

        </Routes>

        <SponsorsArea />
        <Footer/>
      </BrowserRouter>
  );
}

