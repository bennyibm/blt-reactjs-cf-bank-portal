import React from "react";
import ContatDetails from "../../component/contat-details";
import HeroBreadcrumb from "../../component/hero-breadcrumb";

export default function ContactUs(){
    return(
        <div>
            <HeroBreadcrumb title="Apropos de CF BANK" heroImagePath="/custom/contact.jpg" />

            {/* Info Content - Boxes Services*/}
            <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                {/* Container Area - Boxes Services */}
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <h3>Laissez nous un message</h3>
                        {/* <p className="lead color-skin">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae.
                        </p>
                        <p> 
                            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                        </p> */}
                        <form id="form-contact" className="form-theme" action="php/send-mail.php">
                        <input type="text" placeholder="Name" name="Name" required />
                        <input type="email" placeholder="Email" name="Email" required />
                        <input type="number" placeholder="Phone" name="Phone" required />
                        <textarea placeholder="Your Message" name="message" required defaultValue={""} />
                        <input type="submit" name="Submit" defaultValue="Send Message" className="btn btn-primary" />
                        </form> 
                        <div id="result" />  
                    </div>
                    {/* Sidebars */}
                    <div className="col-md-4">
                        {/* contact-list*/}
                        <div className="contact-list-container">
                            <ContatDetails />
                        </div>
                        {/* End contact-list*/}
                    </div>
                    {/* End Sidebars */}
                    </div>
                </div>
                {/* End Container Area - Boxes Services */}
                </div>
            </div>
            {/* End Info Content - Boxes Services*/}
            
        </div>

    )
}

