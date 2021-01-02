import client from '../../api/client';
import { Listing } from './models';

interface UploadProgress {
    isTrusted: boolean;
    lengthComputabe: boolean;
    loaded: number;
    total: number;
}

const createListing = (
    listing: Listing,
    onUploadProgress: (progress: number) => void
) => {
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

    return client.post('/listings', data, {
        onUploadProgress: (progress: UploadProgress) =>
            onUploadProgress(progress.loaded / progress.total)
    });
};

export default { createListing };
