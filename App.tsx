import React from 'react';
import AppTextInput from './app/shared/AppTextInput';
import AppText from './app/shared/AppText';
import Screen from './app/shared/Screen';

const App = () => {
    return (
        <Screen>
            <AppTextInput placeholder="placeholder" icon="email" />
            <AppText>Red Jacket for sale</AppText>
        </Screen>
    );
};

export default App;
