import React, { useState } from "react"

import "./Ebook.css"

const EbookSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return(
    <div className="ebook-session-wrapper" id="ebook-session-wrapper">
      <h2 className="title">BAIXE NOSSO E-BOOK GRATUITO</h2>
      <h3 className="subtitle">Quer saber como aumentar a competitividade da sua empresa a partir de iniciativas de inovação e startup?</h3>
      <span className="message">Baixe agora nosso guia sobre inovação corporativa e descubra muito do que você pode fazer para criar vantagens competitivas! Boa leitura!</span>
      <div className="form">
        <div className="inputsWrapper">
          <input type="text" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type="button" onClick={() => {
          // alert('Funcionalidade em desenvolvimento')
          console.log({
            name,
            email
          })
        }}>BAIXAR E-BOOK-GRATUITO</button>
      </div>
    </div>
  )
}

export default EbookSection