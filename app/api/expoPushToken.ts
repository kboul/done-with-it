import client from './client';

const register = (pushToken: string) => {
    client.post('/expoPushTokens', { token: pushToken });
};

export default { register };
