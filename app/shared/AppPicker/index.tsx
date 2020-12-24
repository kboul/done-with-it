import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Modal,
    Button,
    Platform,
    FlatList
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import PickerItem from '../PickerItem';
import Screen from '../Screen';
import { AppPickerProps, Item } from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onItemSelect,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem
}: AppPickerProps) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleItemSelect = (item: Item) => {
        onItemSelect(item);
        setModalVisible(false);
    };

    const modalContent = (
        <>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                    <PickerItemComponent
                        item={item}
                        onPress={() => handleItemSelect(item)}
                    />
                )}
            />
        </>
    );

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            color={colors.mediumGray}
                            name={icon}
                            size={20}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}
                    <MaterialCommunityIcons
                        color={colors.mediumGray}
                        name="chevron-down"
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal animationType="slide" visible={modalVisible}>
                {Platform.OS === 'android' ? (
                    modalContent
                ) : (
                    <Screen>{modalContent}</Screen>
                )}
            </Modal>
        </>
    );
}
