import React from 'react';
import { Alert, View } from 'react-native';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import { Form, FormField, SubmitButton } from '../../components/forms';
import messagesApi from './api';
import { Listing } from '../ListingsScreen/model';

interface ContactFormProps {
    listing: Listing;
}

interface BuyerInfo {
    message: string;
}

const validationSchema = Yup.object().shape({
    message: Yup.string().label('Message')
});

export default function ContactSellerForm({ listing }: ContactFormProps) {
    const handleSubmit = async ({ message }: BuyerInfo, { resetForm }) => {
        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            Alert.alert('Error', 'Could not send the message to the seller.');
            throw new Error(JSON.stringify(result));
        }

        resetForm();

        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Awesome!',
                body: 'Your message was sent to the seller.'
            },
            trigger: { seconds: 1 }
        });
    };

    return (
        <View>
            <Form
                initialValues={{ message: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <FormField
                    maxLength={255}
                    multiline
                    name="message"
                    numberOfLines={3}
                    placeholder="Message..."
                />
                <SubmitButton title="Contact Seller" />
            </Form>
        </View>
    );
}
