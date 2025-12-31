import React from 'react'
import Tilt from 'react-parallax-tilt'
import styles from './ProjectExampleImage.module.css'
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
const exampleMarketingPages = [
  aboutFS,
  fsArchives,
  donateToday,
  conferenceInBox,
  myFamily,
  personalAncestralFile,
  recordsPresMissionOpps,
  fsTermsOfUse,
  volunteer,
  whatsNew,
]

const ProjectExampleImage = ({
  whichMarketingExample,
  whichProject,
}: {
  whichMarketingExample: number
  whichProject: number
}) => {
  // Thanks to https://github.com/cobidev/gatsby-simplefolio for my site theme inspiration.

  return (
    <>
      <Tilt
        tiltReverse={false}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        scale={1}
        transitionSpeed={300}
        gyroscope={true}
        glareEnable={false}
        className={styles.projectThumbnail + ' ' + styles.roundedDiv}
      >
        {whichProject !== 3 && exampleImages[whichProject] && (
          <img alt={'alt'} src={exampleImages[whichProject]} />
        )}
        {whichProject === 3 && exampleMarketingPages[0] && (
          <img
            id="marketingExample"
            alt={'alt'}
            src={exampleMarketingPages[whichMarketingExample]}
          />
        )}
      </Tilt>
    </>
  )
}

export default ProjectExampleImage
