
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishListProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
<CartProvider>
<WishlistProvider>

  <ChakraProvider>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </ChakraProvider>,
</WishlistProvider>
</CartProvider>
  </AuthContextProvider>
)


