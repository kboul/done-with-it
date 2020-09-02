import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Screen from '../../shared/Screen';
import ListItemSeparator from '../../shared/ListItemSeparator';
import ListItem from '../../shared/ListItem';
import ListItemDeleteAction from '../../shared/ListItemDeleteAction';
import IMessage from './model';
import initialMessages from './constants';

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleMessageDelete = (message: IMessage) => {
        // delete the message from messages
        setMessages(prevState => prevState.filter(m => m.id !== message.id));
        // call the server
    };

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
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleMessageDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([messages[1]])}
            />
        </Screen>
    );
};

export default MessagesScreen;
