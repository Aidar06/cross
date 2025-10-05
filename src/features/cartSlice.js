import { createSlice } from '@reduxjs/toolkit'

// Загружаем корзину из localStorage
 const savedCart = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: savedCart,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = []
            localStorage.setItem('cart', JSON.stringify([]))
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
