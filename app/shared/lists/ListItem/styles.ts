import { StyleSheet } from 'react-native';

import colors from '../../../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: '500'
    },
    subtitle: {
        color: colors.mediumGray
    }
});

export default styles;
