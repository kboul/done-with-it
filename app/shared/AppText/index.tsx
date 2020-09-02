import React from 'react';
import { Text } from 'react-native';

import IAppText from './model';
import styles from './styles';

const AppText = ({ children, style }: IAppText) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;
