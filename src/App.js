import React, {useState} from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from 'styled-theming'
// import theme from '@rebass/preset'
import {
  Box, Text, Button
} from 'rebass'
const theme =  ({mode}) =>{
 return  {colors: {
    primary :  mode == 'dark' ? 'black' : mode == 'light' ?  'white' : mode == 'pink' ? 'papayawhip' : mode == 'cyan' ? 'cyan' : 'red',
    secondary :  mode == 'dark' ? 'white' : mode == 'light' ?  'pink' : mode == 'pink' ? 'cyan' : mode == 'cyan' ? 'red' : 'red'
  }}
}

const list = [
  'dark', 'light','pink', 'cyan'
]
let index = 0
export const App = props => {
  const [mode, setmode] = useState('dark')
  const handleThemeChange = () => {
    console.log('in theme chane', index)
    if (index < list.length-1){
      index ++
      setmode(list[index])
    }
    else{
      setmode(list[0])
      index = 0
    }
  }
  return (
    <ThemeProvider theme={theme({mode : mode})}>
    {console.log('mode', mode)}
      <Box p = {50} bg = {'primary'}> <Text color = 'secondary'>tets</Text></Box>
      <Button bg = {'secondary'} color = "primary" onClick = {handleThemeChange}>click to change theme</Button>

    </ThemeProvider>
  )
}