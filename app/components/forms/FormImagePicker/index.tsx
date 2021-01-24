import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import ErrorMessage from '../ErrorMessage';
import FormImagePickerProps from './model';
import ImageInputList from '../../ImageInputList';

export default function FormImagePicker({ name }: FormImagePickerProps) {
    const { errors, setFieldValue, touched, values } = useFormikContext<
        FormikContextType<FormikValues>
    >();
    const imageUris = values[name];

    const handleImageAdd = (imageUri: string) => {
        setFieldValue(name, [...imageUris, imageUri]);
    };

    const handleImageRemove = (imageUri: string) => {
        setFieldValue(
            name,
            imageUris.filter((uri: string) => uri !== imageUri)
        );
    };

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onImageAdd={handleImageAdd}
                onImageRemove={handleImageRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
