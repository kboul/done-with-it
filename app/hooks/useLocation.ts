import { useEffect, useState } from 'react';
import * as ExpoLocation from 'expo-location';
import { Location } from '../screens/ListingEditScreen/models';

interface LocationOutput {
    location: Location | undefined;
    error: Object;
}

export default function useLocation(): LocationOutput {
    const [location, setLocation] = useState<Location>();
    const [error, setError] = useState({});

    const getLocation = async () => {
        try {
            const { granted } = await ExpoLocation.requestPermissionsAsync();
            if (!granted) return;
            const result = await ExpoLocation.getLastKnownPositionAsync();
            if (result) {
                const {
                    coords: { latitude, longitude }
                } = result;
                setLocation({ latitude, longitude });
            }
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return { location, error };
}
