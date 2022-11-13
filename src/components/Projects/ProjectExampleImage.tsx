import React from 'react'
import { css } from '@linaria/core'
import { styled } from '@linaria/react';
import Tilt from 'react-tilt'
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

const RoundedDiv = styled.div`
  border-radius: .25rem;
  overflow: hidden;
`

const projectThumbnail = css`
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s ease-out;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow,
    0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  & img {
    max-width: 660px;
  }

  @media (max-width: 990px) {
    & img {
      margin-top: 24px;
      width: 100%;
    }
  }
`

const ProjectExampleImage = ({ whichMarketingExample, whichProject }: { whichMarketingExample: number; whichProject: number }) => {
  // Thanks to https://github.com/cobidev/gatsby-simplefolio for my site theme inspiration.

  return (
    <>
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
        <RoundedDiv data-tilt className={projectThumbnail}>
          { whichProject !== 3 && exampleImages[whichProject] && (<img alt={'alt'} src={exampleImages[whichProject]} />)}
          { whichProject === 3 && exampleMarketingPages[0] && (<img id="marketingExample" alt={'alt'} src={exampleMarketingPages[whichMarketingExample]} />)}
        </RoundedDiv>
      </Tilt>
    </>
  )
}

export default ProjectExampleImage
