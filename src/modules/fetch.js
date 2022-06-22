import { scorePlaceholder } from './variables.js';

const fetchData = () => {
  scorePlaceholder.innerHTML = '';
  fetch()
    .then((res) => res.json())
    .then((data) => {
      data.result.forEach((data) => {
        scorePlaceholder.innerHTML += `
      <li>${data.user}: ${data.score}</li>`;
      });
    });
};

export default fetchData;