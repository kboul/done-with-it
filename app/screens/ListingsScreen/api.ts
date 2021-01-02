import client from '../../api/client';

const getListings = () => client.get('/listings');

export default { getListings };
