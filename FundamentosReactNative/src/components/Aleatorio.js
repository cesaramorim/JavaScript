import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default props => {

        const {maior, menor} = props
        const delta = maior - menor + 1
        const valor = parseInt(Math.random() * delta) + menor

    return (
    <Text style = {Estilo.txtG}>
        O valor aleatorio obtido foi {valor}!
    </Text>
    
    )
}

