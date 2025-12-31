import React, { useEffect, useState } from 'react'
// import logo from './logo.svg'
// import { styled } from '@linaria/react'
import { motion } from 'framer-motion'
// import { Link } from 'react-scroll'
import ProfileImage from '../assets/about-me.jpg'
import KnowMoreContent from '../content/know_more_content_en.json'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'

function App(): JSX.Element {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  // Thanks to https://github.com/cobidev/gatsby-simplefolio for my site theme inspiration.

  return (
    <div className="App">
      <div className="App-content">
        <Hero />
        <section id="about" className="App-section">
          <div className="container">
            {/* <Title title="About Me" />*/}
            <h2 className="section-title">{KnowMoreContent?.pageContent?.mainHeading}</h2>
            <div className="about-wrapper row">
              <div className="col-md-6 col-sm-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="about-wrapper__image"
                >
                  <img alt="profile picture" src={ProfileImage} />
                </motion.div>
              </div>
              <div className="col-md-6 col-sm-12">
                <motion.div
                  initial={{ opacity: 0, x: isDesktop ? -30 : 0, y: isMobile ? 30 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="about-wrapper__info"
                >
                  {KnowMoreContent?.pageContent?.mainContentParagraphArray.map(
                    (mainContentParagraph, index) => {
                      return (
                        <p key={index} className="about-wrapper__info-text">
                          {mainContentParagraph}
                        </p>
                      )
                    }
                  )}
                  {/* {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </span>
              )} */}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <section className="App-section">
          <h2>About this site.</h2>
          <p>
            This site is built with Vite, React (with TypeScript), &{' '}
            <a href="https://github.com/callstack/linaria/">Linaria</a> was added.
          </p>
          <p>
            <a href="mailto:crowtherdr+portfolio@gmail.com">crowtherdr+portfolio@gmail.com</a>
          </p>
          <p>© 2025 David R. Crowther</p>
        </section>
        {/* <section className="App-section">
          <p>Hi, I&apos;m David!</p>
          <p>
            I&apos;m a web developer with expertise in HTML, CSS, JavaScript, React. I particularly
            enjoy ...
          </p>

          <p>christian, family man, web developer, learning lover, utahan</p>
          <p>Follower of One. Son of two. Husband of one. Father of four. Learner of many.</p>
          <p>christian, family man, web dev</p>
        </section> */}
      </div>
    </div>
  )
}

export default App
