interface Listing {
    category: {
        backgroundColor: string;
        icon: string;
        label: string;
        value: number;
    };
    description: string;
    imageUris: string[];
    location: Location;
    price: string;
    title: string;
}

interface Location {
    latitude: number | null;
    longitude: number | null;
}

interface Category {
    backgroundColor: string;
    icon: string;
    label: string;
    value: number;
}

export type { Category, Location, Listing };
