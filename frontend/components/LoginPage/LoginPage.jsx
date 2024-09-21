import css from './LoginPage.module.css'
import { Formik, Field, Form } from 'formik'

export const LoginPage = () => {

    const initialValues = {
        email: '',
        password: '',
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
                    Email:
                    <Field name="email" type="email"/>
                </label>
                <label>
                    Password:
                    <Field name="password" type="password"/>
                </label>

                <button type="submit" className={css.submitBtn} >Send</button>
            </Form>
            </Formik>
        </>
    )
}