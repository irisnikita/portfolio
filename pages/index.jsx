// Libraries
import dynamic from 'next/dynamic'
import ReactFullPage from '@fullpage/react-fullpage'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Lottie from 'react-lottie'
import { Formik } from 'formik';
import classnames from 'classnames'
import * as Yup from 'yup'

// Redux Toolkit
import { setSectionInViewport } from 'slice/layoutSlice'

// Lottie
import lottieAnimation from 'public/Lottie/background.json'

// Components
const Layout = dynamic(() => import('Components/Layout'))
import Timeline from 'Components/Timeline'
import Animation from 'Components/Animation'

// Render main component
export default function Home() {
  // Variables
  const dispatch = useDispatch()
  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Field is Required!'),
    email: Yup.string().email('Invalid email!').required('Field is Required!'),
    phoneNumber: Yup.number().typeError('Invalid number!')
  })

  // State
  const [socialLinks] = useState([
    { key: 'facebook', icon: 'icon-nltv-facebook', delay: 5500 },
    { key: 'github', icon: 'icon-nltv-github', delay: 6000 },
    { key: 'email', icon: 'icon-nltv-email', delay: 6500 },
  ])
  const [skills] = useState({
    using: [
      { key: 'html5', label: 'HTML5', image: '/images/skills/html5.svg', animationType: 'slide-top', animationDelay: 0 },
      { key: 'css3', label: 'CSS3', image: '/images/skills/css3.svg', animationType: 'slide-top', animationDelay: 200 },
      { key: 'sass', label: 'SASS', image: '/images/skills/sass.svg', animationType: 'slide-top', animationDelay: 400 },
      { key: 'javascript', label: 'JAVASCRIPT', image: '/images/skills/javascript.svg', animationType: 'slide-top', animationDelay: 600 },
      { key: 'react', label: 'REACT', image: '/images/skills/reactjs.svg', animationType: 'slide-bottom', animationDelay: 800 },
      { key: 'redux', label: 'REDUX', image: '/images/skills/redux.png', animationType: 'slide-bottom', animationDelay: 1000 },
      { key: 'nextjs', label: 'NEXTJS', image: '/images/skills/nextjs.jpeg', animationType: 'slide-bottom', animationDelay: 1200 },
      { key: 'ant-design', label: 'ANT DESIGN', image: '/images/skills/ants-design.svg', animationType: 'slide-bottom', animationDelay: 1400 }
    ],
    learning: [
      { key: 'nodejs', label: 'NODEJS', image: '/images/skills/nodejs.svg', animationType: 'flip-left', animationDelay: 1600 },
      { key: 'mysql', label: 'MYSQL', image: '/images/skills/mysql.svg', animationType: 'flip-left', animationDelay: 1800 },
      { key: 'mongodb', label: 'MONGODB', image: '/images/skills/mongodb.svg', animationType: 'flip-left', animationDelay: 2000 },
      { key: 'typescript', label: 'TYPESCRIPT', image: '/images/skills/typescript.svg', animationType: 'flip-left', animationDelay: 2200 },
    ]
  })
  const [projects] = useState([
    {
      key: 'project-1', label: 'Social web app', move: { origin: { x: "-100px", y: "0px" }, des: { x: "0px", y: "0px" } }, descripition: 'This is simple scocial web app for user register , login, can create, delete post, comment and like.', image: 'images/projects/Project-1.png', tech: 'ReactJs, Redux toolkit, NodeJs, GraphQl'
    },
    {
      key: 'project-2', label: 'Habimec', move: { origin: { x: "0px", y: "-100px" }, des: { x: "0px", y: "0px" } }, descripition: 'Landing page introduce company, the best medical products helping to improve the efficiency of community healthcare.', image: 'images/projects/Project-2.png', tech: 'ReactJs, Redux toolkit, NodeJs, GraphQl'
    },
    {
      key: 'project-3', label: 'Propzy tet', move: { origin: { x: "0px", y: "100px" }, des: { x: "0px", y: "0px" } }, descripition: 'Website for funy game ot tet holiday (li xi)', image: 'images/projects/Project-3.png', tech: 'ReactJs, Redux toolkit, NodeJs, GraphQl'
    },
    {
      key: 'project-4', label: 'Porofolio', move: { origin: { x: "100px", y: "0px" }, des: { x: "0px", y: "0px" } }, descripition: 'This is the website introduce myself, my skills, v.v', image: 'images/projects/Project-4.png', tech: 'ReactJs, Redux toolkit, NodeJs, GraphQl'
    }
  ])

  useEffect(() => {
    dispatch(setSectionInViewport('hero-section'))
  }, [])

  // Render
  return (
    <div>
      <Layout>
      <ReactFullPage
        navigation
        fadingEffect
        scrollOverflow
        anchors={[
          'hero-section', 'about-section', 'about-section-2', 'skills-section', 'projects-section', 'contact-section'
        ]}
        onLeave={(origin, destination, direction) => {
          dispatch(setSectionInViewport(destination.item.className.split(' ')[0]))
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullPage.Wrapper>
              <section className="hero-section section">
                <Animation style={{ position: 'absolute', width: '100%', height: '100%' }} move={
                  { origin: { x: '0px', y: '-300px' }, des: { x: '0px', y: '0px' } }
                }>
                  <div className="hero__background" />
                </Animation>
                <div className="hero-container container">
                  <div className="content-wrapper flex a-c j-b">
                    <div className="content--left" >
                      <Animation delay={4000}>
                        <h1>TRUONG VI</h1>
                      </Animation>
                      <Animation delay={4500}>
                        <h2>Front end developer</h2>
                      </Animation>
                      <Animation delay={5000}>
                        <p>Hi, My name is Vi. I'm a front-end developer with 2 year experiences. Nice to meet you and hopeful we will be partner
                                </p>
                      </Animation>
                      <div className="flex a-c gap-20 mt-50">
                        {socialLinks.length ? socialLinks.map(socialLink => (
                          <Animation key={socialLink.key} delay={socialLink.delay} type="slide-top">
                            <button className="button-round" aria-label={socialLink.key}><i className={socialLink.icon}></i></button>
                          </Animation>
                        )) : null}
                      </div>
                    </div>
                    <Animation type="slide-right" delay={4000}>
                      <div className="content--right">
                        <div data-menuanchor='about-section' className='btn-about-block'>
                          <a href="#about-section" className='button border'>About me</a>
                        </div>
                        <Lottie
                          options={{
                            animationData: lottieAnimation,
                            loop: true,
                            autoplay: true,
                            rendererSettings: {
                              preserveAspectRatio: 'xMidYMid slice'
                            }
                          }}
                          width='120%'
                          height='120%'
                          style={{ pointerEvents: 'none' }}
                        />
                      </div>
                    </Animation>
                  </div>
                </div>
              </section>
              <section className="about-section section">
                <div className="container about__container py-80">
                  <Animation isScrollToShow={true} type='slide-top'>
                    <h2 className="sub-heading mx-auto" >Motto of my life</h2>
                  </Animation>
                  <Animation isScrollToShow type='slide-bottom'>
                    <h1 className="title motto mx-auto text-center">
                      The only person you should try to be better than is the person you were yesterday.
                  </h1>
                  </Animation>
                  <div className="divider"></div>
                  <div className="about__content-wrapper">
                    <div className="about__grid-column">
                      <Animation isScrollToShow duration={700}>
                        <h2 className="sub-heading">About me</h2>
                        <h1 className="title">Who am i</h1>
                      </Animation>
                      <Animation isScrollToShow type='slide-bottom' duration={700}>
                        <p>
                          My name is Truong Vi, I'm a Four year Applied Software engineering student at the VNUHCM-University of Information Technology. I have been learning Front-End technologies for 2 year and this time was just enough for me to make sure that this is my place in the industry.<br /><br />Membership in the science club developed my web developer skills like Html, css, Javascript, ReactJs .v.v, which quickly turned into a new hobby. I am fluent in English (spoken and written). Apart from programming websites, my passion is Football and sing.
                      </p>
                      </Animation>
                    </div>
                    <Animation isScrollToShow type='slide-right' duration={1200}>
                      <div className="about__grid-column right-1">
                        <img src="images/profile/avatar.jpg" alt="" />
                      </div>
                    </Animation>
                  </div>
                </div>
              </section>
              <section className="about-section-2 about-section section">
                <div className="container about__container py-80">
                  <div className="about__content-wrapper">
                    <Animation move={
                      { origin: { x: '0px', y: '-300px' }, des: { x: '0px', y: '0px' } }
                    }>
                      <div className="about__grid-column left-2">
                        <img src="images/skills/skills.png" alt="" />
                        <div className="flex a-c j-b logo-company-block">
                          <img src="/images/profile/ants-adx.png" alt="" />
                          <img src="/images/profile/sutrix-solutions.png" alt="" />
                        </div>
                      </div>
                    </Animation>
                    <div className="about__grid-column right-2 flex column j-e">
                      <Animation type='slide-right' isScrollToShow>
                        <h2 className="sub-heading">About me</h2>
                        <h1 className="title">What I do</h1>
                      </Animation>
                      <div className="rich-text-block">
                        <Timeline>
                          <Timeline.Item type='flip-right' label={<div className="tag-label">23-09-2019</div>}>
                            <Animation type='flip-left' isScrollToShow>
                              <h2>ANTS COMPANY</h2>
                              <ul role="list">
                                <li>Cut Html, Css from AdobeXd, Figma, cc 2020. Executed by using reactjs</li>
                                <li>Create UI Package components for ReactJs such as Ant Desgin for all project of company can reuse.</li>
                                <li>Create Document website to guide member of dev how to use each component.</li>
                                <li>Research and develop automation test (CypressJs) for each project of company.</li>
                              </ul>
                            </Animation>
                          </Timeline.Item>
                          <Timeline.Item delay={700} type={'flip-right'} label={<div className="tag-label">08-03-2021</div>} >
                            <Animation delay={700} type='flip-left' isScrollToShow>
                              <h2>SUTRIX SOLUTIONS</h2>
                              <ul role="list">
                                <li>Use tool build webs like Webflow, Wix to build Landing Page Website.</li>
                              </ul>
                            </Animation>
                          </Timeline.Item>
                        </Timeline>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <Animation type='slide-top' isScrollToShow>
                    <h2 className="sub-heading mx-auto">Motto of my life</h2>
                    <h1 className="title motto mx-auto text-center">
                      If you want to go fast, go alone. If you want to go far, go together.
                  </h1>
                  </Animation>
                </div>
              </section>
              <section className="skills-section section">
                <div className="container py-80">
                  <h2 className="sub-heading mx-auto">SKILLS</h2>
                  <h1 className="title mw-500 mx-auto text-center">
                    USING NOW
                  </h1>
                  <div className="skills-wrapper">
                    {skills.using && skills.using.length ? skills.using.map(skill => {
                      const { label = '', image = '', key = '', animationDelay, animationType } = skill;

                      return (
                        <Animation key={key} type={animationType} delay={animationDelay} isScrollToShow>
                          <div className="skills__card">
                            <img src={image} alt={skill.label} width='10px' height='10px' />
                            <h1 className="skills__title">{label}</h1>
                          </div>
                        </Animation>
                      )
                    }) : null}
                  </div>
                  <h1 className="title mw-500 mx-auto text-center">
                    LEARNING
                  </h1>
                  <div className="skills-wrapper">
                    {skills.learning && skills.learning.length ? skills.learning.map(skill => {
                      const { label = '', image = '', key = '', animationDelay, animationType } = skill;

                      return (
                        <Animation key={key} type={animationType} delay={animationDelay} isScrollToShow>
                          <div className="skills__card">
                            <img src={image} alt={skill.label} width='10px' height='10px' />
                            <h1 className="skills__title">{label}</h1>
                          </div>
                        </Animation>
                      )
                    }) : null}
                  </div>
                </div>
              </section>
              <section className="projects-section section">
                <div className="container py-80">
                  <h2 className="sub-heading mx-auto">PROJECTS</h2>
                  <h1 className="title mw-500 mx-auto text-center">
                    RECENTLY DONE PROJECT
                  </h1>
                  <div className="projects-wrapper">
                    {projects.length && projects.map(project => {
                      return (
                        <Animation key={project.key} move={project.move}>
                          <div className="projects__card">
                            <div className="card__content">
                              <h2 className="title">{project.label}</h2>
                              <p>{project.descripition}</p>
                              <div className="flex a-c gap-20 mt-20">
                                <button className='button border'>View</button>
                                <button className='button border'>Demo</button>
                              </div>
                              <div className="card__techs-block">
                                {project.tech}
                              </div>
                            </div>
                            <img width="120" height="50" src={project.image} alt={project.label} />
                          </div>
                        </Animation>
                      )
                    })}
                  </div>
                </div>
              </section>
              <section className='contact-section section'>
                <div className="container py-80">
                  <Animation isScrollToShow>

                    <h2 className="sub-heading mx-auto">CONTACT</h2>
                    <h1 className="title mw-500 mx-auto text-center">
                      LET ME KNOW YOU
                  </h1>
                    <Formik
                      initialValues={{ name: '', email: '', phoneNumber: '', subject: '', message: '' }}
                      validationSchema={contactSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        //
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }) => (
                        <form className='contact-form' onSubmit={handleSubmit}>
                          <input
                            type="text"
                            name="name"
                            className={classnames({
                              'error': errors.name && touched.name
                            })}
                            id="f-name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder='Enter your name*'
                          />
                          <div className={
                            classnames('error', {
                              'show': errors.name && touched.name
                            })
                          } >{errors.name}</div>
                          <input
                            type="email"
                            name="email"
                            className={classnames({
                              'error': errors.email && touched.email
                            })}
                            id="f-email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            placeholder='Enter your email*'
                          />
                          <div className={
                            classnames('error', {
                              'show': errors.email && touched.email
                            })
                          }>{errors.email}</div>
                          <input
                            type="tel"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="phoneNumber"
                            className={classnames({
                              'error': errors.phoneNumber && touched.phoneNumber
                            })}
                            value={values['phone-number']}
                            id="f-phone-number"
                            placeholder='Phone number'
                          />
                          <div className={
                            classnames('error', {
                              'show': errors.phoneNumber && touched.phoneNumber
                            })
                          }>{errors.phoneNumber}</div>
                          <input
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="subject"
                            value={values['subject']}
                            id="f-subject"
                            placeholder='Subject'
                          />
                          <textarea
                            name="message"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            id="message"
                            value={values['message']}
                            cols="20"
                            rows="5"
                            placeholder='Message'
                          />
                          <button className='button large' type='submit' disabled={isSubmitting}>SEND</button>
                        </form>
                      )}
                    </Formik>
                  </Animation>
                </div>
              </section>
            </ReactFullPage.Wrapper>
          );
        }}
      />
      </Layout>
    </div>
  )
}