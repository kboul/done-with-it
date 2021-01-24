import React from 'react';

import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';

interface ErrorMessageProps {
    onPress: () => void;
}

export default function ErrorMessage({ onPress }: ErrorMessageProps) {
    return (
        <>
            <AppText>Couldn&apos;t retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={onPress} />
        </>
    );
}
