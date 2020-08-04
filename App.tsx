import React from 'react';
import { View } from 'react-native';
import AppCard from './app/shared/AppCard';

const App = () => {
    return (
        <View
            style={{
                backgroundColor: '#f8f4f4',
                padding: 20,
                paddingTop: 100
            }}>
            <AppCard
                title="Red jacket for sale"
                subtitle="$100"
                image={require('./app/assets/jacket.jpg')}
            />
        </View>
    );
};

export default App;
