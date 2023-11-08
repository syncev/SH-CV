import React,{useState, useEffect} from 'react'

const Welcome = () => {
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() =>{
        setPageLoaded(true)
    },[]);
  return (
    <div className='welcome-wrapper'>
        <section className={`welcome-section `}>
            <h1 className={`welcome-greetings ${pageLoaded ? "fadeIn" : ""}`}>Hi! Welcome to my Portfolio.</h1>
            <p className={`welcome-description ${pageLoaded ? "fadeIn" : ""}`}>Below you will find all my projects</p>
        </section>
    </div>
  )
}

export default Welcome