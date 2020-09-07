import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../../AppTextInput';
import ErrorMessage from '../ErrorMessage';
import AppFormFieldProps from './model';

export default function AppFormField({
    name,
    ...otherProps
}: AppFormFieldProps) {
    const {
        setFieldTouched,
        handleChange,
        errors,
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
