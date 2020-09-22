import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(1000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description')
});

export default validationSchema;
