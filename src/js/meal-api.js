import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
export function getMealsByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        s: query,
      },
    })
    .then(response => response.data);
}
