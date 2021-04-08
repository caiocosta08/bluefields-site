import React from 'react';
import Top from '../../Top';
import {home_ObjOne} from './Data';
import Info2 from './Info2';

function Home() {
    return (
        <div>
            <Top {...home_ObjOne}/>
            <Info2/>
        </div>
    )
}

export default Home
