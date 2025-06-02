import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: null,
};

export const getProjects = createAsyncThunk("projects/getProjects", async () => {
    const result = await axios.get(`https://api.github.com/users/sunnat111/repos`);
    const data = result.data

    return data;
});


export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        sortProjects: (state, action) => {
            state.items?.sort((a, b) => {
                if (a[action.payload] > b[action.payload]) {
                    return 1;
                } else {
                    return -1;
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProjects.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});


export const { sortProjects } = projectsSlice.actions;

export default projectsSlice.reducer;


