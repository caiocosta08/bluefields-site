import React, { useState } from "react"
import ReactPlayer from "react-player"

import "./Impact.css"

import leftArrowIcon from "../../../../../imgs/left-arrow.svg"
import rightArrowIcon from "../../../../../imgs/right-arrow.svg"

const impactsArray = [
  {
    videoUrl: "https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s",
    videoLabel: "Depoimento programa de inovação corporate DTX",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contentAuthor: "João"
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=FZtWV5mn8VY&t=2s",
    videoLabel: "Depoimento programa de inovação THE BIG BAM",
    contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contentAuthor: "Ricardo"
  },
]


const ImpactSection = () => {

  const [selectedItemIndex, setSelectedIndex] = useState(0)

  return(
    <div className="impact-wrapper">
      <div className="titles">
        <h2 className="title">COMO NOSSOS PROGRAMAS</h2>
        <h3 className="subtitle">IMPACTAM SEU NEGÓCIO</h3>
      </div>
      <div className="content">
        <img 
          src={leftArrowIcon} 
          alt="left arrow icon" 
          className={`icon ${selectedItemIndex === 0 ? 'inactive' : ''}`}
          onClick={selectedItemIndex !== 0 ? () => setSelectedIndex(selectedItemIndex - 1) : () => {}}
        />
          <div className="itemContent">
            <div className="videoWrapper">
              <ReactPlayer width="100%" url={impactsArray[selectedItemIndex]?.videoUrl}/>
              <span>
                {impactsArray[selectedItemIndex]?.videoLabel}
              </span>
            </div>
            <div className="infoContent">
              <h4 className="text">{impactsArray[selectedItemIndex]?.contentText}</h4>
              <span className="writer">{impactsArray[selectedItemIndex]?.contentAuthor}</span>
            </div>
          </div>
        <img 
          src={rightArrowIcon} 
          alt="right arrow icon" 
          className={`icon ${(selectedItemIndex === (impactsArray.length - 1)) ? 'inactive' : ''}`}
          onClick={(selectedItemIndex !== (impactsArray.length - 1)) ? () => setSelectedIndex(selectedItemIndex + 1) : () => {}}
        />
      </div>
      <div className="index-indicator">
        {impactsArray.map((item, index)=>{
          return (
            <div 
              className={`ball ${index !== selectedItemIndex ? 'inactive' : ''}`}
              onClick={() => setSelectedIndex(index)} 
              key={`${item.contentAuthor}${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImpactSection