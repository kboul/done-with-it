import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import AppPicker from '../../AppPicker';
import ErrorMessage from '../ErrorMessage';
import AppFormPickerProps from './model';

export default function AppFormPicker({
    items,
    name,
    numberOfColumns,
    PickerItemComponent,
    placeholder
}: AppFormPickerProps) {
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
            <ErrorMessage error={errors[name]} touched={touched[name]} />
        </>
    );
}
