import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10, // ios : 15
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        marginTop: 5 // ios : 0
    }
});

export default styles;
