import React from 'react';
import { View, FlatList } from 'react-native';

import Icon from '../../shared/Icon';
import { ListItem, ListItemSeparator } from '../../shared/lists';
import Screen from '../../shared/Screen';
import { useAuthContext } from '../../auth/context';
import authStorage from '../../auth/storage';
import { AccountScreenProps } from './model';
import menuItems from './constants';
import colors from '../../config/colors';
import styles from './styles';

export default function AccountScreen({ navigation }: AccountScreenProps) {
    const { user, setUser } = useAuthContext();

    const handleListItemPress = item => navigation.navigate(item.targetScreen);

    const handleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    };

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
                onPress={handleLogout}
                title="Logout"
                IconComponent={
                    <Icon backgroundColor={colors.lightYellow} name="logout" />
                }
            />
        </Screen>
    );
}
