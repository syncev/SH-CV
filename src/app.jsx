import { useState } from 'preact/hooks'
import MyProjects from './components/myprojects'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

export function App() {
  

  return (
    <>
      <Navbar/>
      <br />
      <Welcome/>
      <MyProjects/>
    </>
  )
}
