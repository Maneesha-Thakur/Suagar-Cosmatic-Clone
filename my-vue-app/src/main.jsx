import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>

  <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>,
  </AuthContextProvider>
)

