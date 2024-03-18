
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], 
      },
    reducers: {
        add: (state, action) => {
            const { _id, title, price } = action.payload;
            const existingItem = state.items.find(item => item._id === _id);
            if (existingItem) {
              
              existingItem.quantity++;
            } else {
            
              state.items.push({ ...action.payload, quantity: 1 });
            }
          },
        
          remove: (state, action) => {
            const { _id } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item._id === _id);
            if (existingItemIndex !== -1) {
              const existingItem = state.items[existingItemIndex];
              if (existingItem.quantity > 1) {
                existingItem.quantity--;
              } else {
                state.items.splice(existingItemIndex, 1);
              }
            }
          },
        
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;