import React, { Component } from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Character from './components/Character';
import CreateCharacter from './components/CreateCharacter';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';

import './styles/main.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/create' element={<CreateCharacter/>} />
                        <Route path='/view' element={<Character/>} />
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                </Router>                
            </Provider>

        );
    }
}

export default App;