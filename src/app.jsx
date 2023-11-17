import Appgallery from './components/Appgallery'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'

export function App() {
  

  return (
    <>
      <Navbar/>
      <br />
      <Welcome/>
      <Appgallery/>
      <br />
      <AboutMe/>
    </>
  )
}
