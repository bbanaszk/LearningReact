import React from 'react';
import Jokes from './components/Jokes';
import jokes from './components/jokesData';

export default function App() {
    const jokeElements = jokes.map( joke => {
        return <Jokes
            key={joke.setup}
            setup={joke.setup}
            punchline={joke.punchline}/>
        })
    return(
        <div>
            {jokeElements}
        </div>
    )
}