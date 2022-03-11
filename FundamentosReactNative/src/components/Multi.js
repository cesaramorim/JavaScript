import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function Comp () { //Export Default o nome não importa para o Import
    return <Text style = {Estilo.txtG}>Compon. #01</Text>
    
}
function Comp1 () { //Export sem Default o nome importa no Import
    return <Text style = {Estilo.txtG}>Compon. #02</Text>

}
function Comp2 () {
    return <Text style = {Estilo.txtG}>Compon. #03</Text>

}

export {Comp1, Comp2}