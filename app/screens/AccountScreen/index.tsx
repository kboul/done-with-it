import React from 'react';
import { View, FlatList } from 'react-native';

import Icon from '../../components/Icon';
import { ListItem, ListItemSeparator } from '../../components/lists';
import Screen from '../../components/Screen';
import { useAuthContext } from '../../auth/context';
import { AccountScreenProps } from './model';
import menuItems from './constants';
import colors from '../../config/colors';
import styles from './styles';

export default function AccountScreen({ navigation }: AccountScreenProps) {
    const { user, logout } = useAuthContext();

    const handleListItemPress = item => navigation.navigate(item.targetScreen);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../assets/mosh.jpg')}
                    subtitle={user.email}
                    title={user.name}
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
                onPress={logout}
                title="Logout"
                IconComponent={
                    <Icon backgroundColor={colors.lightYellow} name="logout" />
                }
            />
        </Screen>
    );
}
