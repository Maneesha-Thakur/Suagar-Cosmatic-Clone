import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home/Home'
import ProductDescription from '../pages/ProductDescription'
import Card1 from '../pages/card/Card1'
import Card2 from '../pages/card/Card2'
import Card3 from '../pages/card/Card3'
import NotifyMe from '../pages/card/NotifyMe'
import Cart from '../pages/card/Cart'

import { Route,Routes } from 'react-router-dom'

import { Box } from '@chakra-ui/react'


const Allroute = () => {
  return (
    <>

   
     
   <Box maxw='full' >
        
  <Routes>
    <Route path='/' element={<Home/>} ></Route>
    
    <Route path='login' element={<Login/>} ></Route>
    <Route path='register' element={<Register/>} ></Route>
    <Route path="/product/:id" element={<ProductDescription />} />

    <Route path='/card1' element={<Card1/>} ></Route>
    <Route path='/card2' element={<Card2/>} ></Route>
    <Route path='/card3' element={<Card3/>} ></Route>
    <Route path='/notify-me/:id' element={<NotifyMe/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
 

  </Routes>


        </Box>  
    </>
  )
}

export default Allroute
