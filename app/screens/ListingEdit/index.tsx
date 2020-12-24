import React from 'react';

import {
    AppForm,
    FormField,
    FormImagePicker,
    FormPicker,
    SubmitButton
} from '../../shared/forms';
import CategoryPickerItem from '../../shared/CategoryPickerItem';
import Screen from '../../shared/Screen';
import useLocation from '../../shared/hooks/useLocation';
import validationSchema from './validationSchema';
import { Values } from './models';
import { categories, initialValues } from './constants';
import styles from './styles';

export default function ListingEdit() {
    const { location } = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={initialValues}
                onSubmit={(values: Values) => console.log(values, location)}
                validationSchema={validationSchema}>
                <FormImagePicker name="imageUris" />
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8} // includes 10000.99
                    name="price"
                    placeholder="Price"
                />
                <FormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3} // only works on android
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}
