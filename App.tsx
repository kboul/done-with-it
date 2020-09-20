import React, { useState } from 'react';

import AppTextInput from './app/shared/AppTextInput';
import Screen from './app/shared/Screen';
import AppPicker from './app/shared/AppPicker';

import { Item } from './app/shared/AppPicker/model';

const categories: Item[] = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 }
];

const App = () => {
    const [category, setCategory] = useState(categories[0]);
    return (
        <Screen>
            <AppPicker
                icon="apps"
                items={categories}
                onItemSelect={item => setCategory(item)}
                placeholder="Category"
                selectedItem={category}
            />
            <AppTextInput icon="email" placeholder="Email" />
        </Screen>
    );
};

export default App;
