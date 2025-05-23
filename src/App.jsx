import { Container, ContactForm, ContactList, SearchBox } from './components'

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  )
}

export default App
