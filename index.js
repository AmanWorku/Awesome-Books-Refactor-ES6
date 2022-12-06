/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */

import {
  first, second, third, body0, bodyT, bodyS,
} from './modules/pageDynamics.js';
import { DateTime } from './modules/luxon.js';
import UI from './modules/classUI.js';
import Book from './modules/classBook.js';

first.addEventListener('click', () => {
  body0.style.display = 'block';
  bodyT.style.display = 'none';
  bodyS.style.display = 'none';
});

second.addEventListener('click', () => {
  body0.style.display = 'none';
  bodyT.style.display = 'block';
  bodyS.style.display = 'none';
});

third.addEventListener('click', () => {
  body0.style.display = 'none';
  bodyT.style.display = 'none';
  bodyS.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// add books

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // instantiate book
  const book = new Book(title, author);

  // add book to list
  UI.addBookToList(book);

  // clear fields
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

const now = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
document.querySelector('.date').innerHTML = `${now}`;
