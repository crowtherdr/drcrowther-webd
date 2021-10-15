import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import ProjectsContent from '../../content/projects_content_en.json'
import laHomelandProjectExample from '../../assets/la-homeland-dia-de-los-muertos.jpg'

const exampleImages = ['', laHomelandProjectExample, '', '', '', '']

const Projects = () => {
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
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          {/* <Title title="Projects" /> */}
          <h2 className="section-title">{ProjectsContent?.pageContent?.mainHeading}</h2>
          {ProjectsContent?.pageContent?.projects.map(
                      (project, index) => {
            const { whichProject, title, description, projectDemoUrl } = project;
            

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
                        {projectDemoUrl && (<a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={projectDemoUrl}
                        >
                          See Live
                        </a>)}

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
                          href={projectDemoUrl}
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
                              { exampleImages[whichProject] && (<img alt={'alt'} src={exampleImages[whichProject]} />)}
                              {/* <ProjectImg alt={'title'} filename={'img'} /> */}
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
