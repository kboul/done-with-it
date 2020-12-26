import React from 'react';
import { View, FlatList } from 'react-native';

import Icon from '../../shared/Icon';
import { ListItem, ListItemSeparator } from '../../shared/lists';
import Screen from '../../shared/Screen';
import { AccountScreenProps } from './model';
import menuItems from './constants';
import styles from './styles';

export default function AccountScreen({ navigation }: AccountScreenProps) {
    const handleListItemPress = item => navigation.navigate(item.targetScreen);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../../assets/mosh.jpg')}
                    subtitle="programmingwithmosh@gmail.com"
                    title="Mosh Hamedani"
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => handleListItemPress(item)}
                            title={item.title}
                            IconComponent={
                                <Icon
                                    backgroundColor={item.icon.backgroundColor}
                                    name={item.icon.name}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={<Icon backgroundColor="#ffe66d" name="logout" />}
            />
        </Screen>
    );
}
