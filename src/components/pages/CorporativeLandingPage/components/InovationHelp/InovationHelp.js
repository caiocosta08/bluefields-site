import React from 'react'

import './InovationHelp.css'

import BAMlogo from '../../../../../imgs/BAM-logo.png'
import squadLogo from '../../../../../imgs/squad-logo.png'
import buildingIcon from '../../../../../imgs/building.svg'
import userIcon from '../../../../../imgs/user.svg'
import dtxIcon from '../../../../../imgs/DTX.svg'
import rocketIcon from '../../../../../imgs/rocket.svg'
import groupIcon from '../../../../../imgs/group-user.svg'
import heartIcon from '../../../../../imgs/heart.svg'

const cardsData = [
  {
    title: 'THE BIG BAM',
    subtitle: 'Programa verticalizado de aceleração corporativa com inovação aberta entre startups e grandes empresas',
    logo: BAMlogo,
    link: 'http://www.bluefieldsdev.com/biodigital/',
    entregaveis: 'Intercâmbio de conhecimento, cultura e geração de negócios entre granders empresas e startups',
    className: 'bigbam'
  },
  {
    title: 'SQUAD 001',
    subtitle: 'Para empresas que querem se reinventar ao formar os primeiros squads de inovação',
    logo: squadLogo,
    link: 'http://www.bluefieldsdev.com/biodigital/',
    entregaveis: 'Experiência e vivência digital para testar novos produtos e mercados de forma ágil; desenvolvimento de intraempreendedores; aplicação das principais ferramentas da cultura startup',
    className: 'squad'
  },
]

const infoListData = [
  {
    icon: buildingIcon,
    title: '20',
    subtitle: 'Grandes empresas participantes dos programas',
    className: 'building'
  },
  {
    icon: userIcon,
    title: '+30.000',
    subtitle: 'Pessoas impactadas indiretamente com transformação digital',
    className: 'user'
  },
  {
    icon: dtxIcon,
    subtitle: 'Maior programa de experiência digital do Brasil',
    className: 'dtx'
  },
  {
    icon: rocketIcon,
    title: '150',
    subtitle: 'Pesquisadores engajados no processo de inovação',
    className: 'rocket'
  },
  {
    icon: groupIcon,
    title: '15',
    subtitle: 'Squads de inovação rodando simultaneamente',
    className: 'group'
  },
  {
    icon: heartIcon,
    title: '9.5',
    subtitle: 'Índice de satisfação dos participantes',
    className: 'heart'
  },
]

const InovationHelpSection = () => {
  return(
    <div className="inovation-help-wrapper">
      <div className="headdings">
        <h2 className="inovation-help-title">
          COMO PODEMOS AJUDAR O SEU ECOSSISTEMA DE INOVAÇÃO?
        </h2>
        <h3 className="inovation-help-subtitle">
          Todo ecossistema de inovação precisa de uma aceleradora de startups para ajudar a ‘fazer acontecer’ no chão de fábrica da inovação
        </h3>
      </div>
      <div className="cardList">
        {cardsData.map((cardItem, index) => {
          return (
            <div className="cardItem" key={index}>
              <div className="content">
                <img className={cardItem.className} src={cardItem.logo} alt="logo" />
                <h2 className="content-title">{cardItem.title}</h2>
                <h3 className="content-subtitle">{cardItem.subtitle}</h3>
                <h3 className="entregaveis">Entregáveis</h3>
                <h4 className="entregaveis-text">{cardItem.entregaveis}</h4>
              </div>
              <a href={cardItem.link ?? 'https://google.com'}>
                SAIBA MAIS
              </a>

            </div>
          )
        })}
      </div>
      <div className="pegada">
        <div className="titles">
          <h2 className="content-title">
            NOSSA PEGADA
          </h2>
          <h2 className="content-subtitle">
            INOVADORA
          </h2>
        </div>
        <h3 className="description">
          Foi através da experiência adquirida em diversos batches de aceleração que criamos uma nova unidade de negócio. Foi assim que Bluefields Corporate ganhou vida!<br /><br />
          Nossos clientes visionários foram o Grupo Jacto e a Universidade Presbiteriana Mackenzie, agora essa jornada conta também com estes números ao lado. Vamos juntos por um Brasil mais inovador?
        </h3>
        <div className="infoList">
          {infoListData.map((infoItem,index) => {
            return (
              <div className="infoItem" key={index}>
                <img src={infoItem.icon} alt="illustrative icon" />
                <h3 className="title">{infoItem.title}</h3>
                <h3 className="subtitle">{infoItem.subtitle}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default InovationHelpSection