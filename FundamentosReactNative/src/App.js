import React from  'react'
import { SafeAreaView } from 'react-native'

import Primeiro from './components/Primeiro' 
import Default, { Comp1, Comp2 } from './components/Multi' 


export default () => (
<SafeAreaView>
    <Default />
    <Comp1 />
    <Comp2 />
    

    <Primeiro />
</SafeAreaView>)