import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../../AppButton';
import SubmitButtonProps from './model';

export default function SubmitButton({ title }: SubmitButtonProps) {
    const { handleSubmit } = useFormikContext();

    return <AppButton title={title} onPress={handleSubmit} />;
}
