import React from 'react';
import AppButton from './app/shared/AppButton';

const App = () => {
    return <AppButton title="login" onPress={() => console.log('press')} />;
};

export default App;
