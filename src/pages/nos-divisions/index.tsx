import React, {ReactNode, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import BanqueDAffaires from './banque-d-affaires';
import BanqueDInvestissement from './banque-d-investissement';
import NotationFinanciere from './notation-financiere';

interface DivisionPage{
    id : string,
    component : ReactNode
}

const divisionPages = [
    {
        id : "banque-d-affaires",
        component : <BanqueDAffaires />
    },
    {
        id : "banque-d-investissement",
        component : <BanqueDInvestissement />
    },
    {
        id : "notation-financiere",
        component : <NotationFinanciere />
    },
]
export default function NosDivisions() {
    const {divisionPageId} = useParams<string>()
    const [divisionPage, setDivisionPage] = useState<DivisionPage>()

    useEffect( () => {
        setDivisionPage( divisionPages.find( divisionPage => divisionPage.id === divisionPageId) )
    }, [divisionPageId])

    return (
        <>
            {divisionPage?.component}
        </>
    )
};
