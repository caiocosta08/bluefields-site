import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Top.css';

function Top({lightBg,topLine,lightText,lightTextDesc,headline,description,buttonLabel,scrollDownTo, caminho, corporative = false
}) {
    return (
        <div className={`${lightBg ? 'home__hero-section fundoImage' : 'home__hero-section darkBg'} ${corporative ? 'fundoCorporative' : ''}`}>
            <div className="container">
                <div className="home__hero-text-wrapper">
                    <div className="top-line">{topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                    {caminho && (
                        <Link to={caminho}>
                            <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                        </Link>
                    )}
                    {scrollDownTo && (
                        <a href={scrollDownTo}>
                            <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Top;
