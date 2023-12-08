import {IoIosClose} from 'react-icons/io'
import { useState } from 'react'

// img, title, details, description
const PortfolioItem = (item) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
  return (
    <div className="portfolio__item">
        <img src={item.img} alt='' className="portfolio__img" />
        <div className="portfolio__hover" onClick={toggleModal}>
            <h3 className="portfolio__title">{item.title}</h3>
        </div>

        {modal && (
                    <div className="portfolio__modal">
                    <div className="portfolio__modal-content">
                     
                        <IoIosClose className='modal__close' onClick={toggleModal}/>
                        <h3 className="modal__title">{item.title}</h3>
                       
                       

<img src={item.img} alt="" className="modal__img" />
                        <p className='modal__description'>{item.description}</p>
                        <ul className="modal__list">
  {item.details.map(({ icon, title, desc, link }, index) => {
    return (
      <li className="modal__item" key={index}>
        <div id='icon'>
        {icon}
        </div>
        <div className='item__title'>
        {title}
        </div>

        <div>
          {title === 'Link: ' ? (
            <span className="item__details">
              <a href={link} target='_blank' rel='noreferrer' id='detail_link' >{desc}</a>
            </span>
          ) : (
            <span className="item__details">{desc}</span>
          )}
        </div>
      </li>
    );
  })}
</ul>


                    </div>
                </div>
        )}
    </div>
  )
}

export default PortfolioItem
