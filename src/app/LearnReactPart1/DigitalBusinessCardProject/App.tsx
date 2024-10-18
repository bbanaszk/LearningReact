import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
    return(
        <div className='div--app'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}