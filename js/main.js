// Список фильмов каталога и фильтр по жанру
const films = [
  { title: 'Москва слезам не верит', year: 1979, genre: 'drama', price: 120 },
  { title: 'Иван Васильевич меняет профессию', year: 1973, genre: 'comedy', price: 100 },
  { title: 'Кин-дза-дза!', year: 1986, genre: 'fantasy', price: 110 },
  { title: 'Офицеры', year: 1971, genre: 'drama', price: 100 },
  { title: 'Бриллиантовая рука', year: 1968, genre: 'comedy', price: 90 },
  { title: 'Гостья из будущего', year: 1984, genre: 'fantasy', price: 130 }
];

const genres = { drama: 'Драма', comedy: 'Комедия', fantasy: 'Фантастика' };

function render(genre) {
  const body = document.getElementById('films');
  body.innerHTML = '';
  films
    .filter(f => genre === 'all' || f.genre === genre)
    .forEach(f => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${f.title}</td><td>${f.year}</td>` +
                      `<td>${genres[f.genre]}</td><td>${f.price} ₽</td>`;
      body.appendChild(row);
    });
}

document.getElementById('genre').addEventListener('change', e => render(e.target.value));
render('all');
