import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 50,
        alignItems: 'center', //  x axis
        justifyContent: 'center' // y axis
    },
    buttonText: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
