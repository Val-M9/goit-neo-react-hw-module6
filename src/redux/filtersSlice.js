import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      name: '',
    },
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters.name = payload
    },
  },
})

export const filtersReducer = filtersSlice.reducer
export const { changeFilter } = filtersSlice.actions
