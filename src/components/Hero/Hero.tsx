import React, { useContext, useEffect, useState } from 'react'
// import { css } from '@linaria/core'
// import { styled } from '@linaria/react';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import HeroContent from '../../content/hero_content_en.json'

// Type assertion to fix React 18 compatibility with react-scroll
const ScrollLink = Link as any

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
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? -30 : 0, y: isMobile ? 30 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="hero-title">
            {HeroContent?.pageContent?.hiIntro}
            <span className="hero-title-name">
              <span className="text-color-main"> {HeroContent?.pageContent?.hiName}</span>.<br />
              {HeroContent?.pageContent?.hiIAmA}
              <span>{HeroContent?.pageContent?.hiWhatIAm}</span>.
            </span>
            {/* <span>disciple</span>
          <span>family man</span> */}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? -30 : 0, y: isMobile ? 30 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <ScrollLink to="about" smooth duration={1000}>
                {HeroContent?.pageContent?.knowMoreLink}
              </ScrollLink>
            </span>
          </p>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
