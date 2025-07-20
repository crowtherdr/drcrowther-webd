import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import ProjectsContent from '../../content/projects_content_en.json'
import ProjectExampleImage from './ProjectExampleImage'
import styles from './Projects.module.css'

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
    <section className={styles.projectsCss}>
      <div className="container">
        <div className={styles.projectWrapper}>
          <h2 className="section-title">{ProjectsContent?.pageContent?.mainHeading}</h2>
          {ProjectsContent?.pageContent?.projects.map(
                      (project, index) => {
            const { whichProject, title, description, projectDemoUrl = [], examples = [] } = project;
            // const exampleLinks = examples[0]?.links || []

            return (
              <div key={index} className="row">
                <div className="col-lg-4 col-sm-12">
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="text">
                      <h3 className="title">{title || 'Project Title'}</h3>
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

                              if (exampleLink?.url) {
                                return (<li key={elementKey}><a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cta-btn"
                                  href={exampleLink?.url}
                                  onMouseEnter={() => {
                                    setWhichMarketingExample(index)
                                  }}
                                >
                                  {exampleLink.text}
                                </a></li>)
                              } else {
                                return (<li key={elementKey}><a
                                  rel="noopener noreferrer"
                                  className="cta-btn"
                                  onMouseEnter={() => {
                                    setWhichMarketingExample(index)
                                  }}
                                >
                                  {exampleLink.text}
                                </a></li>)
                              }
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
                    <div className="image">
                      { examples[0]?.links[whichMarketingExample]?.url && (
                        <a
                          href={whichProject !== 3 ? projectDemoUrl[1]: examples[0]?.links[whichMarketingExample]?.url}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <ProjectExampleImage whichMarketingExample={whichMarketingExample} whichProject={whichProject} />
                        </a>
                      )}
                      { !examples[0]?.links[whichMarketingExample]?.url && (
                        <a
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <ProjectExampleImage whichMarketingExample={whichMarketingExample} whichProject={whichProject} />
                        </a>
                      )}
                    </div>
                  </Fade>
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
