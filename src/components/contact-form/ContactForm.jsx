import { Field, Form, Formik, ErrorMessage } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be longer than 3 symbols')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3,50}$/, 'Phone number must be 3 to 50 digits')
    .required('Required'),
})

const ContactForm = ({ onAddRecord }) => {
  const initialValues = {
    name: '',
    number: '',
  }

  const nameId = useId()
  const numberId = useId()

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values
    onAddRecord((prevRecs) => {
      const id = crypto.randomUUID()

      return [...prevRecs, { id, name, number }]
    })
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <Form className={styles.form}>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} name="name" className={styles.inputField} />
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={numberId}>Number</label>
        <Field id={numberId} name="number" className={styles.inputField} />
        <ErrorMessage name="number" component="span" className={styles.error} />
        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm
