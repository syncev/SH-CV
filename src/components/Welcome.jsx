import React,{useState, useEffect} from 'react'

const Welcome = () => {
  const deviceWidth = window.innerWidth;
  const tabletWidth = 768;
    //a state and effect that on load changes the state once, from false to true, and since this happens when the page loads, this state basically tells if the page finished loading
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() =>{
        setPageLoaded(true)
    },[]);


  return (
    <div className='welcome-wrapper'>
      {deviceWidth < tabletWidth ? (

        <section className={`welcome-section `}>
            <h1 className={`welcome-greetings ${pageLoaded ? "fadeIn" : ""}`}>Hi! I'm Santiago Hernandez, welcome to my Portfolio.</h1>
            <p className={`welcome-description ${pageLoaded ? "fadeIn" : ""}`}>I created this website, where you can explore my other <em>projects</em>, learn more <em>about me</em>, and find details on how to <em>get in touch</em>.</p>
            <p className={`welcome-instruction ${pageLoaded ? "fadeIn" : ""}`}>Please navigate to the desired section from the <strong>menu</strong>.</p>
        </section>
          ) : (
        <section className={`welcome-section `}>
            <h1 className={`welcome-greetings ${pageLoaded ? "fadeIn" : ""}`}>Hi! I'm Santiago Hernandez, welcome to my Portfolio.</h1>
            <p className={`welcome-description ${pageLoaded ? "fadeIn" : ""}`}>I created this website, where you can explore my other <em>projects</em>, learn more <em>about me</em>, and find details on how to <em>get in touch</em>.</p>
        </section>

          )}
    </div>
  )
}

export default Welcome