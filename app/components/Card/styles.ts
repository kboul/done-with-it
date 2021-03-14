import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden' // force image to have round corners
    },
    detailsContainer: {
        padding: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        marginBottom: 5
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
});

export default styles;
