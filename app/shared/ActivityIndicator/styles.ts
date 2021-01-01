import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
    overlay: {
        backgroundColor: colors.white,
        height: '100%',
        opacity: 0.8,
        position: 'absolute',
        width: '100%',
        zIndex: 1
    }
});
