import React from 'react';
import AppTextInput from './app/shared/AppTextInput';
import Screen from './app/shared/Screen';
import AppPicker from './app/shared/AppPicker';

const App = () => {
    return (
        <Screen>
            <AppPicker icon="apps" placeholder="Category" />
            <AppTextInput icon="email" placeholder="Email" />
        </Screen>
    );
};

export default App;
