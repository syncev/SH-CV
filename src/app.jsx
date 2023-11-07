import { useState } from 'preact/hooks'
import MyProjects from './components/myprojects'
import Navbar from './components/Navbar'

export function App() {
  

  return (
    <>
      <Navbar/>
      <h1 >Hi! Welcome to my landing page.</h1>
      <h3>My name is Santiago Hernandez, a front end dev. 
        <br/> Below you will find my projects..</h3>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum esse, modi repudiandae iusto consectetur mollitia perspiciatis recusandae animi dolorum vitae quisquam adipisci officiis quaerat, laudantium nulla eligendi ullam tenetur!</p>
      <MyProjects/>
    </>
  )
}
