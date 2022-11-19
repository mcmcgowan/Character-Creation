import React, { Component } from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';

import Character from './components/Character';
import CreateCharacter from './components/CreateCharacter';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import LogIn from './components/Login';

import './styles/main.scss';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<LogIn/>} />
                <Route path='/create' element={<CreateCharacter/>} />
                <Route path='/view' element={<Character/>} />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Router>          
    )

}