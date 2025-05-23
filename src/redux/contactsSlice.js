import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
    },
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.items.push(payload)
    },
    deleteContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== payload
      )
    },
  },
})

export const contactsReducer = contactsSlice.reducer
export const { addContact, deleteContact } = contactsSlice.actions
