import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getMealsByQuery } from './meal-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-meal'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Ви нічого не ввели',
      position: 'topCenter',
    });
    return;
  }

  clearGallery();
  showLoader();

  getMealsByQuery(query)
    .then(data => {
      if (data.meals.length === 0) {
        iziToast.info({
          message: 'Нічого не знайдено',
          position: 'topCenter',
        });
      } else {
        createGallery(data.meals);
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Помилка при завантажені',
        position: 'topCenter',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
