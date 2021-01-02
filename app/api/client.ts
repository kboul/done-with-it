import { create } from 'apisauce';

import cache from '../utils/cache';
import authStorage from '../auth/storage';
import settings from '../config/settings';

const client = create({
    // for android virtual device to be able to see the api - ip address
    baseURL: settings.apiUrl
});

client.addAsyncRequestTransform(async request => {
    const token = await authStorage.getToken();
    if (!token) return;

    request.headers['x-auth-token'] = token;
});

const { get } = client;

client.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

export default client;
