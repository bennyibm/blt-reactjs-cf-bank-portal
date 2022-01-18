import React from "react";
import { Link } from "react-router-dom";
import HeroBreadcrumb from "../component/hero-breadcrumb";
import { FunctionComponent } from 'react';
import { Feature } from "../component";

type TeamMemberType={
    name : string,
    location : string,
    email : string,
    phone : string,
    facebook : string,
    linkedin : string,

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
                <a href="img/team/1.jpg" className="fancybox"><img src="img/team/1.jpg" alt="" /></a>
                <h4>Jeniffer</h4>
                <span className="country"><img src="img/country/london.png" alt="" /> {teamMember.location}</span>
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

const teamMembersDummy = [
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
]
export default function NotreEquippe() {

    return(
        <div>
            <HeroBreadcrumb title="Notre equippe" />
                        
            <div className="content_info">
                <div className="borders world-bg" />
                <div className="title-vertical-line">
                    <h2><span>Team</span> Members</h2>
                    <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                </div>
                <section className="paddings">
                <div className="container">
                    <div className="row">

                        <TeamMemberItem teamMember={teamMembersDummy[0]} />
                        <div className="col-md-3">
                            <div className="item-team">
                            <img src="img/team/2.jpg" alt="" />
                            <h4>Federick</h4>
                            <span className="country"><img src="img/country/au.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">fg@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                            <img src="img/team/2.jpg" alt="" />
                            <h4>Federick</h4>
                            <span className="country"><img src="img/country/au.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">fg@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                            <img src="img/team/3.jpg" alt="" />
                            <h4>Maria</h4>
                            <span className="country"><img src="img/country/us.png" alt="" /> London, UK</span>
                            <ul className="list-styles">
                                <li><i className="fa fa-envelope" /> <Link to="#">ms@iwthemes.com</Link></li>
                                <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                            </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* Item Team Member*/} 
                        <div className="col-md-3">
                            <div className="item-team">
                                <img src="img/team/4.jpg" alt="" />
                                <h4>John</h4>
                                <span className="country"><img src="img/country/london.png" alt="" /> London, UK</span>
                                <ul className="list-styles">
                                    <li><i className="fa fa-envelope" /> <Link to="#">jr@iwthemes.com</Link></li>
                                    <li><i className="fa fa-headphones" /> <Link to="#">+56 3456298</Link></li>
                                    <li><i className="fa fa-facebook" /> <Link to="#">@jeniffer</Link></li>
                                    <li><i className="fa fa-linkedin" /> <Link to="#">jenifer</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* End Item Team Member*/}  
                        {/* <div className="col-md-12 text-center margin-top">
                            <Link to="#" className="btn btn-primary">Get started for free</Link>
                        </div> */}
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