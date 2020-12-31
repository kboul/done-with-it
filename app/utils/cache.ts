import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';
const expiryInMinutes = 5;

interface Item {
    timestamp: number;
    value: any;
}

const store = async (key: string, value: any): Promise<void> => {
    try {
        const item: Item = { value, timestamp: Date.now() };
        await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};

const isExpired = (item: Item): boolean => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > expiryInMinutes;
};

// eslint-disable-next-line consistent-return
const get = async (key: string): Promise<any> => {
    try {
        const value = await AsyncStorage.getItem(`${prefix}${key}`);
        const item: Item = value ? JSON.parse(value) : null;

        if (isExpired(item)) {
            await AsyncStorage.removeItem(`${prefix}${key}`);
            return null;
        }

        return item.value;
    } catch (error) {
        console.log(error);
    }
};

export default { store, get };
