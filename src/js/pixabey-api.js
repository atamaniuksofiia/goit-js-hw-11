const API_KEY = '46237249-998f0f24dffb15788a2eb0e4e';
const BASE_URL = `https://pixabay.com/api/`;


export const fetchImages = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits; // Повертаємо масив зображень
    } catch (error) {
        console.error('Error fetching images:', error);
        return []; // Повертаємо порожній масив у разі помилки
    }
};