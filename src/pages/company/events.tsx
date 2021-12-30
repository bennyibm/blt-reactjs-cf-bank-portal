import React from "react";
import { Link } from "react-router-dom";
import { HeroBreadcrumb } from "../../component";

export default function Events(){
    return(
        <>
            <HeroBreadcrumb title="Nos evenements" />
            <div className="content_info">
                <div className="paddings">
                    {/* events Container*/}  
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                            <div className="title-subtitle padding-bottom-mini">
                                <h5>Keep informed and updated on all news related to your bank.</h5>
                                <h3>Upcoming COOPBANK Events.</h3>
                            </div>
                            </div>
                            {/* Item event*/} 
                            <div className="col-md-12">
                            <div className="item-event">
                                <div className="event-icon">
                                <i className="fa fa-calendar-o" />
                                <span className="date-number">08</span>
                                <span className="date-month">Jun</span>
                                </div>
                                <div className="event-info">
                                <h4><Link to="#">Congress opening CoopBank</Link></h4>
                                <h5>June 08,2015</h5>
                                <span>MIAMI, FLORIDA</span>
                                </div>
                            </div>
                            </div>
                            {/* End Item event*/} 
                            {/* Item event*/} 
                            <div className="col-md-12">
                            <div className="item-event">
                                <div className="event-icon">
                                <i className="fa fa-calendar-o" />
                                <span className="date-number">08</span>
                                <span className="date-month">Jun</span>
                                </div>
                                <div className="event-info">
                                <h4><Link to="#">Congress opening CoopBank</Link></h4>
                                <h5>June 08,2015</h5>
                                <span>MIAMI, FLORIDA</span>
                                </div>
                            </div>
                            </div>
                            {/* End Item event*/} 
                            {/* Item event*/} 
                            <div className="col-md-12">
                            <div className="item-event">
                                <div className="event-icon">
                                <i className="fa fa-calendar-o" />
                                <span className="date-number">08</span>
                                <span className="date-month">Jun</span>
                                </div>
                                <div className="event-info">
                                <h4><Link to="#">Congress opening CoopBank</Link></h4>
                                <h5>June 08,2015</h5>
                                <span>MIAMI, FLORIDA</span>
                                </div>
                            </div>
                            </div>
                            {/* End Item event*/} 
                            {/* Item event*/} 
                            <div className="col-md-12">
                            <div className="item-event">
                                <div className="event-icon">
                                <i className="fa fa-calendar-o" />
                                <span className="date-number">08</span>
                                <span className="date-month">Jun</span>
                                </div>
                                <div className="event-info">
                                <h4><Link to="#">Congress opening CoopBank</Link></h4>
                                <h5>June 08,2015</h5>
                                <span>MIAMI, FLORIDA</span>
                                </div>
                            </div>
                            </div>
                            {/* End Item event*/}
                            {/* Pagination*/}
                            <div className="col-md-12">
                            <ul className="pagination">
                                <li><Link to="#">«</Link></li>
                                <li className="active"><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li><Link to="#">5</Link></li>
                                <li><Link to="#">»</Link></li>
                            </ul> 
                            </div>
                            {/* End Pagination*/}
                        </div> 
                        </div>
                        {/* Sidebars*/}
                        <div className="col-md-4">
                        {/* Sidebar */}
                        <aside className="widget">
                            <h4>Widget Search</h4>
                            <form action="#">
                            <div className="input-group">
                                <span className="input-group-addon">
                                <i className="fa fa-envelope" />
                                </span>
                                <input className="form-control" placeholder="Search" name="search" type="text" required={true} />
                                <span className="input-group-addon btn-search">
                                <input defaultValue="Search" type="submit" />
                                </span>
                            </div>
                            </form>
                        </aside>
                        {/* End Sidebar*/}
                        {/* Widget Text */}
                        <aside className="widget">
                            <h4>Widget Text</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                        </aside>
                        {/* End Widget Text */}
                        {/* Widget List */}
                        <aside className="widget">
                            <h4>Widget List</h4>
                            <ul className="list-styles">
                            <li><i className="fa fa-check" /> <Link to="#">World Travel</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">First Class Flights</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">5 Star Accommodations</Link></li>
                            <li><i className="fa fa-check" /> <Link to="#">Inclusive Packages</Link></li>
                            </ul>
                        </aside>
                        {/* End Widget List */}
                        {/* Widget Video */}
                        <aside className="widget">
                            <h4>Widget Video</h4>
                            <iframe src="https://www.youtube.com/embed/wJF5NXygL4k" title="video"/>
                        </aside>
                        {/* End Widget Video */}
                        </div>
                        {/* End  Sidebars*/}
                    </div>
                    </div>
                    {/* End events Container*/} 
                </div>
            </div>

        </>
    )
}

