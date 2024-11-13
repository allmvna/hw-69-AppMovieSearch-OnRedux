import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface IShowDetails {
    id: number;
    name: string;
    summary: string;
    genres: string;
    premiered: string;
    image: {
        medium: string;
    } | null;
}

interface IShowDetailsState {
    showDetails: IShowDetails | null;
    isLoading: boolean;
    error: boolean;
}

const initialState: IShowDetailsState = {
    showDetails: null,
    isLoading: false,
    error: false,
};


export const fetchShowDetails = createAsyncThunk(
    'showDetails/fetchShowDetails',
    async (id: number) => {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        return response.data;
    }
);

export const showDetailsSlice = createSlice({
    name: 'showDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShowDetails.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchShowDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.showDetails = action.payload;
            })
            .addCase(fetchShowDetails.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            });
    }
});

export const showDetailsReducer = showDetailsSlice.reducer;
