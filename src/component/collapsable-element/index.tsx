import React, {ReactNode, useState} from 'react'
import styles from "./collapsable-element.module.css"

type props = {
    label : string,
    children : ReactNode
}

export default function CollapsableElement({label, children} : props) {
    const targetId = `#target-${Math.round(Date.now() * Math.random()) }`
    const [expand, setExpand] = useState<boolean>(false)

    
    return(
        <li className={styles.collapsableElement}>
            <a href="/" className={styles.label} onClick={ (e) => {e.stopPropagation(); e.preventDefault(); setExpand(!expand)} }>
                <i className={`fa fa-${expand ? "minus" : "plus"}`} />
                {label}
            </a>   
            <div className={expand ? styles.show : styles.hide} id={targetId}>
                {children}
            </div>
        </li>

    )
};
