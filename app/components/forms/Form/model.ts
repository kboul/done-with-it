import { ReactNode } from 'react';

export default interface FormProps {
    children: ReactNode;
    initialValues: Object;
    onSubmit: (values: any, { resetForm: any }) => void;
    validationSchema: Object;
}
