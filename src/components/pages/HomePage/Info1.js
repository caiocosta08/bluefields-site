import React, {useState} from 'react'
import './Info1.css'
import repite from '../../../imgs/repite.png'
import ReactPlayer from 'react-player'
import Carousel from "react-elastic-carousel"
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Item from "../../Item"
import foguete from '../../../imgs/Vector.png'
import daily from '../../../imgs/daily.png'
import maos from '../../../imgs/hand-shake.png'
import prof from '../../../imgs/teaching.png'
import predio from '../../../imgs/Vector1.png'
import polvo from '../../../imgs/Vector2.png'
import networking from '../../../imgs/networking.png'
import free from '../../../imgs/Vector3.png'
import conection from '../../../imgs/conection.png'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];



function Info1() {

    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);

    const [click2, setClick2] = useState(false);
    const handleClick2 =() => setClick2(!click2);

    const [click3, setClick3] = useState(false);
    const handleClick3 =() => setClick3(!click3);

    const [click4, setClick4] = useState(false);
    const handleClick4 =() => setClick4(!click4);

    const [click5, setClick5] = useState(false);
    const handleClick5 =() => setClick5(!click5);

    const [click6, setClick6] = useState(false);
    const handleClick6 =() => setClick6(!click6);

    const [click7, setClick7] = useState(false);
    const handleClick7 =() => setClick7(!click7);

    const [click8, setClick8] = useState(false);
    const handleClick8 =() => setClick8(!click8);

    const [click9, setClick9] = useState(false);
    const handleClick9 =() => setClick9(!click9);

    const [click10, setClick10] = useState(false);
    const handleClick10 =() => setClick10(!click10);

    return (
        <div>
           {/* <div className="home__section"> */}
               <div className="container">
                   <div className="row home-row" style={{ display:'flex',
                    flexDirection: 'start'}}>
                       <div className="col">
                            <h1 className="nessa">Quem est?? nessa?</h1> 
                                    <p className="inova">Neste programa de acelera????o e inova????o aberta, a Bluefields Aceleradora re??ne startups e
                                            empresas inovadoras para fomentar os setores da converg??ncia biodigital no Brasil.
                                    </p>
                       </div>
                   </div>
                         {/* <div className="row home-row" >
                       <div className="col">
                           <div className="tabs">
                               
                                   
                                       <input type="radio" name="tabs" id="tab1" checked={true}></input>
                                       <label for="tab1">
                                           <img src={repite}/>
                                       </label>                                  
                                   
                                       <input type="radio" name="tabs" id="tab2"></input>
                                       <label for="tab2">
                                           <img src={repite}/>
                                       </label>
                                       
                                       <input type="radio" name="tabs" id="tab3"></input>
                                       <label for="tab3">
                                           <img src={repite}/>
                                       </label>                                  
                                   
                                       <input type="radio" name="tabs" id="tab4"></input>
                                       <label for="tab4">
                                           <img src={repite}/>
                                       </label>
                                   
                                       <input type="radio" name="tabs" id="tab5"></input>
                                       <label for="tab5">
                                           <img src={repite}/>
                                       </label>
                                                                     
                                    <div className="tab">
                                            <div className="fundoNome itemC">
                                                    <div className="tab_text">
                                                        <h2 className="Nemp">Nome da empresa1</h2>
                                                            <p className="DescEmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </p>
                                                    </div>                                        
                                                    <ReactPlayer width='50%' style={{marginTop:"42px"}} url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>

                                            </div>
                                            <div className="fundoNome itemC">
                                                    <div className="tab_text">
                                                        <h2 className="Nemp">Nome da empresa2</h2>
                                                            <p className="DescEmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </p>
                                                    </div>                                        
                                                    <ReactPlayer width='50%' style={{marginTop:"42px"}} url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>

                                            </div>
                                            <div className="fundoNome itemC">
                                                    <div className="tab_text">
                                                        <h2 className="Nemp">Nome da empresa3</h2>
                                                            <p className="DescEmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </p>
                                                    </div>                                        
                                                    <ReactPlayer width='50%' style={{marginTop:"42px"}} url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>

                                            </div>
                                            <div className="fundoNome itemC">
                                                    <div className="tab_text">
                                                        <h2 className="Nemp">Nome da empresa4</h2>
                                                            <p className="DescEmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </p>
                                                    </div>                                        
                                                    <ReactPlayer width='50%' style={{marginTop:"42px"}} url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>

                                            </div>
                                            <div className="fundoNome itemC">
                                                    <div className="tab_text">
                                                        <h2 className="Nemp">Nome da empresa5</h2>
                                                            <p className="DescEmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </p>
                                                    </div>                                        
                                                    <ReactPlayer width='50%' style={{marginTop:"42px"}} url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>

                                            </div>
                                    </div>
                               </div>

                           </div>
                       </div> */}
                   {/* <div className="row home-row">
                    <div className="col">
                            <div className="flex">
                                    <img src={repite}/>
                                    <img src={repite}/>
                                    <img src={repite}/>
                                    <img src={repite}/>
                                    <img src={repite}/>
                            </div>
                        </div>
                   </div> */}
                   {/* <div className="row home-row fundoNome">
                    <div className="col">
                            <h2>Nome da empresa</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                   </div> */}
                   <div className="row home-row">
                    <div className="col">
                    <h1 className="beneficios">Quais os benef??cios para as Startups selecionadas?</h1>
                        <div className="carrosselStyle">
                           <Carousel breakPoints={breakPoints}>
                                <Item>
                                    <img className="imgCarrossel" src={foguete}/>
                                    <p className="textCarrossel">
                                        Metodologia de acelera????o comprovada. Somos parte de uma rede global de aceleradoras, j??
                                        aceleramos milhares de neg??cios em todo o mundo e quase 200 no Brasil.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"  src={daily}/>
                                    <p className="textCarrossel">
                                        Sprints de acelera????o gamificados. Ser??o bootcamps tem??ticos mensais com planos de a????o com
                                        muita m??o na massa para acelerar sua startup.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"  src={maos}/>
                                    <p className="textCarrossel">
                                        Startup Partner. Seu time ganha um profissional do time da Bluefields dedicado em colaborar no
                                        crescimento do seu neg??cio atrav??s de agilidade e conex??es.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"  src={prof}/>
                                    <p className="textCarrossel">
                                        Mentoria com experts. Nossa rede de +100 mentores especializados estar?? ?? disposi????o da sua
                                        startup.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"   src={predio}/>
                                    <p className="textCarrossel">
                                        Escola de CEOs. Mentorias espec??ficas de lideran??a e cultura para os founders da sua startup.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"   src={polvo}/>
                                    <p className="textCarrossel">
                                        KB framework. Modelo ??nico no mundo de prop??sito e impacto, com foco nos 4 Ps (purpose, people,
                                        profit, planet)
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"   src={networking}/>
                                    <p className="textCarrossel">
                                        Conex??o com grandes empresas. Contato direto com as empresas co-organizadoras do programa
                                        com possibilidade real de fazer neg??cio, como rodar POCs (Provas de Conceito) facilitadas pela
                                        Bluefields.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"   src={free}/>
                                    <p className="textCarrossel">
                                        Equity-free: n??o ficamos com nenhum percentual (%) do seu neg??cio e a acelera????o ainda ?? gratuita
                                        para a startup.
                                    </p>
                                </Item>
                                <Item>
                                    <img className="imgCarrossel"  src={conection}/>
                                    <p className="textCarrossel">
                                        Acesso a capital. Somos pr??ximos das principais redes de investidores-anjos e fundos de Venture
                                        Capital no Brasil e no mundo, e adoramos recomendar as melhores startups para nossos
                                        investidores.
                                    </p>
                                </Item>
                            </Carousel>
                        </div>
                        </div>
                   </div>
                        <div className="row home-row fundoCF">
                            <div className="col">
                                <h1 className="beneficios">COMO FUNCIONA</h1>
                                <h1 className="Cfunciona">O PROCESSO DE ACELERA????O ?</h1>
                                <p className="textCf">Procuramos healthtechs, foodtechs, agrotechs mas tamb??m startups no geral que tenham sinergia
                                     de neg??cio com as empresas do bidigital.</p>
                                <div className="div-btn">
                                    <div className="selecao">
                                        <h1>SELE????O: AT?? DIA 31/05/2021</h1>
                                    </div>
                                        <button className='btn-confira'>
                                               <span className="label-btn ">CONFIRA OS TERMOS E CONDI????ES</span>
                                        </button>
                                </div>
                            </div>
                        </div>
                        <div className="row home-row">
                            <div className="col">
                                <div className="div-btn">
                                    <div className="fases border-form-btn">
                                        <h1 className="faseNumber">FASE 1</h1>
                                        <h1 className="faseDescription">INSCRI????O</h1>
                                        <p className="faseInfo">A inscri????o ?? realizada por meio do formul??rio abaixo</p>
                                        <button className="Form-btn">ABRIR FORMUL??RIO</button>
                                    </div>
                                    <div className="fases border-form-btn">
                                        <h1 className="faseNumber">FASE 2</h1>
                                        <h1 className="faseDescription">DEEP DIVE</h1>
                                        <p className="faseInfo">Entrevista com founders para avaliar maturidade de desenvolvimento e sinergias de neg??cio.</p>
                                    </div>
                                    <div className="fases">
                                        <h1 className="faseNumber">FASE 3</h1>
                                        <h1 className="faseDescription">COMIT?? DE SELE????O</h1>
                                        <p className="faseInfo">Feedback para todas startups avaliadas e envio do convite final para as selecionadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row home-row">
                            <div className="col">
                                <h1 className="Programas">COMO NOSSOS PROGRAMAS</h1>
                                <h1 className="Impactam">IMPACTAM SEU NEG??CIO</h1>
                                <div className="carrosselStyle">
                                    <Carousel breakPoints={breakPoints}>
                                        <Item>
                                            <ReactPlayer width='100%' className="VideoCarrossel" url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                                            <div>
                                            <p className="ClientTestimony">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                            <p className="ClientName">Jo??o</p>
                                            </div>
                                            
                                        </Item>
                                        <Item>
                                            <ReactPlayer width='100%' className="VideoCarrossel" url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                                            <div>
                                            <p className="ClientTestimony">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                            <p className="ClientName">Jo??o</p>
                                            </div>
                                            
                                        </Item>
                                        <Item>
                                            <ReactPlayer width='100%' className="VideoCarrossel" url="https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s"/>
                                            <div>
                                            <p className="ClientTestimony">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                                            <p className="ClientName">Jo??o</p>
                                            </div>
                                            
                                        </Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                            <div className="row home-row fundoAzul">
                                <div className="col">
                                    <h1 className="faq">F.A.Q</h1>
                                    <div onClick={handleClick}>
                                        {click ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>QUEM ?? A BLUEFIELDS?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>QUEM ?? A BLUEFIELDS?</p> }
                                    </div>
                                    <ul className={click ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick2}>
                                        {click2 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>COMO FA??O PARA ME INSCREVER NO THE BIG BAM?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>COMO FA??O PARA ME INSCREVER NO THE BIG BAM?</p> }
                                    </div>
                                    <ul className={click2 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick3}>
                                        {click3 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>QUE TIPO DE NEG??CIO PODE PARTICIPAR DO THE BIG BAM?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>QUE TIPO DE NEG??CIO PODE PARTICIPAR DO THE BIG BAM?</p> }
                                    </div>
                                    <ul className={click3 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick4}>
                                        {click4 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>O QUE O PROGRAMA OFERECE?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>O QUE O PROGRAMA OFERECE?</p> }
                                    </div>
                                    <ul className={click4 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick5}>
                                        {click5 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>EM QUAL EST??GIO MEU PROGRAMA PRECISA ESTAR PARA PARTICIPAR?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>EM QUAL EST??GIO MEU PROGRAMA PRECISA ESTAR PARA PARTICIPAR?</p> }
                                    </div>
                                    <ul className={click5 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick6}>
                                        {click6 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>N??O MORO EM S??O PAULO, POSSO ME INSCREVER?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>N??O MORO EM S??O PAULO, POSSO ME INSCREVER?</p> }
                                    </div>
                                    <ul className={click6 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick7}>
                                        {click7 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>QUAIS OS CRIT??RIOS DE SELE????O PARA O THE BIG BAM?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>QUAIS OS CRIT??RIOS DE SELE????O PARA O THE BIG BAM?</p> }
                                    </div>
                                    <ul className={click7 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    <div onClick={handleClick8}>
                                        {click8 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>QUAL O VALOR PARA PARTICIPAR DO THE BIG BAM?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>QUAL O VALOR PARA PARTICIPAR DO THE BIG BAM?</p> }
                                    </div>
                                    <ul className={click8 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                        <div onClick={handleClick9}>
                                        {click9 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>ONDE ACONTECER??O AS ATIVIDADES DE ACELERA????O?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>ONDE ACONTECER??O AS ATIVIDADES DE ACELERA????O?</p> }
                                    </div>
                                    <ul className={click9 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>
                                    </ul>
                                    <div onClick={handleClick10}>
                                        {click10 ? <p className="TextItem"><IoIosArrowDropupCircle className="iconsQuest"/>A BLUEFIELDS PEGA EQUITY DOS NEG??CIOS QUE PARTICIPAM DO THE BIG BAM?</p> : <p  className="TextItem"> <IoIosArrowDropdownCircle className="iconsQuest"/>A BLUEFIELDS PEGA EQUITY DOS NEG??CIOS QUE PARTICIPAM DO THE BIG BAM?</p> }
                                    </div>
                                    <ul className={click10 ? 'active' : 'menu-item'}>
                                        <li className="trecho">
                                        A Bluefields Development ?? uma aceleradora de neg??cios com foco no impacto e em
                                        tecnologia, que atua no ???ch??o de f??brica???, acelerando neg??cios e conectando grandes
                                        empresas com o ecossistema de inova????o. Tudo permeado pela miss??o de transformar
                                        vidas e influenciar pessoas para um mundo melhor.
                                        </li>
                                    </ul>

                                </div>
                            </div>
                    
               </div>
           {/* </div> */}
        </div>
    )
}

export default Info1
