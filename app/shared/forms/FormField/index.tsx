import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../../AppTextInput';
import ErrorMessage from '../ErrorMessage';
import FormFieldProps from './model';

export default function FormField({ name, ...otherProps }: FormFieldProps) {
    const {
        errors,
        handleChange,
        setFieldTouched,
        touched
    } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} touched={touched[name]} />
        </>
    );
}
