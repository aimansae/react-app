import React, { useState } from 'react'
import { AiTwotoneHeart,AiOutlineHeart } from 'react-icons/ai'

import styles from '../styles/Like.module.css'

interface PropsLike {
    onClick: () => void;
    
}
const Like = ({ onClick }: PropsLike) => {
    const [clicked, setClicked] = useState(true);

    const toggle = () => {
        setClicked(!clicked);
        onClick();
    }
    
    if (clicked) return <AiTwotoneHeart className={styles.like} onClick={toggle} /> 
      
    return <AiOutlineHeart className={styles.likeEmpty} onClick={toggle} />
}

export default Like
