import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Feature } from "../../component";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

type TeamMemberType={
    name : string,
    location : string,
    email : string,
    phone : string,
    facebook : string,
    linkedin : string,
    countryCode? : string
}

const defaultTeamMember = {
    name : "Benny",
    location : "Congo/Kinshasa",
    email : "benny.nkonga@blth.tech",
    phone : "+243815490726",
    facebook : "bennyibmn",
    linkedin : "bennyinkonga"
}
const TeamMemberItem : FunctionComponent<{teamMember : TeamMemberType}> = ({teamMember = defaultTeamMember} ) =>{
    return(
        <div className="col-md-3">
            <div className="item-team">
                <a href="img/team/1.jpg" className="fancybox"><img src="/img/cf-bank-hero.png" alt="" /></a>
                <h4>{teamMember.name}</h4>
                <span className="country"><img src="/img/country/london.png" alt="" /> {teamMember.location}</span>
                <ul className="list-styles">
                    <li>
                        <i className="fa fa-envelope" /> 
                        <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
                    </li>
                    <li>
                        <i className="fa fa-headphones" />
                         <a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a>
                    </li>
                    <li>
                        <i className="fa fa-facebook" /> 
                        <Link to={`facebook.com/${teamMember.facebook}`} target="_blank">{teamMember.facebook}</Link>
                    </li>
                    <li>
                        <i className="fa fa-linkedin" /> 
                        <Link to={`linkedin.com/${teamMember.linkedin}`} target="_blank">{teamMember.linkedin}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

interface GouvernancePage{
    image? : string,
    name : string,
    title : string,
    description? : string,
    teamMembers : TeamMemberType[]
}

const pages : GouvernancePage[] = [
    {
        name : "comite-de-direction",
        title : "Comité de direction",
        teamMembers : [
            {
                name : "Emmanuel LOMAMI",
                location : "UK/London",
                email : "emmanuel.lo@dumacash.com",
                phone : "+243815490726",
                facebook : "",
                linkedin : ""
            },
            {
                name : "Gloire LOMAMI",
                location : "CANADA/Québec",
                email : "gloire.lomami@dumacash.com",
                phone : "+243815490726",
                facebook : "",
                linkedin : "glomami"
            },
            {
                name : "Emmanuel LOMAMI",
                location : "UK/London",
                email : "emmanuel.lo@dumacash.com",
                phone : "+243815490726",
                facebook : "",
                linkedin : ""
            },
            {
                name : "Gloire LOMAMI",
                location : "CANADA/Québec",
                email : "gloire.lomami@dumacash.com",
                phone : "+243815490726",
                facebook : "",
                linkedin : "glomami"
            },
        ],
        description : "Nous vous présentons notre équippe des professionnels hautement qualifiés et expérimentés.",
    },
    {
        name : "comite-de-pilotage",
        title : "Comité de pilotage",
        teamMembers : [
            {
                name : "Benny NKONGA",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            },
            {
                name : "Prince BAKENGA",
                location : "Congo/Kinshasa",
                email : "prince.bakenga@blth.tech",
                phone : "+243815490726",
                facebook : "princebak",
                linkedin : "princebakenga"
            },
            {
                name : "Murdoch KANGUDIE",
                location : "Congo/Kinshasa",
                email : "muroch@blth.tech",
                phone : "+243815490726",
                facebook : "murdoch",
                linkedin : "murdoch"
            },
            {
                name : "Benny",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            }
        ],
        description : "Nous vous présentons notre équippe des professionnels hautement qualifiés et expérimentés."
    },
    {
        name : "conseil-d-administration",
        title : "Conseil d'administration",
        teamMembers : [
            {
                name : "Benny",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            },
            {
                name : "Benny",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            },
            {
                name : "Benny",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            },
            {
                name : "Benny",
                location : "Congo/Kinshasa",
                email : "benny.nkonga@blth.tech",
                phone : "+243815490726",
                facebook : "bennyibmn",
                linkedin : "bennyinkonga"
            }
        ],
        description : "Nous vous présentons notre équippe des professionnels hautement qualifiés et expérimentés."
    }
]

export default function Gouvernance() {
    const {gouvernancePage} = useParams<string>()
    const [pageContent, setPageContent] = useState<GouvernancePage | undefined>(undefined)

    useEffect( () => {
        if(gouvernancePage){
            setPageContent( pages.find(page => page.name === gouvernancePage) )
        }
    }, [gouvernancePage])

    return(
        <div>
            <HeroBreadcrumb title={pageContent?.title!} heroImagePath={`custom/${pageContent?.name}.jpg`} heroImagePosition="bottom" />
                        
            <div className="content_info">
                <div className="borders world-bg" />
                <div className="title-vertical-line">
                    <h2>{pageContent?.title!}</h2>
                    <p className="lead">
                        {pageContent?.description}
                    </p>
                </div>
                <section className="paddings">
                    <div className="container">
                        <div className="row">
                            {
                                pageContent?.teamMembers.map((teamMember, index) => <TeamMemberItem key={`member-${index}`} teamMember={teamMember} />)
                            }
                        </div>
                        <Feature />
                    </div> 
                </section>  
            </div>
        </div>
    )
}