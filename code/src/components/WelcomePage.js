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
        //console.log(game.actions.setUsername(name))
        dispatch(game.actions.setUsername(name))
        setName('')
    }

    return(
        <>
            <form onSubmit={onNameSet}>
                <input 
                    placeholder="Write your username"
                    type='text'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <button
                    type="submit"
                >Submit</button>
            </form>
            {/* {name && <WelcomeMessage username={name}/>} Fel name/username, se nedan*/}
            {userName && <WelcomeMessage userName={userName}/>}
        </>
    )
}

export default WelcomePage