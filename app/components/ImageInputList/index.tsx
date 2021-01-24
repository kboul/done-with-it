import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';

import ImageInput from '../ImageInput';
import ImageInputListProps from './model';
import styles from './styles';

export default function ImageInputList({
    imageUris,
    onImageAdd,
    onImageRemove
}: ImageInputListProps) {
    const scrollViewRef = useRef<ScrollView>(null);

    const handleContentSizeChange = () => scrollViewRef?.current?.scrollToEnd();

    // use a view here in order not to take up the whole screen space because of ScrollView
    return (
        <View>
            <ScrollView
                horizontal
                onContentSizeChange={handleContentSizeChange}
                ref={scrollViewRef}>
                <View style={styles.container}>
                    {imageUris.map(imageUri => (
                        <View key={imageUri} style={styles.imageInput}>
                            <ImageInput
                                imageUri={imageUri}
                                onImageChange={() => onImageRemove(imageUri)}
                            />
                        </View>
                    ))}
                    <ImageInput
                        imageUri=""
                        onImageChange={imageUri => onImageAdd(imageUri)}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
