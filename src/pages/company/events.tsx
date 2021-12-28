import React, {FunctionComponent} from "react";

const Events : FunctionComponent= () =>{
    return(
        <div>
            {/* Info Content - Section Title*/}
            <div className="content_info">
            {/* Info Section title*/}
            <div className="section-title-01 section-title-01-small">
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <h3>Events.</h3>
                    <h5>CF BANK LAST EVENTS</h5>
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
                    Events
                </li>
                </ul>
            </div>
            {/* End breadcrumbs*/}
            </div>
            {/* End Info Content - Section Title*/}
            {/* Info Content - Events Items*/}
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
                            <h3>Upcoming CF BANK Events.</h3>
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
                            <h4><a href="#">Congress opening CF BANK</a></h4>
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
                            <h4><a href="#">Congress opening CF BANK</a></h4>
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
                            <h4><a href="#">Congress opening CF BANK</a></h4>
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
                            <h4><a href="#">Congress opening CF BANK</a></h4>
                            <h5>June 08,2015</h5>
                            <span>MIAMI, FLORIDA</span>
                            </div>
                        </div>
                        </div>
                        {/* End Item event*/}
                        {/* Pagination*/}
                        <div className="col-md-12">
                        <ul className="pagination">
                            <li><a href="#">«</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">»</a></li>
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
                            <input className="form-control" placeholder="Search" name="search" type="text" required />
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
                        <li><i className="fa fa-check" /> <a href="#">World Travel</a></li>
                        <li><i className="fa fa-check" /> <a href="#">First Class Flights</a></li>
                        <li><i className="fa fa-check" /> <a href="#">5 Star Accommodations</a></li>
                        <li><i className="fa fa-check" /> <a href="#">Inclusive Packages</a></li>
                        </ul>
                    </aside>
                    {/* End Widget List */}
                    {/* Widget Video */}
                    <aside className="widget">
                        <h4>Widget Video</h4>
                        <iframe src="https://www.youtube.com/embed/wJF5NXygL4k" />
                    </aside>
                    {/* End Widget Video */}
                    </div>
                    {/* End  Sidebars*/}
                </div>
                </div>
                {/* End events Container*/} 
            </div>
            </div>
            {/* End Info Content - Events Items*/}
        </div>
    )
}

export default Events