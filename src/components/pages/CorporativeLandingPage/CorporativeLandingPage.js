import React from 'react';
import Top from '../../Top';
import InovationSection from './components/Inovation/Inovation';
import InovationHelpSection from './components/InovationHelp/InovationHelp';

export const pageData = {
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'O futuro pertence às grandes empresas que inovam como startups',
  description: 'Antes a competição era Empresa A versus Empresa B; agora o jogo virou para Ecossistema A versus Ecossistema B. É aqui onde entramos! Vamos te ajudar a capturar, executar e criar uma cultura de inovação!',
  buttonLabel: 'Venha falar conosco!',
  imgStart:'',
  caminho: '/facilitadores',
  corporative: true
}

function Home() {
  return (
    <div>
      <Top {...pageData}/>
      <InovationSection />
      <InovationHelpSection />
    </div>
  )
}

export default Home
