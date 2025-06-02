import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID OVIbA7cWrUy91rB-atYudUQR6kd-ejUJ80UJ5Ir8vLo',
        },
        params: {
            query:term,
        },
    });
    return response.data.results;
};

export default searchImages;