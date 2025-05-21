import { useState, useEffect } from 'react'
import { Container, ContactForm, ContactList, SearchBox } from './components'

function App() {
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  )
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(records))
  }, [records])

  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddRecord={setRecords} />
      <SearchBox onSearch={setSearchValue} searchValue={searchValue} />
      <ContactList records={filteredRecords} onDeleteRecord={setRecords} />
    </Container>
  )
}

export default App
