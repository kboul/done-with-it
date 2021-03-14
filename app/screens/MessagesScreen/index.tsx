import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Screen from '../../components/Screen';
import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator
} from '../../components/lists';
import Message from './model';
import initialMessages from './constants';

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing] = useState(false);

    const handleMessageDelete = (message: Message) => {
        // delete the message from messages
        setMessages(prevState => prevState.filter(m => m.id !== message.id));
        // call the server
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                onRefresh={() => setMessages([messages[1]])}
                refreshing={refreshing}
                renderItem={({ item }) => (
                    <ListItem
                        image={item.image}
                        // eslint-disable-next-line
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleMessageDelete(item)}
                            />
                        )}
                        showChevrons
                        subtitle={item.description}
                        title={item.title}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}
