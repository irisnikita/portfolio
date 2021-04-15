
// Libraries
import React, { useEffect, useMemo, useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes, { array } from 'prop-types'
import { useSelector } from 'react-redux'

// Redux toolkit
import { selectCurrentSection } from 'slice/layoutSlice'

// Styles
import styles from './styles.module.scss'

function Animation(props) {
    const {
        children,
        isScrollToShow,
        type = "slide-left",
        classNames = '',
        duration = 1000,
        delay = 0,
        style,
        md = {},
        once = false,
        timingFunction = 'ease-in-out'
    } = props;

    const move = useMemo(() => {
        if (props.move && Object.keys(props.move).length) {
            if (process.browser) {
                // Client-side-only code
                const draftMove = JSON.parse(JSON.stringify(props.move))

                if (window && window.matchMedia('(max-width: 991px)').matches) {
                    draftMove.origin.x = md.move && md.move.x ? md.move.x : "0px";
                    draftMove.origin.y = md.move && md.move.y ? md.move.y : "0px";
                }
                return draftMove;
            }

            return props.move;
        }

        return {};

    }, [props.move])

    const animationList = [
        { key: 'slide-left', name: 'a__slide-left' },
        { key: 'slide-right', name: 'a__slide-right' },
        { key: 'slide-bottom', name: 'a__slide-bottom' },
        { key: 'slide-top', name: 'a__slide-top' },
        { key: 'flip-left', name: 'a__flip-left' },
        { key: 'flip-right', name: 'a__flip-right' },
    ]

    const timingFunctionList = [
        { key: 'ease-out-back', function: "cubic-bezier(0.175, 0.885, 0.320, 1.275)" }
    ]

    // Selector
    const currentSectionName = useSelector(selectCurrentSection)

    // Use ref
    const ref = useRef(null)

    const aniFunction = useMemo(() => {
        return timingFunctionList.find(t => t.key === timingFunction) ? timingFunctionList.find(t => t.key === timingFunction).function : 'ease-in-out'
    }, [timingFunction])


    useEffect(() => {
        if (Object.keys(move).length) {
            ref.current.style.transition = 'all 1000ms'

            if (document.querySelector(`.${currentSectionName}`) && document.querySelector(`.${currentSectionName}`).contains(ref.current)) {
                ref.current.style.top = move.des.y;
                ref.current.style.left = move.des.x;
            } else {
                ref.current.style.top = move.origin.y;
                ref.current.style.left = move.origin.x;
            }

            return;
        }

        const { name } = animationList.find(ani => ani.key === type);

        if (isScrollToShow) {
            if (document.querySelector(`.${currentSectionName}`) && document.querySelector(`.${currentSectionName}`).contains(ref.current)) {
                ref.current.classList.add(name)
            } else {
                if (!once) {
                    setTimeout(() => {
                        ref.current.classList.remove(name)
                    }, 500)
                }
            }
        } else {
            ref.current.classList.add(name)
        }
    }, [currentSectionName])

    return (
        <div
            className={classnames(styles['animation-block'], classNames)}
            ref={ref}
            style={{
                ...style,
                top: move.origin ? move.origin.y : '',
                left: move.origin ? move.origin.x : '',
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
                animationTimingFunction: aniFunction
            }}
        >
            {children}
        </div>
    )
}

Animation.defaultProps = {
    isSrollToShow: false,
    children: null
}
Animation.propTypes = {
    isScrollToShow: PropTypes.bool,
    children: PropTypes.node
}

export default Animation
