import React from 'react';
import { View, FlatList } from 'react-native';

import Icon from '../../shared/Icon';
import ListItem from '../../shared/ListItem';
import ListItemSeparator from '../../shared/ListItemSeparator';
import Screen from '../../shared/Screen';
import menuItems from './constants';
import styles from './styles';

const MyAccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    image={require('../../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.id.toString()}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
};

export default MyAccountScreen;
