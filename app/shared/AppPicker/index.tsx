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

import { AppPickerProps, Item } from './model';
import AppText from '../AppText';
import PickerItem from '../PickerItem';
import Screen from '../Screen';
import colors from '../../config/colors';
import styles from './styles';

const AppPicker = ({
    icon,
    items,
    selectedItem,
    onItemSelect,
    placeholder
}: AppPickerProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleItemSelect = (item: Item) => {
        setModalVisible(false);
        onItemSelect(item);
    };

    const modalContent = (
        <>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({ item }) => (
                    <PickerItem
                        label={item.label}
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
                            name={icon}
                            size={20}
                            color={colors.mediumGray}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.mediumGray}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                {Platform.OS === 'android' ? (
                    modalContent
                ) : (
                    <Screen>{modalContent}</Screen>
                )}
            </Modal>
        </>
    );
};

export default AppPicker;
