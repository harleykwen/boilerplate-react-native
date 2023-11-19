import React from 'react'
import Router from './src/router/Router'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    )
}

export default App