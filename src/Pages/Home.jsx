import React from 'react'

import pic1 from './images/Mypic.png'
import pic2 from './images/INS.jfif'
import pic3 from './images/FEC.jfif'
import pic4 from './images/git.png'



function Home() {
    return (
        <div className='Home'>
            <div className="App">
                <img src={pic1} style={{ width: '15%', border: '3px solid black' }} />

                <h1>HI,I'm <span style={{ color: 'wheat'}}> Ankit Jangir</span></h1>
                <h1>I'm a Front End Developer.</h1>
                <p>I'm a Rect Developer  </p>
                <p>Developed Some Skills In Front End Development</p>
                <p>ankitjangir545@gmail.com</p>
                <a><img src={pic2} style={{ width: '25px' }} /></a>
                <a><img src={pic3} style={{ width: '38px' }} /></a>
                <a><img src={pic4} style={{ width: '26px' }} /></a>
            </div>
        </div>
    )
}

export default Home;