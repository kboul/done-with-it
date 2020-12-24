import React, { useState } from 'react';

import Screen from './app/shared/Screen';
import ImageInputList from './app/shared/ImageInputList';

export default function App() {
    const [imageUris, setImageUris] = useState<string[]>([]);

    const handleImageAdd = (imageUri: string) => {
        setImageUris(prevState => [...prevState, imageUri]);
    };

    const handleImageRemove = (imageUri: string) => {
        setImageUris(prevState => prevState.filter(uri => uri !== imageUri));
    };

    return (
        <Screen>
            <ImageInputList
                imageUris={imageUris}
                onImageAdd={handleImageAdd}
                onImageRemove={handleImageRemove}
            />
        </Screen>
    );
}
