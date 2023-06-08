import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { setIsLoading } from './isloading.slice'
import getConfig from '../../utils/getConfig'

import axios from 'axios';
import { version } from 'react';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

        setCart: (state, action) => {
            return action.payload
        }

    }
})

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartThunk = () => dispatch => {

    dispatch(setIsLoading(true))

    axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
        .then(resp => {
            console.log(resp)
            dispatch(setCart(resp.data))
        })
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))
}

export const addToCartProductThunk = data => dispatch => {

    dispatch(setIsLoading(true))

    axios
        .post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, data, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error => alert("Ups fino pizu"))
        .finally(() => dispatch(setIsLoading(false)))
}

export const updateRateThunk = (id, rate) => dispatch => {

    dispatch(setIsLoading(true))

    const body = {

        quantity: rate

    }

    axios
        .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, body, getConfig)
        .then(() => dispatch(getCartThunk()))
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))

}

export const purchasesCartThunk = () => dispatch => {

    dispatch(setIsLoading(true))

    axios
        .post(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, {} ,getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error => console.error(error))
        .finally(() => dispatch(setIsLoading(false)))

}


