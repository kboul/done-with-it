import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import AppTextInput from '../../AppTextInput';
import ErrorMessage from '../ErrorMessage';
import FormFieldProps from './model';

export default function FormField({ name, ...otherProps }: FormFieldProps) {
    const {
        errors,
        setFieldValue,
        setFieldTouched,
        touched,
        values
    } = useFormikContext<FormikContextType<FormikValues>>();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
