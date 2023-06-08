import { configureStore } from '@reduxjs/toolkit'
import isloading from './slices/isloading.slice'
import products from './slices/products.slice'
import cart from './slices/cart.slice'

export default configureStore({
    reducer: {
        isloading,
        products,
        cart
    }
})


// redux thunk / middlewares
//Se ejecutan entre el dispatch y la accion


