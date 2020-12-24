import React, { useState } from 'react';

import Screen from './app/shared/Screen';
import ImageInput from './app/shared/ImageInput';

export default function App() {
    const [imageUri, setImageUri] = useState('');

    return (
        <Screen>
            <ImageInput
                imageUri={imageUri}
                onChangeImage={uri => setImageUri(uri)}
            />
        </Screen>
    );
}
