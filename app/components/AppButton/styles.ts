import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
        marginTop: 10
    },
    buttonText: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default styles;
