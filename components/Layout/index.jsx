// Libraries
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import TypeIt from 'typeit'


// Redux toolkit
import { selectCurrentSection } from 'slice/layoutSlice'

// Default props
const defaultProps = {
    tags: {
        title: 'Create Next App',
        description: 'This is my portfolio'
    }
}

// Components
function Layout(props) {
    // Props
    const { tags } = props;
    const [isPreload, setPreload] = useState(true)

    const currentSection = useSelector(selectCurrentSection)

    useEffect(() => {
        new TypeIt("#loading-content", {
            speed: 30,
            waitUntilVisible: true
        })
            .type("Hi, My name is Vi", { delay: 300 })
            .delete()
            .type("Welcome to my portfolio!", { delay: 300 })
            .delete()
            .type("Let go!", { delay: 300 })
            .move(-4, { delay: 300 })
            .type("'s")
            .go();

        setTimeout(() => {
            setPreload(false)
        }, 3500)
    }, [])

    // State
    const [menus] = useState([
        { key: 'about-section', label: 'ABOUT' },
        { key: 'skills-section', label: 'SKILLS' },
        { key: 'projects-section', label: 'PROJECTS' },
        { key: 'contact-section', label: 'CONTACT' },
    ])

    return (
        <div>
            <div id='preload-page' className={classnames("preload-page", {
                'finish': !isPreload
            })}>
                <div id='loading-content'></div>
                <div className="layer-1"></div>
                <div className="layer-2"></div>
            </div>
            <Head>
                <title>{tags.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={tags.description}></meta>
                <meta property="og:title" content={tags.title} key="ogtitle" />
                <meta property="og:description" content={tags.description} key="ogdesc" />
            </Head>
            <section className="header">
                <div className="container flex j-b a-c">
                    <div data-menuanchor='hero-section'>
                        <a href="#hero-section">
                            <img className="logo" src="images/nltruongvi-logo.png" width="120px" height="50px" alt="Portfolio logo v" />
                        </a>
                    </div>
                    <div className="header__menu flex a-c">
                        {menus.length ? menus.map(menuItem => {
                            return (
                                <div data-menuanchor={menuItem.key} key={menuItem.key} className={classnames('menu__link', {
                                    'active': menuItem.key === currentSection
                                })}>
                                    <a href={`#${menuItem.key}`}> {menuItem.label}</a>
                                </div>
                            )
                        }) : null}
                    </div>
                    <a href='pdf/Nguyen-Luong-Truong-Vi-CV-xin-viec.pdf' target='__blank' className="button">
                        MY CV
                    </a>
                </div>
            </section>
        </div>
    )
}

Layout.defaultProps = defaultProps;

export default Layout
