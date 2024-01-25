import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
    name: string;
}

export type OrderColor = 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'cyan';


// Исходный стейт
const initialState: State = {
    name: 'начальное название btna',
}


export const btnChangeNameSlice = createSlice({
    name: 'colorChecker',
    initialState,
    reducers: {
        buttonNameCh: (state: State, action: PayloadAction<State>) => {
            state.name = action.payload.name
        },

    },
});

export const { buttonNameCh } = btnChangeNameSlice.actions;

export default btnChangeNameSlice.reducer;