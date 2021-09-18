import React, { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.scss'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import { Button } from 'carbon-components-react'
import ProfileImage from './images/about-me.jpg'

// eslint-disable-next-line max-lines-per-function
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <div className="App-content">
        <header className="Hero-section">
          <div>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                Hi, my name is {''}
                <span className="text-color-main">David Crowther</span>.<br /> I&apos;m a web
                developer.
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {'Know more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </div>
        </header>
        <section id="about" className="App-section">
          <div className="container">
            {/* <Title title="About Me" />*/}
            <h2>About David Crowther</h2>
            <div className="about-wrapper row">
              <div className="col-md-6 col-sm-12">
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <img alt="profile picture" src={ProfileImage} />
                  </div>
                </Fade>
              </div>
              <div className="col-md-6 col-sm-12">
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text">
                      My family and I live in Lehi, Utah. I&apos;m a web developer for
                      FamilySearch.org. I&apos;m a Utah State University masters graduate of
                      Learning Technology and Instructional Design and a Columbia College bachelor
                      of business administration with an emphasis in computer information systems.
                    </p>
                    <p className="about-wrapper__info-text">
                      I&apos;ve been doing Web design and development since 1998. I was a teenager
                      in the 1980&apos;s and enjoyed lots of awesome music and watched computers
                      grow up.
                    </p>
                    <p className="about-wrapper__info-text">
                      I enjoy learning about most subjects, especially religious topics, technology,
                      and history. I also like being in the outdoors; nothing extreme, just
                      leisurely outdoor activities with family and friends. I like building things
                      physically or virtually.​
                    </p>
                    <p className="about-wrapper__info-text">Below are some examples of my work.</p>
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
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="App-section">
          <h2>About this site.</h2>
          <p>
            This site is built with React and TypeScript. It was started with (
            <a href="https://create-react-app.dev/docs/adding-typescript/">
              Create React App with the TypeScript template
            </a>
            ). The <a href="https://www.carbondesignsystem.com/">IBM Carbon Design System</a> was
            added.
          </p>
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
        <section className="App-section">
          <h2>Temporary Stuff.</h2>
          <p>
            <Button>Example Carbon Button</Button>
          </p>
        </section>
      </div>
    </div>
  )
}

export default App
