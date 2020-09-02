import React from 'react';
import { View } from 'react-native';

import ListItem from '../../shared/ListItem';
import Screen from '../../shared/Screen';
import Icon from '../../shared/Icon';
import colors from '../../config/colors';

const MyAccountScreen = () => {
    return (
        <Screen>
            <View>
                <ListItem
                    image={require('../../assets/mosh.jpg')}
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                />
                <ListItem
                    title="title"
                    ImageComponent={
                        <Icon
                            name="email"
                            backgroundColor="red"
                            iconColor="white"
                        />
                    }
                />

                <ListItem
                    title="Log out"
                    ImageComponent={
                        <Icon
                            name="logout"
                            backgroundColor="yellow"
                            iconColor="#ffe66d "
                        />
                    }
                />
            </View>
        </Screen>
    );
};

export default MyAccountScreen;
