import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/uOttaLogoPortfolio.png'
import IMG2 from '../../assets/uottahack6banner.jpg'
import IMG3 from '../../assets/uOttaApp2024.png'
import IMG4 from '../../assets/bookinPortfolio.png'
import IMG5 from '../../assets/mealerPortfolio.png'
import IMG6 from '../../assets/vwconceptart.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'uOttaHack 2023',
    github: 'https://2023.uottahack.ca',
  }
  ,
  {
    id: 2,
    image: IMG2,
    title: 'uOttaHack 2024',
    github: 'https://2024.uottahack.ca',
  }
  ,
  {
    id: 3,
    image: IMG3,
    title: 'uOttaHack Registration',
    github: 'https://github.com/uOttaHack/uOttaApp-Portal',
  }
  ,
  {
    id: 4,
    image: IMG4,
    title: 'Bookin',
    github: 'https://github.com/yarovolk18/Bookin',
  }
  ,
  {
    id: 5,
    image: IMG5,
    title: 'Mealer App',
    github: 'https://github.com/yarovolk18/MealerApp',
  }
  ,
  {
    id: 6,
    image: IMG6,
    title: 'VaporWare Games (Coming Soon!)',
    github: 'https://vapor-ware-site.vercel.app/',
  }
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
     <div className="portfolio">
        <h2>Portfolio</h2>
      </div>
    
    
  
      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="none"></img>
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className='btn-primary'>Link</a>
                <h4>{title}</h4>
              </div>
             
            </article>
            )
          }
        )
        }
       

      
      </div>

    </section>
  )
}

export default Portfolio