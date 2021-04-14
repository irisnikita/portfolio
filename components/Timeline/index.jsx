// Libraries
import React, { Children, cloneElement } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

// Components
import Animation from 'Components/Animation'

// Styles
import styles from './styles.module.scss';

// Timeline component
const Timeline = (props) => {
    // Props
    const { children = {} } = props;

    /**
     * Function to render line item child
     * @param {*} 
     */
    const showRenderChildren = () => {
        let isLabel = Children.toArray(children).some(child => child.props.label)

        return Children.map(children, child => {
            return (
                cloneElement(child, { isLabel })
            )
        })
    }

    return (
        <div>
            {showRenderChildren()}
        </div>
    )
}

// TimelineItem component
const Item = (props) => {
    // Props
    const { label = "", children, isLabel = false, delay = 0, type = 'slide-bottom' } = props;

    return (
        <div className={classnames({
            'flex gap-10': true,
            [styles['timeline-block']]: true,
        })}
        >
            <div className={classnames({
                [styles['timeline__label']]: true,
                [styles['label--is-all']]: isLabel
            })}>
                <Animation isScrollToShow delay={delay} type={type}>
                    {label}
                </Animation>
            </div>
            <div className={styles['timeline__line']}>
                <Animation isScrollToShow delay={delay} type={type}>
                    <div className={styles['timeline__dot']}></div>
                </Animation>
                <div className={styles['timeline__divider']}></div>
            </div>
            <div className={styles['timeline__content']}>
                {children}
            </div>
        </div>
    )
}

Item.propTypes = {
    label: PropTypes.node,
    isLabel: PropTypes.bool
}

Timeline.propTypes = {

}

Timeline.Item = Item;

export default Timeline
