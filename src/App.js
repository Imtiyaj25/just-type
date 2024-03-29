import React from 'react'
import Intro from "../src/components/intro"
import Skills from './components/skills';
import Portfolio from "./components/portfolio";

import "./app.scss"

const App = () => {
  return (
    <div>
      <Intro/>
      <Skills/>
      <Portfolio/>
    </div>
  )
}

export default App;