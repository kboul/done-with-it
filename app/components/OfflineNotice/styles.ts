import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.red,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 100
    },
    text: { color: colors.white }
});
