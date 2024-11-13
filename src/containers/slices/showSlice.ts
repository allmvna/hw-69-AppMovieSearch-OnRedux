import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface IShowFromAPI {
    id: number
    name: string;
}

interface IShowResponse {
    show: IShowFromAPI;
}

interface IShowState{
    shows: IShowFromAPI[];
    isLoading: boolean;
    error: boolean;
}

const initialState: IShowState = {
    shows: [],
    isLoading: false,
    error: false,
};


export const fetchShows = createAsyncThunk(
    'show/fetchShows',
    async (name: string) => {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${name}`);
        return response.data.map((key: IShowResponse) => ({
            id: key.show.id,
            name: key.show.name
        }));
    }
);

export const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShows.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchShows.fulfilled, (state, action) => {
                state.isLoading = false;
                state.shows = action.payload;
            })
            .addCase(fetchShows.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            });
    }
});

export const showReducer = showSlice.reducer;
