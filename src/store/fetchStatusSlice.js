import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
    name : "fetchStatus",
    initialState : {
        fetchDone : false,
        currentlyFetching :false
    },
    reducers : {
        markFetchStarted : (state,action) => {
            return state.fetchDone = true
        },
        markFetchDone : (state,action) => {
            return state.currentlyFetching = true
        },
        markFetchEnded : (state,action) => {
            return state.currentlyFetching = false
        }
    }
});

export const fetchActions = fetchStatusSlice.actions;

export default fetchStatusSlice;