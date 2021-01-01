import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import AppPicker from '../../AppPicker';
import ErrorMessage from '../ErrorMessage';
import FormPickerProps from './model';

export default function FormPicker({
    items,
    name,
    numberOfColumns,
    PickerItemComponent,
    placeholder
}: FormPickerProps) {
    const { errors, setFieldValue, touched, values } = useFormikContext<
        FormikContextType<FormikValues>
    >();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onItemSelect={item => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
