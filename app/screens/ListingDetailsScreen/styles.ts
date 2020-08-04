import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden' // force iamge to have round corners
    },
    detailsContainer: {
        padding: 10
    },
    listItemContainer: {
        marginTop: 40
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 5
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;
