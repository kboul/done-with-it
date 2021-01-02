import React from 'react';
import { Formik } from 'formik';

import FormProps from './model';

export default function Form({
    children,
    initialValues,
    onSubmit,
    validationSchema
}: FormProps) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => <>{children}</>}
        </Formik>
    );
}
