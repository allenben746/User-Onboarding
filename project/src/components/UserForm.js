import React from 'react';
import { withFormik, Form, Field } from "formik";


const UserForm = () => {
    return (
        <div className="userForm">
            <h1>User Sign-Up</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <Field type="checkbox" name="termsOfService" placeholder="I agree to the Terms of Service" />
                <button type="submit">Submit Info</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({})(UserForm);

export default FormikUserForm;