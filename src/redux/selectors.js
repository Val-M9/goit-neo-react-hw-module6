export const selectContacts = (state) => {
  return state.contacts.contacts.items
}

export const selectFilterByName = (state) => {
  return state.filters.filters.name
}
