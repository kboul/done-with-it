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
import listingsApi from '../../api/listings';
import useLocation from '../../shared/hooks/useLocation';
import validationSchema from './validationSchema';
import { Listing } from './models';
import { categories, initialValues } from './constants';
import styles from './styles';

export default function ListingEditScreen() {
    const { location } = useLocation();

    const handleSubmit = async (listing: Listing) => {
        const result = await listingsApi.createListing({
            ...listing,
            location
        });
        if (!result.ok) {
            alert('Cound not save the listing.');
            return;
        }
        alert('Success');
    };

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
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
