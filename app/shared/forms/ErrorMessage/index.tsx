import React from 'react';

import AppText from '../../AppText';
import ErrorMessageProps from './model';
import styles from './styles';

export default function ErrorMessage({ error, touched }: ErrorMessageProps) {
    if (!touched || !error) return null;

    return <AppText style={styles.error}>{error}</AppText>;
}
