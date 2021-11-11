import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import ProjectsContent from '../../content/projects_content_en.json'
import laHomelandProjectExample from '../../assets/project-examples/la-homeland-dia-de-los-muertos.jpg'
import familyTreeProjectExample from '../../assets/project-examples/family-tree-overview.jpg'
import aboutFS from '../../assets/project-examples/about-fs.jpg'
import conferenceInBox from '../../assets/project-examples/conference-in-a-box.jpg'
import donateToday from '../../assets/project-examples/donate-today.jpg'
import fsArchives from '../../assets/project-examples/fs-archives.jpg'
import fsTermsOfUse from '../../assets/project-examples/fs-terms-of-use.jpg'
import myFamily from '../../assets/project-examples/my-family.jpg'
import personalAncestralFile from '../../assets/project-examples/personal-ancestral-file.jpg'
import recordsPresMissionOpps from '../../assets/project-examples/records-preservation-mission-opportunities.jpg'
import volunteer from '../../assets/project-examples/volunteer.jpg'
import whatsNew from '../../assets/project-examples/whats-new.jpg'

const exampleImages = ['', laHomelandProjectExample, familyTreeProjectExample, '', '', '']
const exampleMarketingPages = [aboutFS, fsArchives, donateToday, conferenceInBox, myFamily, personalAncestralFile, recordsPresMissionOpps, fsTermsOfUse, volunteer, whatsNew]

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [whichMarketingExample, setWhichMarketingExample] = useState(0)

  // const showMarketingImage = (evt, exampleImage) => {
  //   document.getElementById('marketingExample').src = exampleImage
  // }

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
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          {/* <Title title="Projects" /> */}
          <h2 className="section-title">{ProjectsContent?.pageContent?.mainHeading}</h2>
          {ProjectsContent?.pageContent?.projects.map(
                      (project, index) => {
            const { whichProject, title, description, projectDemoUrl = [], examples = [] } = project;
            // const exampleLinks = examples[0]?.links || []

            return (
              <div key={index} className="project-wrapper row">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {description ||
                              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <p className="mb-4">{false || ''}</p>
                        </div>
                        {!!projectDemoUrl.length && (<a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={projectDemoUrl[1]}
                        >
                          {projectDemoUrl[0] ? projectDemoUrl[0] : ("See Live")}
                        </a>)}

                        {!!examples.length && (
                          <>
                            <p>{examples[0].heading}</p>
                              <ol>
                              {!!examples.length && examples[0]?.links && examples[0]?.links.map((exampleLink, index) => {
                                const elementKey = `key${index}`
                                return (<li key={elementKey}><a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cta-btn"
                                  href={exampleLink.url}
                                  onMouseEnter={() => {
                                    setWhichMarketingExample(index)
                                  }}
                                >
                                  {exampleLink.text}
                                </a></li>)
                              })}
                              </ol>
                          </>
                        )}
                        {false && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={'repo'}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </Fade>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={whichProject !== 3 ? projectDemoUrl[1]: examples[0]?.links[whichMarketingExample]?.url}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              { whichProject !== 3 && exampleImages[whichProject] && (<img alt={'alt'} src={exampleImages[whichProject]} />)}
                              {/* <ProjectImg alt={'title'} filename={'img'} /> */}
                              { whichProject === 3 && exampleMarketingPages[0] && (<img id="marketingExample" alt={'alt'} src={exampleMarketingPages[whichMarketingExample]} />)}
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
