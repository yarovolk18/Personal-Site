import React from 'react'
import CV from '../../assets/2024_IaroslavVolkov.pdf'

export const CTA = () => {
  return (
    <div className = 'cta'>
        <a href = {CV} download className = 'btn'> Download Resume</a>
    </div>
  )
}

export default CTA
