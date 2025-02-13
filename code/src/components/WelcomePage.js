import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import game from '../reducers/game'
import WelcomeMessage from './WelcomeMessage'
import { WelcomePageContainer, HeaderContainerStyling, MainHeader, FormContainer, ButtonContainer } from './styled-components/WelcomePageStyling'

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
               <WelcomePageContainer>
                   <div class="nes-container is-rounded is-dark">
                        <HeaderContainerStyling>
                            <MainHeader>Technigo Labyrinth game</MainHeader>
                        </HeaderContainerStyling>
                        <FormContainer onSubmit={onNameSet}>
                            <div class="nes-field">
                                <label for="name_field">Enter a username:</label>
                                <input 
                                    type="text" 
                                    id="name_field" 
                                    class="nes-input"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                            </div>
                            <ButtonContainer>
                                <button 
                                    type="submit" 
                                    class="nes-btn is-success"
                                    aria-label='Submit username'
                                >
                                    Submit
                                </button>
                            </ButtonContainer>
                        </FormContainer>
                    </div>
                </WelcomePageContainer>
           )} 
           {userName && <WelcomeMessage userName={userName} />}
        </>
    )
}

export default WelcomePage