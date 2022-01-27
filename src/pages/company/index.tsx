import React, {ReactNode, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Events from './events';
import History from './history';
import NosClients from './nos-clients';
import PourquoiNousChoisir from './pourquoi-nous-choisir';
import AproposDeCFBANK from './apropos-de-cfbank';
import PageNotFound from '../errors/page-not-found';


interface Page{
    slug : string,
    component : ReactNode
}

const pages : Page[] = [
    { slug : "apropos-de-cfbank", component : AproposDeCFBANK() },
    { slug : "historique", component : History() },
    { slug : "ce-qui-nous-differencie", component : PourquoiNousChoisir() },
    { slug : "nos-clients", component : NosClients() },
    { slug : "events", component : Events() },
]
export default function Compagnie() {
    const {pageSlug} = useParams<string>()
    const [currentPage, setCurrentPage] = useState<Page | undefined>()
    
    useEffect( () => {
        setCurrentPage( pages.find( page => page.slug === pageSlug) )
    }, [pageSlug])

    return(
        <>
            {currentPage && currentPage.component}
            {!currentPage && <PageNotFound />}
        </>
    )
    
};
