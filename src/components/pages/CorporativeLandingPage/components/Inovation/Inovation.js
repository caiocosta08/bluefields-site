import React from 'react'

import './Inovation.css'

const cardsData = [
  {
    name: 'Paulo Humaitá',
    ocupation: 'CEO',
    imgUrl: 'https://media-exp3.licdn.com/dms/image/C4E03AQG5uODaBPz9jg/profile-displayphoto-shrink_200_200/0/1615645182376?e=1629936000&v=beta&t=j3IXpaiY1NEqu_b_JUwrZJx7uljrSz0Kg0Xqpez3mw4',
    linkedinUrl: 'https://www.linkedin.com/in/paulo-humaita/'
  },
  {
    name: 'Guto Jardim',
    ocupation: 'Startup Partner',
    imgUrl: 'https://media-exp3.licdn.com/dms/image/C4E03AQFayySJvyxYww/profile-displayphoto-shrink_200_200/0/1580080555373?e=1629936000&v=beta&t=hAQUhygpcrp9vYK9ONtTUj8-ByTUbgzhR1IlyS7C0xo',
    linkedinUrl: 'https://www.linkedin.com/in/gutojardim/'
  },
  {
    name: 'Roberto Tsukino',
    ocupation: 'Growth Hacker',
    imgUrl: 'https://media-exp3.licdn.com/dms/image/C4D03AQFZTm1ne390BQ/profile-displayphoto-shrink_200_200/0/1610387120179?e=1629936000&v=beta&t=3ZyVdoyDN8U4UWhs0GdjFao5tWqEtXt3ZE9AQFZCPRY',
    linkedinUrl: 'https://www.linkedin.com/in/roberto-tsukino/'
  },
  {
    name: 'Ana Zechmann',
    ocupation: 'Startup Partner',
    imgUrl: 'https://media-exp3.licdn.com/dms/image/C4E03AQGdSuc3KhIRCg/profile-displayphoto-shrink_200_200/0/1600579646890?e=1629936000&v=beta&t=o80e1YgY1rzQKv_y7bkuhkt4gvaQMJ51w0sCsAefdso',
    linkedinUrl: 'https://www.linkedin.com/in/anazechmann/'
  },
]

const InovationSection = () => {
  return(
    <div className="inovation-wrapper">
      <h2 className="inovation-title">
        Ninguém inova sózinho!
      </h2>
      <h3 className="inovation-subtitle">
        O squad de inovação da Bluefields é seu aliado para uma empresa mais ágil, com cultura de inovação e times trabalhando como startups.
      </h3>
      <span className="message">
        Sinta-se à vontade para nos adicionar no LinkedIn e enviar um mensagem :)
      </span>
      <div className="cardList">
        {cardsData.map((cardItem, index) => {
          return (
            <a className="cardItem" key={index} href={cardItem.linkedinUrl ?? 'https://google.com'}>
              <img src={cardItem.imgUrl} alt={`${cardItem.name} profile avatar`} />
              <div className="stamp">
                <h4 className="name">{cardItem.name}</h4>
                <h5 className="ocupation">{cardItem.ocupation}</h5>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default InovationSection