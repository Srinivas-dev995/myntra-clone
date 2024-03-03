import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
    name : "items",
    initialState : DEFAULT_ITEMS, // backend items should come
    reducers : {
        addInitialItems : (store,action)=>{
            return action.payload;
        }
    }
});

export const itemsAction = itemsSlice.actions;

export default itemsSlice;