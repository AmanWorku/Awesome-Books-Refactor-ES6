export default class UI {
  static displayBooks() {
    const storedBooks = [];
    storedBooks.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <div class="remove-tables">
    <td> "${book.title}" by ${book.author}  <button><a href="#" class="remove-btn">Remove</button></td>
    </div>
    `;
    list.appendChild(row);

    localStorage.setItem('bookList', JSON.stringify(book));
  }

  static deleteBook(ell) {
    if (ell.classList.contains('remove-btn')) {
      ell.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getBooks() {
    return JSON.parse(localStorage.getItem('bookList')) || [];
  }
}