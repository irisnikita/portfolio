// Libraries
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

// Styles 
import styles from './styles.module.scss'

const MoveOnMouse = (props) => {
    // Props
    const { children } = props;

    const refEl = useRef(null)

    const onMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const rect = refEl.current.getBoundingClientRect()
        refEl.current.style.top = `${y - rect.height}px`;
        refEl.current.style.left = `${x - 1000}px`;
    }

    return (
        <div
            className={styles['mouse-move-block']}
            ref={refEl}
            onMouseMove={onMouseMove}
        >
            { children}
        </div >
    )
}

export default MoveOnMouse
