import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            //recuperer le produit
            const product = action.payload;
            const isExist = state.items.find(item => product.id === item.id);
            if(isExist){
                isExist.quantity += 1;
            }else{
                state.items.push({...product, quantity: 1})
            }
        },
        incremente : (state, action) => {
            const productId = action.payload;
            const existingItem = state.items.find((item) => item.id === productId);
            if(existingItem){
                existingItem.quantity++ ;
            }
        },
        decremente: (state, action) => {
            const productId = action.payload;
            const existingItem = state.items.find((item) => item.id === productId);
            if(existingItem && existingItem.quantity > 0){
                existingItem.quantity-- ;
            }
        },
        removeFromCart: (state, action) =>{
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId)
        }
    }

})

export const {addToCart, removeFromCart, incremente, decremente} = cartSlice.actions;
export default cartSlice.reducer;