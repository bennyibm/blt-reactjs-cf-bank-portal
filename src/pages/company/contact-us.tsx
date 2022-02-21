import React, { useCallback, useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Feature } from "../../component";
import ContatDetails from "../../component/contat-details";
import HeroBreadcrumb from "../../component/hero-breadcrumb";
import CustomSlider, { SlideItemProps } from "../../component/custom-slider";

export default function ContactUs(){
    
    const [sending, setSending] = useState<boolean>(false)
    const [buttonText, setButtonText] = useState<string>("Envoyez")
    const [isError, setIsError] = useState<boolean>(false)
    const [showResult, setShowResult] = useState<boolean>(false)
    const [resultMessage, setResultMessage] = useState<string>()


    const slides : SlideItemProps[] = [
        {
            image : "/img/custom/contact.jpg",
            imagePosition : "top",
            // subTitle : "Votre succès est notre",
            principalTitle : "Contatez-nous",
            description : "Entrez en contact facilement avec un des nos experts"
        },
        
    ]

    useEffect( () => setButtonText( sending ? "Envoi du message" : "Envoyez" ), [sending])
    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = useCallback( e => {
        e.preventDefault()

        setShowResult(false)
        setSending(true)
        setButtonText("envoie du message")
        setTimeout( () => {
            emailjs.sendForm('service_8abbm8o', 'template_0yar6ji', form.current!, 'user_EJS5qNQAdmD8XBTUpcRRm')
            .then(() => {
                    setIsError(false)
                    setResultMessage("Merci de nous contater! Votre message nous ai parvenu")
                    form.current?.reset()
                }, () => {
                    setResultMessage("Désolé, nous n'avons pas pu envoyer votre message!")
                    setIsError(true)
                }
            )
            .finally( () => {
                setSending(false)
                setShowResult(true)
            })

        }, 3000)
        
        
    }, [] )

    return(
        <div>
            <HeroBreadcrumb title="Contactez-nous" heroImagePath="custom/contact.jpg" slides={slides}/>

            <div className="content_info">
                <div className="padding-top padding-bottom-mini">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>Laissez nous un message</h3>
                                <form ref={form} onSubmit={sendEmail} id="form-contact" className="form-theme">
                                    <input type="text" placeholder="Nom" name="name" required />
                                    <input type="email" placeholder="Email" name="email" required />
                                    <input type="number" placeholder="Téléphone" name="phone" required />
                                    <textarea placeholder="Message" name="message" required defaultValue={""} />
                                    
                                    
                                    <div style={{display: "flex"}}>
                                        <div>
                                            <button type="submit" className={`btn flex btn-primary ${sending && "disabled"}`} style={{display : "flex",}}>
                                                {buttonText}
                                                {sending && <div className="loader" style={{marginLeft : 5}} /> }
                                            </button>
                                        </div>
                                        
                                        {
                                            showResult && 
                                            <div className={`alert alert-${isError ? "danger" : "success"}`} style={{marginLeft : 10}}>
                                                {resultMessage}
                                            </div>
                                        }
                                    </div>
                                    

                                </form> 
                                {/* <div id="result"></div>   */}
                            </div>
                            <div className="col-md-4">
                                <div className="contact-list-container">
                                    <ContatDetails />
                                </div>
                            </div>
                        </div>
                        <Feature />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

