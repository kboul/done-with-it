import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir'
            },
            android: {
                fontSize: 16,
                fontFamily: 'Roboto'
            }
        })
    }
});

export default styles;
