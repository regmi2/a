import {portfolio,videos} from '../../data'
import PortfolioItem from './PortfolioItem'

import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>
      <h3 className="section__subtitle"> Highlighted Projects </h3>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />
        })}

      </div>
      <div className="separator"> </div>
      <h3 className="section__subtitle">Videos</h3>

      <div className="portfolio__container container grid">
        {videos.map((video) => {
          return <PortfolioItem key={video.id} {...video} />
        })}
        </div>



    </section>
  )
}

export default Portfolio
