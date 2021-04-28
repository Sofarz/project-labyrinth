import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import game from '../reducers/game'

import WelcomeMessage from './WelcomeMessage'

const WelcomePage = () => {
    const [name, setName] = useState('')
    const userName = useSelector((store) => store.game.username)

    const dispatch = useDispatch()

    const onNameSet = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUsername(name))
        setName('')
    }

    return(
        <>
           {!userName && (
               <div>
                    <header>
                        <h1>Add title of game</h1>
                        <p>Welcome text.</p>
                    </header>
                    <form onSubmit={onNameSet}>
                    <input 
                        placeholder="Write your username"
                        type='text'
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <button
                        type="submit"
                    >Start game!</button>
                    </form>
                </div>
           )} 
            {userName && <WelcomeMessage userName={userName} />}
        </>
    )
}

export default WelcomePage