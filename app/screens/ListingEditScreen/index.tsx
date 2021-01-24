import React, { useState } from 'react';

import {
    Form,
    FormField,
    FormImagePicker,
    FormPicker,
    SubmitButton
} from '../../components/forms';
import CategoryPickerItem from '../../components/CategoryPickerItem';
import Screen from '../../components/Screen';
import UploadScreen from '../UploadScreen';
import listingsApi from './api';
import useLocation from '../../hooks/useLocation';
import validationSchema from './validationSchema';
import { Listing } from './models';
import { categories, initialValues } from './constants';
import styles from './styles';

export default function ListingEditScreen() {
    const { location } = useLocation();

    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing: Listing, { resetForm }) => {
        setProgress(0);
        setVisible(true);
        const result = await listingsApi.createListing(
            {
                ...listing,
                location
            },
            progressEvent => setProgress(progressEvent)
        );

        if (!result.ok) {
            setVisible(false);
            alert('Cound not save the listing.');
        }

        resetForm(initialValues);
    };

    const handleAnimationDone = (isCancelled: boolean) => {
        if (!isCancelled) setVisible(false);
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen
                onDone={handleAnimationDone}
                progress={progress}
                visible={visible}
            />
            <Form
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
            </Form>
        </Screen>
    );
}
