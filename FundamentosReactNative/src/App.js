import React from  'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro' 
import Default, { Comp1, Comp2 } from './components/Multi' 
import MinMax from './components/MinMax' 
import Aleatorio from './components/Aleatorio' 
import Titulo from './components/Titulo' 
import Botao from './components/Botao' 
import Contador from './components/Contador' 


export default () => (
<SafeAreaView style = {style.App}>
    <Contador inicial = {100} passo ={13}/>
    <Contador />
    {/*<Botao />
    <Titulo principal = "Cadastro Produto" secundario = "Tela de Cadastro"/>
    <Aleatorio menor = {1} maior = {1000}/>
    <MinMax min = "3" max="20"/>
    <Default />
    <Comp1 />
    <Comp2 /> 

    <Primeiro />*/}
</SafeAreaView>)

const style = StyleSheet.create({ 
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})