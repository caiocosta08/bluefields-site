import React from 'react'

import './Investors.css'

import investorsIcon from '../../../../../imgs/investors.png'

const InvestorsSection = () => {
  return(
    <div className="investors-wrapper">
      <h2 className="title">
        TRACK RECORD 1
      </h2>
      <div className="content">
        <div className="left-content">
          <h1 className="header">
            Digital Transformation Experience
          </h1>
          <h2 className="text">
            Antes a competição era Empresa A versus Empresa B; agora o jogo virou para Ecossistema A versus Ecossistema B. É aqui onde entramos! Vamos te ajudar a capturar, executar e criar uma cultura de inovação!
          </h2>
          <a href="https://www.bluefieldsdev.com/programas/inovacao-corporativa/">
            <button>
              SAIBA MAIS
            </button>
          </a>
        </div>
        <img src={investorsIcon} alt="investors icons" />
      </div>
    </div>
  )
}

export default InvestorsSection