import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-dom';

import AppButton from '.';

test('it works', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
        <AppButton title="my button" onPress={mockFn} />
    );
    const text = getByTestId('mytext');
    expect(text).toBeTruthy();
});
