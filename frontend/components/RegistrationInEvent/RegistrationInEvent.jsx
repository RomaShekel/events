import { Formik, Field, Form } from 'formik'
import css from './RegistrationInEvent.module.css'

export const RegistrationInEvent = (eventId) => {

    const initialValues = {
        email: '',
        password: '',
        name:'',
        birth: '',
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
        <Formik
        initialValues={initialValues}
        onSubmit={values=> handleSubmit(values)}
        >
        <Form className={css.form}>
                <label>
                    Email:
                    <Field name="email" type="email"/>
                </label>
                <label>
                    Password:
                    <Field name="password" type="password"/>
                </label>
                <label>
                    Username:
                    <Field name="name" type="text"/>
                </label>
                <label>
                    Date of the Birth:
                    <Field name="birth" type="date" />
                </label>

                <button type="submit" className={css.submitBtn} >Send</button>
            </Form>
        </Formik>
        </>
    )
}