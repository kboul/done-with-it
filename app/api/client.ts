import { create } from 'apisauce';

import cache from '../utils/cache';

const client = create({
    // for android virtual device to be able to see the api
    // ip address
    baseURL: 'http://192.168.1.5:9000/api'
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
