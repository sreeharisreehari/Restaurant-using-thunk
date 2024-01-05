import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 export const fetchrestaurant=createAsyncThunk(`restaurantlist/fetchrestaurant`,()=>{
    const result=axios.get('/restaurant.json').then
    (respone=>respone.data.restaurants)
    console.log(result);
    return result
})






const restaurantslice=createSlice({
    name:'restaurantlist',
    initialState:{
        loading:false, 
        searchrestaurant:[], 
        // pending


        alrestaurant:[],
        // resolve
        error:""
        // reject
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchrestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.alrestaurant=action.payload
            state.error=""
        })
        builder.addCase(fetchrestaurant.rejected,(state,action)=>{
            state.loading=false
            state.alrestaurant=""
            state.error=action.error.message
        })
    },
    // reducers:{
    //     search:(state,action)=>{
    //         state.alrestaurant.filter(item=>item.neighbourhood.toLowerCase().includes(action.payload))
    //     }
    // }
    reducers:{
        search:(state,action)=>{
          state.alrestaurant =  state.searchrestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }

    }
})
export const{search}=restaurantslice.actions
export default restaurantslice.reducer