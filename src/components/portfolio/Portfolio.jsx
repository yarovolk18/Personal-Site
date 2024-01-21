import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Resume.jpg'
import IMG2 from '../../assets/bookinPortfolio.png'
import IMG3 from '../../assets/mealerPortfolio.png'
import IMG4 from '../../assets/battleshipPortfolio.png'
import IMG5 from '../../assets/uOttaLogoPortfolio.png'
import IMG6 from '../../assets/towersOfHanoiPortfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Resume',
    github: 'https://github.com/yarovolk18',
  }
  ,
  {
    id: 2,
    image: IMG2,
    title: 'Bookin',
    github: 'https://github.com/yarovolk18/Bookin',
  }
  ,
  {
    id: 3,
    image: IMG3,
    title: 'Mealer App',
    github: 'https://github.com/yarovolk18/MealerApp',
  }
  ,
  {
    id: 4,
    image: IMG4,
    title: 'Battleship',
    github: 'https://github.com/yarovolk18',
  }
  ,
  {
    id: 5,
    image: IMG5,
    title: 'uOttaHack 5 Site',
    github: 'https://github.com/uOttaHack',
  }
  ,
  {
    id: 6,
    image: IMG6,
    title: 'Towers of Hanoi',
    github: 'https://github.com/yarovolk18/TowersOfHanoi-CPP',
  }
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
     <div className="portfolio">
        <h5>My Recent Work</h5>
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
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
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