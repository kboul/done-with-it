import { ReactNode } from 'react';

export default interface AppFormProps {
    initialValues: Object;
    onSubmit: (values: any) => void;
    validationSchema: Object;
    children: ReactNode;
}
