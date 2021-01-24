import { ReactElement } from 'react';
import { TextInputProps } from 'react-native';

export default interface AppTextProps extends TextInputProps {
    children: ReactElement | string;
    style?: Object;
}
