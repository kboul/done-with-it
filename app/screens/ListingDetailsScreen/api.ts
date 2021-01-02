import client from '../../api/client';

const send = (message: string, listingId: number) =>
    client.post('/messages', { message, listingId });

export default { send };
