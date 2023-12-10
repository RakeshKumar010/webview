import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WebsiteView from './components/WebsiteView'
import AlertPage from './components/AlertPage'
export const MyContext = createContext()
const x=10
const App = () => {
  const [show,setShow]=useState(true)
  useEffect(()=>{
setTimeout(()=>{
  setShow(false)
},60000)
  },[show])
  const Stack = createNativeStackNavigator()
  return (
    <MyContext.Provider value={{show,setShow}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={show?WebsiteView:AlertPage} options={{title:'Demo By Seedfist',headerTitleStyle:{
        color:"#ffff"
        },headerStyle:{
          backgroundColor:"#3f66da",
        
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </MyContext.Provider>
  )
}

export default App