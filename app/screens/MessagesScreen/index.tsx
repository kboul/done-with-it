import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../../shared/Screen';
import ListItem from '../../shared/ListItem';
import messages from './constants';

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
};

export default MessagesScreen;
