import React, { useEffect } from 'react';
import { Image, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import ImageInputProps from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function ImageInput({
    imageUri,
    onImageChange
}: ImageInputProps) {
    const requestCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted)
            alert('You need to enable permissions to acess the library');
    };

    useEffect(() => {
        requestCameraPermissions();
    }, []);

    const handleImageSelect = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) onImageChange(result.uri);
        } catch (error) {
            throw new Error('Error reading the image');
        }
    };

    const handlePress = () => {
        if (!imageUri) handleImageSelect();
        else
            Alert.alert(
                'Delete',
                'Are you sure you want to delete this image?',
                [
                    { text: 'Yes', onPress: () => onImageChange('') },
                    { text: 'No' }
                ]
            );
    };

    const content = !imageUri ? (
        <MaterialCommunityIcons
            color={colors.mediumGray}
            name="camera"
            size={40}
        />
    ) : (
        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
    );

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>{content}</View>
        </TouchableWithoutFeedback>
    );
}
