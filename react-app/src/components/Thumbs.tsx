import { BsHandThumbsUpFill } from 'react-icons/bs'
import styles from '../styles/Thumbs.module.css'
import React, { useState } from 'react'

interface PropsThumbs {
    onClick: () => void;
}

const Thumbs = ({onClick}: PropsThumbs) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked);
        onClick()
    }
    
    if (clicked) return <BsHandThumbsUpFill className={styles.thumbs} onClick={handleClick} />
            
    return <BsHandThumbsUpFill
     onClick={handleClick} />

}

    export default Thumbs;
