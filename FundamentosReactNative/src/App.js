import React from  'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro' 
import Default, { Comp1, Comp2 } from './components/Multi' 
import MinMax from './components/MinMax' 
import Aleatorio from './components/Aleatorio' 
import Titulo from './components/Titulo' 
import Botao from './components/Botao' 
import Contador from './components/Contador' 
import Pai from './components/direta/Pai'
/*import Pai from './components/indireta/Pai'*/
import ContadorV2 from './components/contador/ContadorV2'
import DiferenciarAndroidIOS from './components/DiferenciarAndroidIOS'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import IfUsuarioLogado from './components/IfUsuarioLogado'

export default () => (
<SafeAreaView style = {style.App}>
    <IfUsuarioLogado usuario = {{nome: 'Gui', email: 'gui@gui.com'}}/>

    {/*<Familia>
        <Membro nome = "Bia" sobrenome = "Arruda"></Membro>
        <Membro nome = "Bia" sobrenome = "Arruda"></Membro>
    </Familia>
    <Familia>
        <Membro nome = "Ana" sobrenome = "Silvia"></Membro>
        <Membro nome = "Gui" sobrenome = "Silvia"></Membro>
    </Familia>

    <ParImpar num = {2}/>
    <DiferenciarAndroidIOS />
    <ContadorV2 />
    <Pai />   
    <Pai />
    <Contador inicial = {100} passo ={5}/>
    <Contador />
    <Botao />
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