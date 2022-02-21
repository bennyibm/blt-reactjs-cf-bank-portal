import React, { useCallback, useEffect, useState, useRef } from 'react'
import styles from "./custom-slider.module.css"

export interface SlideItemProps {
    image? : string,
    imagePosition? : "top" | "bottom" | "left" |  "right" | "custom-top",
    customTopPosition? : string,
    principalTitle? : string,
    subTitle? : string,
    description? : string,

}
type CustomSliderProps = {
    slides? : SlideItemProps[] 
}

const dumySlides : SlideItemProps[] = [
    {
        image : "/img/custom/black-business-man.jpg",
        imagePosition : "custom-top",
        customTopPosition : "-30px",
        subTitle : "Votre succès est notre",
        principalTitle : "Es-tu prêt?",
        description : "Trouvez une gamme des services avec notre banque"
    },
    {
        image : "/img/custom/man-woman-business.jpg",
        imagePosition : "top",
        subTitle : "Votre succès est notre",
        principalTitle : "Es-tu prêt?",
        description : "Trouvez une gamme des services avec notre banque"
    },
    {
        image : "/img/custom/black-circle.jpg",
        // imagePosition : "top",
        subTitle : "Votre succès est notre",
        principalTitle : "Es-tu prêt?",
        description : "Trouvez une gamme des services avec notre banque"
    },
    {
        image : "/img/custom/brainstorming.jpg",
        // imagePosition : "top",
        subTitle : "Votre succès est notre",
        principalTitle : "Es-tu prêt?",
        description : "Trouvez une gamme des services avec notre banque"
    },
    {
        image : "/img/custom/business.jpg",
        // imagePosition : "top",
        subTitle : "Votre succès est notre",
        principalTitle : "Es-tu prêt?",
        description : "Trouvez une gamme des services avec notre banque"
    },
]

export default function CustomSlider({slides} : CustomSliderProps) {
    const sliderBgRef = useRef<HTMLImageElement | null> (null);
    const sliderTimer = useRef<NodeJS.Timer>();
    const activeSlideIndex = useRef<Number>(0);
    const slidesInDom = useRef<NodeListOf<HTMLDivElement> | null> (null)
    const slidesContainerRef = useRef<HTMLDivElement | null> (null)

    if(!slides){
        slides = dumySlides
    }

    const renderSlide = useCallback( (slide : SlideItemProps, index) =>{
        const getImagePosition = () => {
            let position = styles.center;

            switch (slide.imagePosition) {
                case "top":
                    position = styles.top
                    break;
                case "bottom":
                    position = styles.bottom
                    break;
                    
                case "left":
                    position = styles.left
                    break;
                    
                case "right":
                    position = styles.right
                    break;
            }
            return position;
        }
        return(
            
            <div className={styles.slide} key={`slide-${index}`}>
                <div className={styles.content}>
                    <span>{slide.subTitle}</span>
                    <p className={styles.principalTitle}>{slide.principalTitle}</p>
                    <p>{slide.description}</p>
                </div>
                <div className={`${styles.image} ${getImagePosition()}`}>
                    <img src={slide.image} alt=""  style={slide.customTopPosition ? {objectPosition : `center ${slide.customTopPosition}`} : undefined}/>
                </div>
            </div>
        )
    }, [])
    const swap = useCallback( (direction : "left" | "right" = "right") =>{
        const previousActiveSlideIndex = activeSlideIndex.current.valueOf();
        const previousActiveSlide = slidesInDom.current?.item(previousActiveSlideIndex)!;

        sliderBgRef.current!.src = previousActiveSlide.querySelector(`.${styles.image} img`)?.getAttribute("src")! ;

        previousActiveSlide.classList.remove(styles.active);
        
        const lenght = slidesInDom.current?.length!;

        if(direction === "left"){
            activeSlideIndex.current = (previousActiveSlideIndex - 1 + lenght) % lenght
        }else{
            activeSlideIndex.current = (previousActiveSlideIndex + 1) % lenght
        }

        const activeSlide = slidesInDom.current?.item(activeSlideIndex.current.valueOf());
        activeSlide?.classList.add(styles.active);
        
        if(sliderTimer.current){
            clearInterval(sliderTimer.current)
        }
        
        if(slidesInDom.current!.length > 1)
            sliderTimer.current = setInterval( () => swap("right"), 6000)
        
    }, [])

    
    useEffect( () =>{
        slidesInDom.current = slidesContainerRef.current!.querySelectorAll(`.${styles.slide}`);
        swap();
    }, [swap])

    return(
        <div className={styles.slidesContainer} ref={slidesContainerRef}>
            <img src="" alt="" className={`${styles.bg}`} ref={sliderBgRef} />
            {slides.map((slide, index) => renderSlide(slide, index))}
            {/* controls */}
            {slides.length > 1 &&
                <>
                    <div className={`fa fa-angle-left ${styles.control}`} id={styles.prev} onClick={ e => swap("left")} />
                    <div className={`fa fa-angle-right ${styles.control}`} id={styles.next} onClick={e => swap("right")} />
                </>
            }
        </div>
    )
};
