import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

export const fetchData = async (filters, sortBy, sortOrder, page) => {
    try {
        const response = await apiClient.get('/api/records', {
            params: {
                ...filters,
                sortBy,
                sortOrder,
                page,
                pageSize: 10,
            },
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { items: [], totalPages: 1 };
    }
};
