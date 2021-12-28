import React, {FunctionComponent} from "react";

const Gallery: FunctionComponent = () =>{
    return(
            <div>
            {/* Info Content - Section Title*/}
            <div className="content_info">
                {/* Info Section title*/}
                <div className="section-title-01 section-title-01-small">
                <div className="container">
                    <div className="row">
                    <div className="col-md-7">
                        <h3>Gallery.</h3>
                        <h5>Four COLUMNS</h5>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Info Section Title*/}
                {/* breadcrumbs*/}
                <div className="breadcrumbs breadcrumbs-sections">
                <ul>
                    <li className="breadcrumbs-home">
                    <a href="#" title="Back To Home">
                        <i className="fa fa-home" />
                    </a>
                    </li>
                    <li>
                    <a href="#">Company</a>
                    </li>
                    <li>
                    /
                    </li>
                    <li>
                    <a href="#">Gallery</a>
                    </li>
                    <li>
                    /
                    </li>
                    <li>
                    Four Columns
                    </li>
                </ul>
                </div>
                {/* End breadcrumbs*/}
            </div>
            {/* End Info Content - Section Title*/}
            {/* Info Content - Gallery Items*/}
            <div className="content_info">
                <div className="paddings">  
                <div className="container">
                    <div className="portfolioFilter">
                    <a href="#" data-filter="*" className="current">Show All</a>
                    <a href="#education" data-filter=".education">Education</a>
                    <a href="#events" data-filter=".events">Events</a>
                    <a href="#donations" data-filter=".donations">Donations</a>
                    <a href="#meetings" data-filter=".meetings">Meetings</a>
                    </div>
                    <div className="portfolioContainer">
                    <div className="col-md-3 education">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery March, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/1.jpg" alt="Image" />                               
                            <a href="img/gallery/1.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>The establishment of our agency, with two professional insurance.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 events">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery June, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/2.jpg" alt="Image" />                               
                            <a href="img/gallery/2.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>Three new insurance agents in our team, 2.500 customers!</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 education">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery February, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/3.jpg" alt="Image" />                               
                            <a href="img/gallery/3.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>Moving to a new office in Boston. More than 5.000 customers.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 meetings">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery March, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/4.jpg" alt="Image" />                               
                            <a href="img/gallery/4.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>The establishment of our agency, with two professional insurance.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 donations">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery March, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/5.jpg" alt="Image" />                               
                            <a href="img/gallery/5.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>The establishment of our agency, with two insurance agents.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 meetings">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery March, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/6.jpg" alt="Image" />                               
                            <a href="img/gallery/6.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>The establishment of our agency, with two insurance agents.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    <div className="col-md-3 education">
                        {/* Item Work */}
                        <div className="item-gallery">
                        <div className="head-gallery">
                            <h4>Gallery February, 2015</h4>
                        </div>
                        <div className="hover">
                            <img src="img/gallery/7.jpg" alt="Image" />                               
                            <a href="img/gallery/7.jpg" rel="gallery_group" className="fancybox" title="Image"><div className="overlay" /></a>
                        </div>                                   
                        <div className="info-gallery">
                            <p>Moving to a new office in Boston. More than 5.000 customers.</p>
                            <i className="fa fa-picture-o" />
                        </div>  
                        </div>  
                        {/* Item Work */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Info Content - Gallery Items*/}
            </div>

    )
}

export default Gallery