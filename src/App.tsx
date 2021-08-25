import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { Button } from 'carbon-components-react'

// eslint-disable-next-line max-lines-per-function
function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <section className="App-section">
          <h2>About David Richard Crowther</h2>
          <p>
            Hello. Below is some information about me, David Crowther. Links from this page show
            examples of my work.
          </p>

          <h3>Who am I?</h3>
          <p>My name: David Richard Crowther</p>
          <p>My occupation: Web design and development since 1998.</p>
          <p>
            My background: I was a teenager in the 1980&apos;s and enjoyed lots of awesome music and
            watched computers grow up.
          </p>
          <p>More about me</p>
          <ul>
            <li>My family and I live in Lehi, Utah.</li>
            <li>I am a web developer for FamilySearch.org.</li>
            <li>
              I am a Utah State University masters graduate of Learning Technology and Instructional
              Design.
            </li>
            <li>
              I am a Columbia College bachelor of business administration with an emphasis in
              computer information systems.
            </li>
            <li>
              I enjoy learning about most subjects, especially religious topics, technology, and
              history.
            </li>
            <li>
              I also like being in the outdoors; nothing extreme, just leisurely outdoor activities
              with family and friends. I like building things physically or virtually.​
            </li>
          </ul>
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
