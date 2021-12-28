import React, {FunctionComponent} from "react";
import ContatDetails from "../component/contat-details";

const Home : FunctionComponent = () =>{
    return(
        <>
            <div className="tp-banner-container">
                <div className="tp-banner">
                {/* SLIDES CONTENT*/}
                <ul> 
                    {/* SLIDE  */}
                    <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
                    {/* MAIN IMAGE */}
                    <img src="img/slide/slide-04.jpg" alt="fullslide1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                    {/* LAYERS */}
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption medium_text lft stl" data-x="center" data-hoffset data-y="top" data-voffset={160} data-speed={300} data-start={800} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">YOURS SUCCESFULLS ARE OURS
                    </div>
                    {/* LAYER NR. 2 */}
                    <div className="tp-caption large_bold_white sft stb" data-x="center" data-hoffset data-y="top" data-voffset={190} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">ARE YOU READY?
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption small_light_white sfb stb" data-x="center" data-hoffset data-y="top" data-voffset={260} data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">Check Coopbank included multiple features
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={-100} data-y="center" data-voffset={75} data-speed={300} data-start={1400} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                        <a href="#" className="btn btn-primary"><i className="fa fa-graduation-cap" />View More</a>
                    </div>
                    {/* END LAYER NR. 3 */}
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption lfb tp-resizeme" data-x="center" data-hoffset={100} data-y="center" data-voffset={75} data-speed={300} data-start={1600} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                        <a href="#" className="btn btn-primary"><i className="fa fa-heart" />View More</a>
                    </div>
                    {/* END LAYER NR. 3 */}
                    </li>
                    {/* SLIDE  */}
                    <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
                    {/* MAIN IMAGE */}
                    <img src="img/slide/slide-03.jpg" alt="fullslide1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                    {/* LAYERS */}
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption medium_text other_text lft stl" data-x="left" data-hoffset={15} data-y="top" data-voffset={170} data-speed={300} data-start={800} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">DO YOU NEED A NEW
                    </div>
                    {/* LAYER NR. 2 */}
                    <div className="tp-caption large_bold_white sft stb" data-x="left" data-hoffset={15} data-y="top" data-voffset={190} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">LINE OF CREDIT?
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption small_light_white sfb stb" data-x="left" data-hoffset={15} data-y="top" data-voffset={260} data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">Check Coopbank included multiple features
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption lfb tp-resizeme" data-x="left" data-hoffset={15} data-y="center" data-voffset={60} data-speed={300} data-start={1400} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                        <a href="#" className="btn btn-primary"><i className="fa fa-graduation-cap" />View More</a>
                    </div>
                    {/* END LAYER NR. 3 */}
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption lfb tp-resizeme" data-x="left" data-hoffset={240} data-y="center" data-voffset={60} data-speed={300} data-start={1600} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                        <a href="#" className="btn btn-primary"><i className="fa fa-heart" />Purchase</a>
                    </div>
                    {/* END LAYER NR. 3 */}
                    </li>
                    {/* SLIDE 01*/}
                    <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
                    {/* MAIN IMAGE */}
                    <img src="img/slide/slide-01.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption medium_text lft stl" data-x="right" data-hoffset={-15} data-y="top" data-voffset={170} data-speed={300} data-start={800} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">DO YOU NEED A NEW
                    </div>
                    {/* LAYER NR. 2 */}
                    <div className="tp-caption large_bold_white sft stb" data-x="right" data-hoffset={-15} data-y="top" data-voffset={190} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">LINE OF CREDIT?
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption small_light_white sfb stb" data-x="right" data-hoffset={-15} data-y="top" data-voffset={260} data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">Check Coopbank included multiple features
                    </div>
                    </li>
                    {/* END SLIDE 01*/}
                    {/* SLIDE  */}
                    <li data-transition="zoomout" data-slotamount={7} data-masterspeed={1500}>
                    {/* MAIN IMAGE */}
                    <img src="img/slide/slide-02.jpg" alt="fullslide1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                    {/* LAYERS */}
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption large_bold_white sft stb" data-x="center" data-hoffset data-y="center" data-voffset={-60} data-speed={300} data-start={1000} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">HELP YOU MEET YOUR DREAMS
                    </div>
                    {/* LAYER NR. 2 */}
                    <div className="tp-caption small_light_white other_light sfb stb" data-x="center" data-hoffset data-y="center" data-voffset data-speed={500} data-start={1200} data-splitin="lines" data-splitout="none" data-easing="easeOutExpo">Check CoopBank included features and options
                    </div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption lfb tp-resizeme" data-x="center" data-y="center" data-voffset={70} data-speed={300} data-start={1400} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300}>
                        <a href="#" className="btn btn-primary"><i className="fa fa-graduation-cap" />View More</a>
                    </div>
                    {/* END LAYER NR. 3 */}
                    </li>
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
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>I want to save or invest</h4>
                        <span>Advise your decisions</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>Request items online</h4>
                        <span>We offer you tools</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                    </div>
                    {/* End item-boxe-services */}
                    {/* item-boxe-services */}
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="item-boxed-service">
                        <h4>Online Transactions</h4>
                        <span>Secure Information</span>
                        <a href="#"><i className="fa fa-plus-circle" /> View more</a>
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
            <div className="parallax-window" data-parallax="scroll" data-image-src="img/parallax-img/parallax-02.jpg">
                {/* Content Parallax*/}
                <section className="opacy_bg_02 paddings">
                <div className="container">
                    <div className="row">
                    <div className="col-md-5">
                        <div className="title-big padding-top">
                        <h2>BEST SERVICES FOR BEST CLIENTS</h2>
                        </div>
                        <a href="#" className="btn btn-primary">View More</a>
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
            <div className="content_info">
                {/* Info Resalt=""*/}
                <div className="content_resalt padding-bottom borders">
                {/* title-vertical-line*/}
                <div className="title-vertical-line">
                    <h2><span>Last</span> News</h2>
                    <p className="lead">Keep informed and updated on all news related to your bank.</p>
                </div>
                {/* End title-vertical-line*/}
                {/* Container Blog Post */}
                <div className="container">
                    {/*Blog Post Items*/}
                    <div className="row padding-top">
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                        {/*Head Blog Post*/}
                        <div className="head-item-blog-post">
                            <i className="fa fa-calculator" />
                            <h3>Protection With you</h3>
                        </div>
                        {/*End Head Blog Post*/}  
                        {/*Img Blog Post*/}
                        <div className="img-item-blog-post">
                            <img src="img/blog-img/thumbs/1.jpg" alt="" />
                            <div className="post-meta">
                            <ul>
                                <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
                                </li>
                                <li>
                                <i className="fa fa-clock-o" />
                                <span>April 23, 2015</span>
                                </li>
                                <li>
                                <i className="fa fa-eye" />
                                <span>234 Views</span>
                                </li>
                            </ul>                      
                            </div>
                        </div>
                        {/*End Img Blog Post*/}  
                        {/*Ingo Blog Post*/}
                        <div className="info-item-blog-post">
                            <p>Find all the support and information they need to make all decisions about saving for your future.</p>
                            <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                        {/*Head Blog Post*/}
                        <div className="head-item-blog-post">
                            <i className="fa fa-database" />
                            <h3>For your future</h3>
                        </div>
                        {/*End Head Blog Post*/}  
                        {/*Img Blog Post*/}
                        <div className="img-item-blog-post">
                            <img src="img/blog-img/thumbs/2.jpg" alt="" />
                            <div className="post-meta">
                            <ul>
                                <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
                                </li>
                                <li>
                                <i className="fa fa-clock-o" />
                                <span>April 23, 2015</span>
                                </li>
                                <li>
                                <i className="fa fa-eye" />
                                <span>234 Views</span>
                                </li>
                            </ul>                      
                            </div>
                        </div>
                        {/*End Img Blog Post*/}  
                        {/*Ingo Blog Post*/}
                        <div className="info-item-blog-post">
                            <p>Meet here all our range of products and services, rules of our products and everything related to your savings in pension.</p>
                            <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                    {/*Col Item Blog Post*/}
                    <div className="col-md-4">
                        {/*Item Blog Post*/}
                        <div className="item-blog-post">
                        {/*Head Blog Post*/}
                        <div className="head-item-blog-post">
                            <i className="fa fa-cubes" />
                            <h3>Zone Saver</h3>
                        </div>
                        {/*End Head Blog Post*/}  
                        {/*Img Blog Post*/}
                        <div className="img-item-blog-post">
                            <img src="img/blog-img/thumbs/3.jpg" alt="" />
                            <div className="post-meta">
                            <ul>
                                <li>
                                <i className="fa fa-user" />
                                <a href="#">Iwthemes</a>
                                </li>
                                <li>
                                <i className="fa fa-clock-o" />
                                <span>April 23, 2015</span>
                                </li>
                                <li>
                                <i className="fa fa-eye" />
                                <span>234 Views</span>
                                </li>
                            </ul>                      
                            </div>
                        </div>
                        {/*End Img Blog Post*/}  
                        {/*Ingo Blog Post*/}
                        <div className="info-item-blog-post">
                            <p>Accompany relevant share you mean, renewed and information of interest to learn to save you and your projects come true.</p>
                            <a href="#"><i className="fa fa-plus-circle" /> View more</a>
                        </div>
                        {/*End Ingo Blog Post*/}  
                        </div>
                        {/*End Item Blog Post*/}  
                    </div>
                    {/*End Col Item Blog Post*/}
                    </div>
                    {/*End Blog Post Items*/}
                </div>
                {/* End Container Blog Post */}
                </div>
                {/* End Info Resalt=""*/}
            </div>
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

export default Home;