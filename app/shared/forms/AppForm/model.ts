import { ReactNode } from 'react';

export default interface AppFormProps {
    children: ReactNode;
    initialValues: Object;
    onSubmit: (values: any) => void;
    validationSchema: Object;
}
