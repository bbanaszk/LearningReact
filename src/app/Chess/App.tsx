import React from 'react';
import BoardLayoutMain from './components/BoardLayoutMain';
import BoardLayoutSidebar from './components/BoardLayoutSidebar';
import './styles.css';

export default function App() {
    return(
        <div className="background">
            <BoardLayoutMain />
            <BoardLayoutSidebar />
        </div>
    )
}