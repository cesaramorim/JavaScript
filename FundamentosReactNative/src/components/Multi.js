import React from 'react'
import { Text } from 'react-native'

export default function Comp () { //Export Default o nome não importa para o Import
    return <Text>Compon. #01</Text>
    
}
function Comp1 () { //Export sem Default o nome importa no Import
    return <Text>Compon. #02</Text>

}
function Comp2 () {
    return <Text>Compon. #03</Text>

}

export {Comp1, Comp2}