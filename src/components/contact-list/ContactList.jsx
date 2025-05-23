import { useSelector } from 'react-redux'
import { selectContacts, selectFilterByName } from '../../redux/selectors'
import Contact from '../contact/Contact'
import styles from './ContactList.module.css'

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filterByName = useSelector(selectFilterByName)

  const renderContacts =
    filterByName.length > 0
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterByName.toLowerCase())
        )
      : contacts

  return (
    <>
      {renderContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {renderContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </>
  )
}

export default ContactList
