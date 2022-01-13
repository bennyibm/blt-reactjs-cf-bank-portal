import React from "react";
import { Link } from "react-router-dom";
import { BlogSection } from "../component";

type SlideItemProps = {
    image? : string,
    principalTitle? : string,
    subTitle? : string,
    description? : string,

}
function SlideItem({image = "custom/assembly.png", principalTitle = "ARE YOU READY?", subTitle = "YOURS SUCCESFULLS ARE OURS", description = "Check Coopbank included multiple features"} : SlideItemProps) {
    return(
        <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
            {/* MAIN IMAGE */}
            <img src={`/img/${image}`} alt="fullslide1" data-bgfit="cover" data-bgposition="top center" data-bgrepeat="no-repeat" />
            {/* LAYERS */}
            {/* LAYER NR. 1 */}
            <div className="tp-caption medium_text lft stl" data-x="center" data-hoffset data-y="top" data-voffset={160} data-speed={300} data-start={800} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {subTitle}
            </div>
            {/* LAYER NR. 2 */}
            <div className="tp-caption large_bold_white sft stb" data-x="center" data-hoffset data-y="top" data-voffset={190} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {principalTitle}
            </div>
            {/* LAYER NR. 3 */}
            <div className="tp-caption small_light_white sfb stb" data-x="center" data-hoffset data-y="top" data-voffset={260} data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">
                {description}
            </div>
            {/* LAYER NR. 3 */}
            <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={-100} data-y="center" data-voffset={75} data-speed={300} data-start={1400} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                <Link to="#" className="btn btn-primary"><i className="fa fa-graduation-cap" />View More</Link>
            </div>
            {/* END LAYER NR. 3 */}
            {/* LAYER NR. 3 */}
            <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={100} data-y="center" data-voffset={75} data-speed={300} data-start={1600} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                <Link to="#" className="btn btn-primary"><i className="fa fa-heart" />View More</Link>
            </div>
            {/* END LAYER NR. 3 */}
        </li>
    )
}
export default function Home(){

    const slides = [
        {
            image : "custom/black-business-man.jpg"
        },
        {
            image : "custom/man-woman-business.jpg"
        }
]
    return(
        <>
            <div className="tp-banner-container">
                <div className="tp-banner">
                {/* SLIDES CONTENT*/}
                <ul> 
                    {slides.map( slide => <SlideItem image={slide.image} /> )}
                </ul> 
                {/* END SLIDES  */} 
                <div className="tp-bannertimer" />  
                </div>
            </div>       
            {/* End Slide Section*/}
            {/* Info Content - Boxes Services*/}
            <div className="content_info">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                <h2><span>Services</span> Options</h2>
                <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                </div>
                {/* End title-vertical-line*/}
                <div className="paddings">
                {/* Container Area - Boxes Services */}
                <div className="container">
                    {/* boxes-services */}
                    <div className="row boxes-services">
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>Loan <br />Request</h4>
                        <span>Helping to fulfill your dreams.</span>
                        <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>I want to save or invest</h4>
                        <span>Advise your decisions</span>
                        <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>Request items online</h4>
                        <span>We offer you tools</span>
                        <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>Online Transactions</h4>
                        <span>Secure Information</span>
                        <Link to="#"><i className="fa fa-plus-circle" /> View more</Link>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    </div>
                    {/* End boxes-services */}
                </div>
                {/* End Container Area - Boxes Services */}
                </div>
            </div>
            {/* End Info Content - Boxes Services*/}
            {/* Info Content  - parallax - services Big Title */}
            <div className="parallax-window" data-parallax="scroll" data-image-src="/img/custom/world-business.jpg">
                {/* Content Parallax*/}
                <section className="opacy_bg_02 paddings">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="title-big padding-top">
                                <h2>BEST SERVICES FOR BEST CLIENTS</h2>
                                </div>
                                <Link to="#" className="btn btn-primary">View More</Link>
                            </div>
                            <div className="col-md-7">
                                {/* boxes-services-02*/}
                                <div className="row">
                                <div className="col-md-6">
                                    {/* Item boxed-service-02*/}
                                    <div className="item-boxed-service-02">
                                    <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                    <h4>BILL PAY</h4>
                                    <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                                    </div>
                                    {/* End Item boxed-service-02*/}
                                </div>
                                <div className="col-md-6">
                                    {/* Item boxed-service-02*/}
                                    <div className="item-boxed-service-02">
                                    <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                    <h4>BILL PAY</h4>
                                    <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                                    </div>
                                    {/* End Item boxed-service-02*/}
                                </div>
                                </div>
                                <div className="row margin-top-mini">
                                <div className="col-md-4">
                                    {/* Item boxed-service-02*/}
                                    <div className="item-boxed-service-02">
                                    <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                    <h4>BILL PAY</h4>
                                    <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                                    </div>
                                    {/* End Item boxed-service-02*/}
                                </div>
                                <div className="col-md-4">
                                    {/* Item boxed-service-02*/}
                                    <div className="item-boxed-service-02">
                                    <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                    <h4>BILL PAY</h4>
                                    <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                                    </div>
                                    {/* End Item boxed-service-02*/}
                                </div>
                                <div className="col-md-4">
                                    {/* Item boxed-service-02*/}
                                    <div className="item-boxed-service-02">
                                    <h5>THE SECURE <br /> WAY TO PAY:</h5>
                                    <h4>BILL PAY</h4>
                                    <p>YOU RE PROTECTED WHEN YOU USE ONLINE BILL PAY</p>
                                    </div>
                                    {/* End Item boxed-service-02*/}
                                </div>
                                </div>
                                {/* End boxes-services-02*/}
                            </div>
                        </div>
                    </div> 
                </section>  
                {/* End Content Parallax*/} 
            </div>
            {/* End Info Content  - parallax - services Big Title */}
            {/* End Info Content Blog Post*/}
            <BlogSection />
            {/* End Info Content Blog Post*/}
            {/* Info Content Process*/}
            <div className="content_info">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                <h2><span>Process</span> Services</h2>
                <p className="lead">We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                </div>
                {/* End title-vertical-line*/}
                {/* Info Resalt=""*/}
                <div className="paddings">
                {/* Container Area - services-process */}
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        {/* services-process */}
                        <div className="services-process">
                        {/* item-service-process */}
                        <div className="item-service-process color-bg-1">
                            <div className="head-service-process">
                            <i className="fa fa-cubes" />
                            <h3>INSURANCES</h3>
                            </div>
                            <div className="divisor-service-process">
                            <span className="circle-top">1</span>
                            <span className="circle" />
                            </div>
                            <div className="info-service-process">
                            <h3>Our Insurances</h3>
                            <p>Your peace of mind is priceless, we offer a broad portfolio of solutions to ensure what you love most.</p>
                            </div>
                        </div>
                        {/* End item-service-process */}
                        {/* item-service-process */}
                        <div className="item-service-process color-bg-2">
                            <div className="head-service-process">
                            <i className="fa fa-diamond" />
                            <h3>BENEFITS</h3>
                            </div>
                            <div className="divisor-service-process">
                            <span className="circle-top">2</span>
                            <span className="circle" />
                            </div>
                            <div className="info-service-process">
                            <h3>Our Benefits</h3>
                            <p>We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                            </div>
                        </div>
                        {/* End item-service-process */}
                        {/* item-service-process */}
                        <div className="item-service-process color-bg-3">
                            <div className="head-service-process">
                            <i className="fa fa-bicycle" />
                            <h3>SOCIAL</h3>
                            </div>
                            <div className="divisor-service-process">
                            <span className="circle-top">3</span>
                            <span className="circle" />
                            </div>
                            <div className="info-service-process">
                            <h3>Social Programs</h3>
                            <p>Our programs with social sense, everyday comprehensively improve the quality of life of our members.</p>
                            </div>
                        </div>
                        {/* End item-service-process */}
                        {/* item-service-process */}
                        <div className="item-service-process color-bg-4">
                            <div className="head-service-process">
                            <i className="fa fa-hotel" />
                            <h3>RESORTS</h3>
                            </div>
                            <div className="divisor-service-process">
                            <span className="circle-top">4</span>
                            <span className="circle" />
                            </div>
                            <div className="info-service-process">
                            <h3>Resorts Options</h3>
                            <p>We offer the best alt=""ernatives for recreation, relaxation and adventure to share with family and friends.</p>
                            </div>
                        </div>
                        {/* End item-service-process */}
                        </div>
                        {/* End services-process*/}
                    </div>
                    </div>
                </div>
                {/* End Container Area - services-process */}
                </div>
                {/* End Info Resalt=""*/}
            </div>
            {/* End Info Content Process*/}
        </>

    )
}

