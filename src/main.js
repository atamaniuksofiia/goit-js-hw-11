import { fetchImages } from './js/pixabey-api.js'; // Переконайтеся, що це вірно
import { renderImages, showLoader, hideLoader } from './js/render-functions.js'; // Переконайтеся, що це вірно
const searchForm = document.querySelector('.form-search')



searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = document.querySelector('input[name="query"]').value.trim();
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty.',
        });
        return;
    }

    showLoader();
    fetchImages(query)
        .then(images => {
            renderImages(images);
        })
        .catch(error => {
            console.error(error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again later.',
            });
        })
        .finally(() => {
            hideLoader();
        });
});