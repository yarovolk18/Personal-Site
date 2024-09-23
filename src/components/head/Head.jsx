import React from 'react'
import './Head.css'

// import CTA from './CTA.jsx'

import uOttaPanorama from '../../assets/uOttaPanorama.jpg'
import uOttaInternPanel from '../../assets/intern_panel_group.jpg'

const Head = () => {
  return (
    <section id = 'head'>
        <div className = 'container head_container'>
            <h1>uOttaHack V, 2023</h1>
            <div className = 'me'>
                <img src={uOttaPanorama} alt="me" />
            </div>
            <h1>Intern Panel, 2024</h1>
            <div className = 'me'>
                <img src={uOttaInternPanel} alt="me" />
            </div>
        </div>

    </section>
    
    
  )
}

export default Head