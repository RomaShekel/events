
import css from './CreateEvent.module.css'
import { Formik, Field, Form } from 'formik'

export const CreateEvent = () => {

    const initialValues = {
        name: '',
        organizer: '',
        date: ''
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <Formik
            initialValues={initialValues}
            onSubmit={values => handleSubmit(values)}
            >
            <Form className={css.form}>
                <label>
                    Event Name:
                    <Field name="name" type="text"/>
                </label>
                <label>
                    Organizer Name:
                    <Field name="organizer" type="text"/>
                </label>
                <label>
                    Date of the Event:
                    <Field name="date" type="date" />
                </label>
                <label>
                    City:
                    <Field name="location" type="text"/>
                </label>

                <button type="submit" className={css.submitBtn} >Send</button>
            </Form>
            </Formik>
        </>
    )
}