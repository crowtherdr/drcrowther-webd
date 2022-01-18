import React, { useContext, useEffect, useState } from 'react'
// import { css } from '@linaria/core'
// import { styled } from '@linaria/react';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import HeroContent from '../../content/hero_content_en.json'

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [whichMarketingExample, setWhichMarketingExample] = useState(0)

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
    <header className="Hero-section">
    <div className="container">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h1 className="hero-title">
          {HeroContent?.pageContent?.hiIntro}
          <span className="hero-title-name"><span className="text-color-main"> {HeroContent?.pageContent?.hiName}</span>.<br />
          {HeroContent?.pageContent?.hiIAmA}<span>{HeroContent?.pageContent?.hiWhatIAm}</span>.</span>
          {/* <span>disciple</span>
          <span>family man</span> */}
        </h1>
      </Fade>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link to="about" smooth duration={1000}>
            {HeroContent?.pageContent?.knowMoreLink}
            </Link>
          </span>
        </p>
      </Fade>
    </div>
  </header>
)
}

export default Hero
