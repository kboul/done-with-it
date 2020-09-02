import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../../shared/Screen';
import ListItemSeparator from '../../shared/ListItemSeparator';
import ListItem from '../../shared/ListItem';
import messages from './constants';

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item: { title, description, image } }) => (
                    <ListItem
                        title={title}
                        subtitle={description}
                        image={image}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

export default MessagesScreen;
