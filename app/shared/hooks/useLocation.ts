import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

interface LocationOutput {
    location: Object;
    error: Object;
}

export default function useLocation(): LocationOutput {
    const [location, setLocation] = useState({});
    const [error, setError] = useState({});

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;
            const result = await Location.getLastKnownPositionAsync();
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
