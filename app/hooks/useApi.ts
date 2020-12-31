import { useState } from 'react';

interface ApiReturnType {
    data: any[];
    error: boolean;
    loading: boolean;
    request: () => void;
}

export default function useApi(apiFunc): ApiReturnType {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        const response = await apiFunc();
        setLoading(false);

        if (!response.ok) {
            setError(true);
            return;
        }

        setError(false);
        setData(response.data);
    };

    return { data, error, loading, request };
}
