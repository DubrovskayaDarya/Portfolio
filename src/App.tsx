import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import MainBlock from "./components/Main/MainBlock";
import SkillsBlock from "./components/Skills/SkillsBlock";
import {ProjectsBlock} from "./components/Projects/ProlectsBlock";
import {Remote} from "./components/Remote/Remote";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
        <div >
            <Header/>
            <MainBlock/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
