import { Listing } from '../screens/ListingEditScreen/models';
import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const createListing = (listing: Listing) => {
    const {
        category,
        description,
        imageUris,
        location,
        title,
        price
    } = listing;

    const data = new FormData();
    data.append('title', title);
    data.append('price', price);
    data.append('categoryId', String(category.value));
    imageUris.forEach((imageUri, index) =>
        data.append('images', {
            name: `image${index}`,
            type: 'image/jpeg',
            uri: imageUri
        })
    );
    data.append('description', description);
    if (location) data.append('location', JSON.stringify(location));

    return client.post(endpoint, data);
};

export default {
    getListings,
    createListing
};
