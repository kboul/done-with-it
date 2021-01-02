import * as Yup from 'yup';

export default Yup.object().shape({
    imageUris: Yup.array().min(1, 'Please select at least one image'),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(1000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description')
});
