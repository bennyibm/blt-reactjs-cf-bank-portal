import React, { FunctionComponent } from "react";
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
    email : "benny.nkonga@businesslighthouse.tech",
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
                        <Link to={`mailto:${teamMember.email}`}>{teamMember.email}</Link>
                    </li>
                    <li>
                        <i className="fa fa-headphones" />
                         <Link to={`tel:${teamMember.phone}`}>{teamMember.phone}</Link>
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

const teamMembersDummy = {
    "Conseil d'administration" : [
        {
            name : "Emmanuel LOMAMI",
            location : "UK/London",
            email : "emmanuel.lomami@dumacash.com",
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
            email : "emmanuel.lomami@dumacash.com",
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
    "Comité de pilotage" : [{
        name : "Benny NKONGA",
        location : "Congo/Kinshasa",
        email : "benny.nkonga@businesslighthouse.tech",
        phone : "+243815490726",
        facebook : "bennyibmn",
        linkedin : "bennyinkonga"
    },
    {
        name : "Prince BAKENGA",
        location : "Congo/Kinshasa",
        email : "prince.bakenga@businesslighthouse.tech",
        phone : "+243815490726",
        facebook : "princebak",
        linkedin : "princebakenga"
    },
    {
        name : "Murdoch KANGUDIE",
        location : "Congo/Kinshasa",
        email : "muroch@businesslighthouse.tech",
        phone : "+243815490726",
        facebook : "murdoch",
        linkedin : "murdoch"
    },
    {
        name : "Benny",
        location : "Congo/Kinshasa",
        email : "benny.nkonga@businesslighthouse.tech",
        phone : "+243815490726",
        facebook : "bennyibmn",
        linkedin : "bennyinkonga"
    }],
    "Comité de direction" : [
        {
            name : "Benny",
            location : "Congo/Kinshasa",
            email : "benny.nkonga@businesslighthouse.tech",
            phone : "+243815490726",
            facebook : "bennyibmn",
            linkedin : "bennyinkonga"
        },
        {
            name : "Benny",
            location : "Congo/Kinshasa",
            email : "benny.nkonga@businesslighthouse.tech",
            phone : "+243815490726",
            facebook : "bennyibmn",
            linkedin : "bennyinkonga"
        },
        {
            name : "Benny",
            location : "Congo/Kinshasa",
            email : "benny.nkonga@businesslighthouse.tech",
            phone : "+243815490726",
            facebook : "bennyibmn",
            linkedin : "bennyinkonga"
        },
        {
            name : "Benny",
            location : "Congo/Kinshasa",
            email : "benny.nkonga@businesslighthouse.tech",
            phone : "+243815490726",
            facebook : "bennyibmn",
            linkedin : "bennyinkonga"
        }
    ],
}

const renderGouvernancePageMembers = (gouvernancePage : string) => {
    let teamMembers

    switch (gouvernancePage) {
        case "Conseil d'administration":
            teamMembers = teamMembersDummy["Conseil d'administration"]
            break;
        case "Comité de pilotage" :
            teamMembers = teamMembersDummy["Comité de pilotage"]
            break;
        case "Comité de direction" :
            teamMembers = teamMembersDummy["Comité de direction"]
            break;

        default:
            break;
    }

    return teamMembers?.map((teamMember, index) => <TeamMemberItem key={`member-${index}`} teamMember={teamMember} />)
}
export default function Gouvernance() {
    const {gouvernancePage} = useParams<string>()

    return(
        <div>
            <HeroBreadcrumb title={gouvernancePage!} heroImagePath="custom/why-choose-us.jpg" />
                        
            {/*Info Content Team Members*/}
            <div className="content_info">
                {/* Parallax Background */}
                <div className="borders world-bg" />
                {/* Parallax Background */}
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                    <h2>{gouvernancePage}</h2>
                    <p className="lead">
                        Nous vous présentons notre équippe des professionnels hautement qualifiés et expérimentés.
                    </p>
                </div>
                {/* End title-vertical-line*/}
                {/* Content Parallax*/}
                <section className="paddings">
                <div className="container">
                    <div className="row">
                        {gouvernancePage && renderGouvernancePageMembers(gouvernancePage)}
                    </div>
                    <Feature />
                </div> 
                </section>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content Team Members*/}
        </div>
    )
}