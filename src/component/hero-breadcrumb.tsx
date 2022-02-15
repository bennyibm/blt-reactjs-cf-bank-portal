import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

type HeroBreadcrumbProps = {
    title : string, 
    description? : string
    heroImagePath? : string,
    heroImagePosition? : "top" | "bottom" | "left" | "right" | "center" 
}


type SlideItemProps = {
    image? : string,
    imagePosition? : "top" | "bottom" | "left" |  "right",
    principalTitle? : string,
    subTitle? : string,
    description? : string,

}

function Slider(){
    const slides : SlideItemProps[] = [
        {
            image : "/img/custom/black-business-man.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une Gamme ses services avec notre banque"
        },
        {
            image : "/img/custom/man-woman-business.jpg",
            imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une Gamme ses services avec notre banque"
        },
        {
            image : "/img/custom/black-circle.jpg",
            // imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une Gamme ses services avec notre banque"
        },
        {
            image : "/img/custom/brainstorming.jpg",
            // imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une Gamme ses services avec notre banque"
        },
        {
            image : "/img/custom/business.jpg",
            // imagePosition : "top",
            subTitle : "Votre succès est notre",
            principalTitle : "Es-tu prêt?",
            description : "Trouvez une Gamme ses services avec notre banque"
        },
    ]

    const slideProgression = useRef<HTMLDivElement | null>(null)
    const slideProgressionValue = useRef<string>()

    // const slideProgressionTimer  = useRef<NodeJS.Timer>()
    // const updateSlideProression= useCallback( () => {
    //     slideProgressionValue.current = slideProgression.current!.style.width.substring(0, slideProgression.current!.style.width.length - 1);
        
    //     slideProgressionValue.current = (parseFloat(slideProgressionValue.current) + 0.5).toString() ;
    //     slideProgression.current!.style.width = slideProgressionValue.current.concat("%");
    //     // console.log("current progression : ", slideProgression.current!.style.width);
    // }, [])

    const sliderBg = useRef<HTMLImageElement | null> (null);
    const sliderTimer = useRef<NodeJS.Timer>();
    const activeSlideIndex = useRef<Number>(1);
    const slidesInDom = useRef<NodeListOf<HTMLDivElement> | null> (null)
    
    const renderSlide = useCallback( (slide : SlideItemProps, index) =>{
        return(
            
            <div className="slide" key={`slide-${index}`}>
                <div className="content">
                    <span>{slide.subTitle}</span>
                    <p className="principal-title">{slide.principalTitle}</p>
                    <p>{slide.description}</p>
                </div>
                <div className={`image ${slide.imagePosition}`}>
                    <img src={slide.image} alt="" />
                </div>
            </div>
        )
    }, [])
    const swap = useCallback( (direction : "left" | "right" = "right") =>{
        sliderBg.current!.src = slidesInDom.current?.item(activeSlideIndex.current.valueOf()).querySelector(".image img")?.getAttribute("src")! ;

        slidesInDom.current?.item(activeSlideIndex.current.valueOf()).classList.remove("active");
        const lenght = slidesInDom.current?.length ? slidesInDom.current?.length : 1;

        if(direction === "left"){
            activeSlideIndex.current = (activeSlideIndex.current.valueOf() - 1 + lenght) % lenght
        }else{
            activeSlideIndex.current = (activeSlideIndex.current.valueOf() +1) % lenght
        }

        const activeSlide = slidesInDom.current?.item(activeSlideIndex.current.valueOf());
        activeSlide?.classList.add("active");
        
        if(sliderTimer.current){
            clearInterval(sliderTimer.current)
        }
        
        sliderTimer.current = setInterval( () => swap("right"), 6000)
        
    }, [])

    
    useEffect( () =>{
        slidesInDom.current = document.querySelectorAll(".slides-container .slide");

        swap("right")
        
    }, [swap])

    return(
        <div className="slides-container">
            <img src="" alt="" className="bg" ref={sliderBg} />
            {slides.map((slide, index) => renderSlide(slide, index))}
            {/* controls */}
            <div className="control fa fa-angle-left" id="prev" onClick={ e => swap("left")} />
            <div className="control fa fa-angle-right" id="next" onClick={e => swap("right")} />
        </div>
    )
}
export default function HeroBreadcrumb({title, description, heroImagePath = "custom/brainstorming-2.jpg", heroImagePosition = "center"} : HeroBreadcrumbProps){
    return(
        <div className="content_info">
            {/* Info Section title*/}
            {/*
                if we need image comeback
                style={{backgroundImage : `url(/img/${heroImagePath})`, backgroundPosition : heroImagePosition }} 
             */
            }
            {/* <div  className="section-title-01 breadcrumb-hero" style={{backgroundImage : `url(/img/${heroImagePath})`, backgroundPosition : heroImagePosition }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>{title}</h3>
                            <h5>Capital Financial BANK</h5>
                            <p style={{color : "white"}}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* End Info Section Title*/}

            <Slider />
            {/* breadcrumbs*/}
            <div className="breadcrumbs breadcrumbs-sections">
            <ul>
                <li className="breadcrumbs-home">
                    <Link to="/" title="Back To Home">
                        <i className="fa fa-home" />
                    </Link>
                </li>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>/</li>
                <li>{title}</li>
            </ul>
            </div>
            {/* End breadcrumbs*/}
        </div>
    )
}
