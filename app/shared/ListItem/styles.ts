import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: '500'
    },
    subtitle: {
        color: colors.mediumGrey
    }
});

export default styles;
