import React from 'react';
import { Modal, View } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import UploadScreenProps from './model';
import colors from '../../config/colors';
import styles from './styles';

export default function UploadScreen({
    onDone,
    progress = 0,
    visible = false
}: UploadScreenProps) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        onAnimationFinish={onDone}
                        loop={false}
                        source={require('./done.json')}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}
