import headerPhoto from './images/wasatch-mountain-state-park-woods.jpg'
import './App.css'
import '../node_modules/carbon-components/css/carbon-components.min.css'
import { Button } from 'carbon-components-react'

function CarbonComponent() {
  return <Button>Example usage</Button>
}

function Header() {
  return (
    <header>
      <h1><a href="/">DR Crowther WebD Portfolio</a></h1>
      <hgroup class="row-fluid">
        <div class="img-wrapper">
          <img class="header-photo" src={headerPhoto} alt="" width="1200" height="100" />
        </div>
      </hgroup>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <CarbonComponent />
    </div>
  );
}

export default App;
