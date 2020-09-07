import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        left: 20
    },
    deleteIcon: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default styles;
