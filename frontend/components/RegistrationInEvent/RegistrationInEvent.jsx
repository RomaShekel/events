import { Formik, Field, Form } from 'formik'
import css from './RegistrationInEvent.module.css'
import { registerInEvent } from '../../axios.js'
import { useParams, useSearchParams } from 'react-router-dom'
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address!')
        .required('Email is required!'),
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters!')
        .required('Name is required'),
    birth: Yup.date()
        .required('Date of birth is required!'),
});


const initialValues = {
    email: '',
    name:'',
    birth: '',
    from: 'myself'
}


export const RegistrationInEvent = () => {

    const { eventId } = useParams()

    const handleSubmit = async (values) => {
        console.log(values)
        await registerInEvent(eventId, values)
    }


    return (
        <>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values=> handleSubmit(values)}
        >
        <Form className={css.form}>
                <label>
                    Email: <ErrorMessage className={css.errEmail} name="email" component="span" />
                    <Field name="email" type="email"/>
                </label>
                <label>
                    Username: <ErrorMessage className={css.errName} name="name" component="span" />
                    <Field name="name" type="text"/>
                </label>
                <label>
                    Date of the Birth: <ErrorMessage className={css.errBirth} name="birth" component="span" />
                    <Field name="birth" type="date" />
                </label>

                <div className={css.radio}>
                    <h4>Where did you hear about this event</h4>
                    <label>
                    <Field type="radio" name="from" value="media" />
                    Social media
                    </label>
               
                    <label>
                    <Field type="radio" name="from" value="friends" />
                    Friends
                    </label>
              
                    <label>
                    <Field type="radio" name="from" value="myself" />
                    Found myself
                    </label>
                </div>

                <button type="submit" className={css.submitBtn} >Send</button>
            </Form>
        </Formik>
        </>
    )
}