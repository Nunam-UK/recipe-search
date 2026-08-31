const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(meals) {
  const markup = meals
    .map(({ strMealThumb, strMeal, strCategory, strArea }) => {
      return `
      <li class='gallery-item'>
      <img class="gallery-image" src="${strMealThumb}">
      <h3>Назва страви: ${strMeal}</h3>
      <p>Категорія: ${strCategory}</p>
      <p>Країна: ${strArea}</p>
      </li>
    `;
    })
    .join('');
  gallery.innerHTML += markup;
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
