import React from 'react'
import pic from './images/Mypic.png'

function About() {
  return (
    <div className='About'>
   
      <div className='me'>
      <img src={pic} alt="" />
        <h1>About Me</h1>
        <p>
          I'm a Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.</p>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <li>HTML/CSS</li>
        <li>JAVA SCRIPT</li>
        <li>BOOTSTARP</li>
        <li>REACT JS</li>
        <li>GIT/GITHUB</li>
      </div>
    </div>
  )
}

export default About